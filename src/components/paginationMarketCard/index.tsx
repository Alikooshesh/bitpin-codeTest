import {ImarketCard} from "../../interface/global";
import {useEffect, useState} from "react";
import MarketCard from "../cards/marketCard";
import {useSelector} from "react-redux";
import {ArrowLeft2, ArrowRight2} from "iconsax-react";

interface props{
    cardsInfo : ImarketCard[]
}

const PaginationMarketCard = ({cardsInfo}:props) => {

    const favMarkets = useSelector((state:any) => state.favMarket.favMarkets)

    const [page , setPage] = useState<number>(1)
    const [pagesCount , setPagesCount] = useState<number|null>(null)

    useEffect(()=>{
        setPagesCount(Math.ceil(cardsInfo.length/10))
    },[cardsInfo])

    return(
        <>
            <div className={'flex justify-center gap-8 flex-wrap'}>
                {cardsInfo.filter((market , index) => {
                    if ((index >= ((page * 10) - 10)) && (index < (page * 10))){
                        return market
                    }
                }).map((market) => <MarketCard
                    key={`marketCard-${market.title}-${market.code}`}
                    currenyImages={market.currenyImages} price={market.price}
                    priceUnit={market.priceUnit} title={market.title}
                    code={market.code}
                    isFav={favMarkets?.includes(market.code)}
                />)}
            </div>

            <div className={'mt-16 flex justify-center items-center gap-8'}>
                <ArrowLeft2
                    size="32"
                    color={page !== 1 ? "#FF8A65" : "#545252"}
                    onClick={()=> page !== 1 && setPage(page-1)}
                    className={page !== 1 ? "cursor-pointer" : ""}
                />
                <p>{page} from {pagesCount} pages</p>
                <ArrowRight2
                    size="32"
                    color={page !== pagesCount ? "#FF8A65" : "#545252"}
                    onClick={()=> page !== pagesCount && setPage(page+1)}
                    className={page !== pagesCount ? "cursor-pointer" : ""}/>
            </div>
        </>
    )
}

export default PaginationMarketCard