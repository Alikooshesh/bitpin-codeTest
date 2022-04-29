import MarketCard from "../../components/cards/marketCard";
import {useEffect, useState} from "react";
import {ImarketCard} from "../../interface/global";
import axios from 'axios'
import {useSelector} from "react-redux";

const Home = () => {

    const favMarkets = useSelector((state:any) => state.favMarket.favMarkets)

    const [markets , setMarkets] = useState<ImarketCard[] | null>(null)

    const [showFavList , setShowFavList] = useState<boolean>(false)

    useEffect(()=>{
        axios.get('https://api.bitpin.ir/v1/mkt/markets/')
            .then(data => {
                const fetched = data.data.results
                const marketList:ImarketCard[] = []
                fetched.forEach((market:any) => {
                    const newMarket:ImarketCard = {
                        currenyImages : [market.currency1.image , market.currency2.image],
                        price : market.price,
                        priceUnit : market.currency2.title ,
                        title : market.title,
                        code : market.code,
                    }
                    marketList.push(newMarket)
                })
                setMarkets(marketList)
            })
    },[])

    return(
        <div className={'p-16 flex flex-col items-center justify-center'}>
            <button
                style={{backgroundColor : 'cadetblue' , color : 'white' , fontSize : '2rem'}}
                className={'p-16 mx-auto cursor-pointer'}
                onClick={()=> setShowFavList(!showFavList)}>
                {showFavList ? 'show all markets' : 'show fav markets'}
            </button>

            <div className={'mt-8 flex justify-center gap-8 flex-wrap'}>
                {markets?.filter(market => favMarkets?.includes(market.code)).map(market => <MarketCard
                    key={`marketCard-${market.title}-${market.code}`}
                    currenyImages={market.currenyImages} price={market.price}
                    priceUnit={market.priceUnit} title={market.title}
                    code={market.code}
                    isFav={favMarkets?.includes(market.code)}
                />)}
                {!showFavList && markets?.filter(market => !favMarkets?.includes(market.code)).map(market => <MarketCard
                    key={`marketCard-${market.title}-${market.code}`}
                    currenyImages={market.currenyImages} price={market.price}
                    priceUnit={market.priceUnit} title={market.title}
                    code={market.code}
                    isFav={favMarkets?.includes(market.code)}
                />)}
            </div>
        </div>
    )
}

export default Home