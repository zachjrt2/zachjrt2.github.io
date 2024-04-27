import { ItemData } from "../types";
import ItemCard from "../components/ItemCard";
import { useEffect, useState } from "react";

const Items = () => {
  const [items, setItems] = useState<ItemData[]>([]);
  const [highestRedeemValues, setHighestRedeemValues] = useState<ItemData[]>([]);
  const [mostCommonDisplayName, setMostCommonDisplayName] = useState<{ displayName: string, count: number }>({ displayName: "loading...", count: 0 });

  // Function to fetch data from the API and create cards
  async function fetchData() {
    try {
      const response = await fetch("https://aiastream.onrender.com/item");
      const data = await response.json();

      console.log(data)

      setItems(data);
      loadMostCommonDisplayName(data);
      loadHighestEventRedeemValue(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // Sort Functions
  function sortByDuration() {
    setItems(
      items.slice().sort((a, b) => a.EventType - b.EventType)
    );
  }

  function sortByValue() {
    setItems(
      items.slice().sort((a, b) => a.EventRedeemValue - b.EventRedeemValue)
    );
  }

  function sortByDisplayName() {
    setItems(
      items.slice().sort((a, b) => a.DisplayName.localeCompare(b.DisplayName))
    );
  }

  function sortByAddress() {
    setItems(
      items.slice().sort((a, b) => a.Address.localeCompare(b.Address))
    );
  }

  function sortByCreationTime() {
    setItems(
      items.slice().sort((a, b) => {
        const dateA = new Date(a.CreationTime);
        const dateB = new Date(b.CreationTime);
        return dateB.getTime() - dateA.getTime();
      })
    );
  }
  

  function sortByEventType() {
    setItems(
      items.slice().sort((a, b) => b.EventType - a.EventType)
    );
  }

  // Utility Functions
  function loadHighestEventRedeemValue(data: ItemData[]) {
    let highestValue = Number.MIN_SAFE_INTEGER;
    const tiedValues: ItemData[] = [];

    data.forEach(item => {
      const redeemValue = item.EventRedeemValue;
      if (redeemValue > highestValue) {
        highestValue = redeemValue;
        tiedValues.length = 0; // Clear previous ties if any
        tiedValues.push(item);
      } else if (redeemValue === highestValue) {
        tiedValues.push(item);
      }
    });

    setHighestRedeemValues(tiedValues);
  }

  function loadMostCommonDisplayName(data: ItemData[]) {
    const displayNameCount = new Map<string, number>();

    data.forEach(item => {
      const displayName = item.DisplayName;
      displayNameCount.set(displayName, (displayNameCount.get(displayName) || 0) + 1);
    });

    let mostCommonName = 'loading...';
    let maxCount = 0;

    displayNameCount.forEach((count, name) => {
      if (count > maxCount) {
        mostCommonName = name;
        maxCount = count;
      }
    });

    setMostCommonDisplayName({ displayName: mostCommonName, count: maxCount });
  }

  return (
    <>
      <section className="hero">
        <div className="container text-center">
          <h1>Items</h1>
          <h6>Most Items</h6>
          <div id="mostCommonDisplayNameContainer">
            {mostCommonDisplayName.displayName} : {mostCommonDisplayName.count}
          </div>
          <h6>Most Valuable Item(s)</h6>
          <div id="highestEventRedeemValueContainer">
            {
              highestRedeemValues.map((value, i) => (
                <p key={i}>
                  {value.DisplayName} : {value.EventRedeemValue}
                </p>
              ))
            }
          </div>
        </div>
      </section>

      <section className="cards">
        <div className="container">
          <div className="row">
            <div id="buttonContainerItem">
              <button id="sortDuration" onClick={sortByDuration}>Sort by Duration</button>
              <button id="sortDisplayName" onClick={sortByDisplayName}>Sort by Display Name</button>
              <button id="sortAddress" onClick={sortByAddress}>Sort by Object Type</button>
              <button id="sortCreationTime" onClick={sortByCreationTime}>Sort by Creation Time</button>
              <button id="sortEventType" onClick={sortByEventType}>Sort by Event Type</button>
              <button id="sortValue" onClick={sortByValue}>Sort by Value</button>
            </div>
            <div id="cardContainer">
              {items.map((item: ItemData, i: number) => (
                <ItemCard key={i} data={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Items;
