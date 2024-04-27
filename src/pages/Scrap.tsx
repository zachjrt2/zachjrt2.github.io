import { useEffect, useState } from "react"
import ScrapCard from "../components/ScrapCard";
import { ScrapData } from "../types";


const Scrap = () => {

    const [items, setItems] = useState<ScrapData[]>([]);
    // Function to fetch data from the API and create cards
    async function fetchData() {
        try {
            const response = await fetch("https://aiastream.onrender.com/scrap");
            const data = await response.json();

            // Extracting fields from the API response
            setItems(data);

            // Logging the extracted data
            console.log(data);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    //#region Sorting Functions
    // Sort data array by UserId
    function sortByUserId() {
        setItems(
            items.slice().sort((a, b) => {
                return String(a.UserId).localeCompare(String(b.UserId));
            })
        );
    }

    // Sort data array by DisplayName
    function sortByDisplayName() {
        setItems(
            items.slice().sort((a, b) => a.DisplayName.localeCompare(b.DisplayName))
        );
    }

    // Sort data array by Platform
    function sortByPlatform() {
        setItems(
            items.slice().sort((a, b) => {
                const platformA = typeof a.Platform === 'string' ? a.Platform : '';
                const platformB = typeof b.Platform === 'string' ? b.Platform : '';
                return platformA.localeCompare(platformB);
            })
        );

    }

    // Sort data array by ScrapTotal
    function sortByScrapTotal() {
        setItems(
            items.slice().sort((a, b) => b.ScrapTotal - a.ScrapTotal)
        );
    }

    // Sort data array by ScrapCurrent
    function sortByScrapCurrent() {
        setItems(
            items.slice().sort((a, b) => b.ScrapCurrent - a.ScrapCurrent)
        );
    }
    //#endregion

    return (
        <>
            <section className="hero">
                <div className="container text-center">
                    <h1>Scrap</h1>
                    <p>Check on scrap totals from the stream</p>
                </div>
            </section>

            <section className="cards">
                <div className="container">
                    <div className="row">
                        <div id="buttonContainer">
                            <button id="sortUserId" onClick={sortByUserId}>Sort by User ID</button>
                            <button id="sortDisplayName" onClick={sortByDisplayName}>Sort by Display Name</button>
                            <button id="sortPlatform" onClick={sortByPlatform}>Sort by Platform</button>
                            <button id="sortScrapTotal" onClick={sortByScrapTotal}>Sort by Total Scrap</button>
                            <button id="sortScrapCurrent" onClick={sortByScrapCurrent}>Sort by Current Scrap</button>
                        </div>
                        <div id="cardContainer">
                            {items.map((item: ScrapData, i: number) => <ScrapCard key={i} data={item}/>)}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Scrap