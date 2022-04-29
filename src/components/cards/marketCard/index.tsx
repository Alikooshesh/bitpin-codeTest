import {HeartAdd} from "iconsax-react";
import {ImarketCard} from "../../../interface/global";
import {addCommas} from "@persian-tools/persian-tools";
import {useDispatch, useSelector} from "react-redux";
import {add, remove} from "../../../redux/reducers/favMarketReducer";
import {useEffect, useState} from "react";

const styles = {
    wrapperStyle: {
        width: '20rem',
        backgroundColor: "#9a5a5a"
    }
}

const MarketCard = ({
                        currenyImages,
                        price,
                        priceUnit,
                        title,
                        code,
                        isFav = false
                    }: ImarketCard) => {

    const dispatch = useDispatch()
    const favMarkets = useSelector((state: any) => state.favMarket.favMarkets)

    const changeFavStatus = () => {
        isFav ? dispatch(remove({favId: code})) : dispatch(add({favId: code}))
    }

    return (
        <div className={'flex flex-col rounded justify-center p-16'} style={styles.wrapperStyle}>
            <div className={'flex items-center justify-center gap-8'}>
                <h1 className={'text-center hover-text-white cursor-pointer'}>{code}</h1>
                <HeartAdd
                    size="32"
                    color="#FFF"
                    variant={isFav ? 'Bold' : 'Outline'}
                    className={'cursor-pointer'}
                    onClick={changeFavStatus}
                />
            </div>
            <div className={'flex justify-center items-center mt-8 gap-8'}>
                <h3>{title}</h3>
                {currenyImages && <div className={'flex items-center gap-8'}>
                    <div className={'w-24'}>
                        <img className={'w-full h-full'} src={currenyImages[0]}/>
                    </div>

                    <div className={'w-24'}>
                        <img className={'w-full h-full'} src={currenyImages[1]}/>
                    </div>
                </div>}
            </div>
            <div className={'mt-16 flex justify-center items-center gap-8'}>
                <h2>Price : {addCommas(price)}</h2>
                <span>{priceUnit}</span>
            </div>
        </div>
    )
}

export default MarketCard