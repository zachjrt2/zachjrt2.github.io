import { Platform, ScrapData } from "../types"

interface Props {
    data: ScrapData
}

const ScrapCard = ({ data }: Props) => {
    return (
        <>
            <div className="card">
                <p className="display-name">{data.DisplayName}</p>
                <p className="platform">{Platform[data.Platform]}</p>
                <p className="scrap-total">Total Scrap: {data.ScrapTotal}</p>
                <p className="scrap-current">Current Scrap: {data.ScrapCurrent}</p>
            </div>
        </>
    )
}

export default ScrapCard