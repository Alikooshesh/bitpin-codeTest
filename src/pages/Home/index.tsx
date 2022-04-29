import MarketCard from "../../components/cards/marketCard";
import {useEffect, useState} from "react";
import {ImarketCard} from "../../interface/global";
import axios from 'axios'
import {useSelector} from "react-redux";
import PaginationMarketCard from "../../components/paginationMarketCard";

const Home = () => {

    const favMarkets = useSelector((state: any) => state.favMarket.favMarkets)

    const [isLoading, setIsloading] = useState<boolean>(false)

    const [markets, setMarkets] = useState<ImarketCard[] | null>(null)

    const [showFavList, setShowFavList] = useState<boolean>(false)

    useEffect(() => {
        setIsloading(true)
        axios.get('https://api.bitpin.ir/v1/mkt/markets/')
            .then(data => {
                setIsloading(false)
                const fetched = data.data.results
                const marketList: ImarketCard[] = []
                fetched.forEach((market: any) => {
                    const newMarket: ImarketCard = {
                        currenyImages: [market.currency1.image, market.currency2.image],
                        price: market.price,
                        priceUnit: market.currency2.title,
                        title: market.title,
                        code: market.code,
                    }
                    marketList.push(newMarket)
                })
                setMarkets(marketList)
            })
    }, [])

    return (
        <div className={'p-16 flex flex-col items-center justify-center'}>
            {isLoading && <h1>Is Loading ...</h1>}
            {!isLoading && !markets?.length && <h1>Data is empty</h1>}
            {!isLoading && markets?.length &&
            <>
                <button
                    style={{backgroundColor: 'cadetblue', color: 'white', fontSize: '2rem'}}
                    className={'p-16 mx-auto cursor-pointer'}
                    onClick={() => setShowFavList(!showFavList)}>
                    {showFavList ? 'show all markets' : 'show fav markets'}
                </button>

                <div className={'mt-8'}>
                    <PaginationMarketCard cardsInfo={showFavList ?
                        [...markets?.filter(market => favMarkets?.includes(market.code))] :
                        [
                            ...markets?.filter(market => favMarkets?.includes(market.code)),
                            ...markets?.filter(market => !favMarkets?.includes(market.code))
                        ]}/>
                </div>
            </>}


        </div>
    )
}

export default Home