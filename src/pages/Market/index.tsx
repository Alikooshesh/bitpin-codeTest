import {useParams} from "react-router-dom";
import axios from "axios";
import {ImarketCard} from "../../interface/global";
import {useEffect, useState} from "react";
import {addCommas} from "@persian-tools/persian-tools";

const Market = () => {

    const {marketCode} = useParams()

    const [marketData,setMarketData] = useState<any>()

    useEffect(()=>{
        axios.get('https://api.bitpin.ir/v1/mkt/markets/')
            .then(data => {
                const fetched = data.data.results
                setMarketData(fetched.find((item:any) => item.code === marketCode))
            }).catch(err => {
            console.log(err)
        })
    },[])

    const RandomFakeBuySell = () => {
        const randomMode = (Math.floor(Math.random() *11) + 1) % 2 ? "buy" : "sell"
        return(
            <tr className={'flex gap-8 p-16'} style={randomMode === "buy" ? {backgroundColor : "#3f5e1e"} : {backgroundColor : "#ad2d2d"}}>
                <td>{randomMode}</td>
                <td>price : {addCommas((marketData.price * ((Math.floor(Math.random() * (100 - 90 + 1)) + 90) / 100)).toFixed(marketData.currency2.decimal_amount))}</td>
                <td>amount : {(Math.random()*(Math.floor(Math.random() * (4 + 1)))).toFixed(marketData.currency1.decimal_amount)}</td>
            </tr>
        )
    }

    return(
        <>
            {marketData && <>
                <h1 className={'w-full text-center'}>{marketCode}</h1>
                <table className={'w-full p-16 flex flex-col items-center justify-center'}>
                    {<RandomFakeBuySell/>}
                    {<RandomFakeBuySell/>}
                    {<RandomFakeBuySell/>}
                    {<RandomFakeBuySell/>}
                    {<RandomFakeBuySell/>}
                    {<RandomFakeBuySell/>}
                    {<RandomFakeBuySell/>}
                    {<RandomFakeBuySell/>}
                    {<RandomFakeBuySell/>}
                    {<RandomFakeBuySell/>}
                    {<RandomFakeBuySell/>}
                    {<RandomFakeBuySell/>}
                    {<RandomFakeBuySell/>}
                    {<RandomFakeBuySell/>}
                    {<RandomFakeBuySell/>}
                    {<RandomFakeBuySell/>}
                    {<RandomFakeBuySell/>}
                    {<RandomFakeBuySell/>}

                </table>
            </>}
        </>
    )
}

export default Market