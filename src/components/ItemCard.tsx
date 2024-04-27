import { EventType, ItemData, Platform } from "../types"

interface Props {
    data: ItemData
}

const ItemCard = ({ data }: Props) => {
    function convertTick(ticks: number): string {
        const seconds = ticks / 60;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${hours} h:${minutes} m:${remainingSeconds} s`;
    }
    return (
        <>
            <div className="cardItem">
                <div className="display-name">{data.DisplayName}</div>
                <div className="platform">Platform: {Platform[data.UserPlatform]}</div>

                <div>Created: {data.CreationTime.toLocaleString()}</div>
                <div>Event: {EventType[data.EventType]}</div>
                <div>Value: {data.EventRedeemValue}</div>
                <div>Duration: {convertTick(data.CreationTick)}</div>
                <div>Repaired Time: {data.TimeModifier}</div>
                <div>Type: {data.Address}</div>

                <img src={"/img/" + data.Address + ".png"} alt={data.Address} />
                <div className="position-field">Position: 1.38050x, 1.02782y, 4.56477z </div>
                <div className="rotation-field">Rotation: 0.00000x, 0.00000y, 0.00000z </div>
                <div className="creation-time-field"></div>
            </div>
        </>
    )
}

export default ItemCard