import {useParams} from "react-router-dom";

const Market = () => {

    const {marketCode} = useParams()

    return(
        <h1>{marketCode}</h1>
    )
}

export default Market