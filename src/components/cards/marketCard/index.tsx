import {HeartAdd} from "iconsax-react";

interface props {
    currenyImages: string[]
    price: string;
    title: string;
    code: string;
    isFav?: boolean
}

const MarketCard = ({
                        currenyImages,
                        price,
                        title,
                        code,
                        isFav
                    }: props) => {

    const styles = {
        wrapperStyle: {
            width: '20rem',
            backgroundColor: "#9a5a5a"
        }
    }

    return (
        <div className={'flex flex-col rounded justify-center p-16'} style={styles.wrapperStyle}>
            <div className={'flex items-center justify-center gap-8'}>
                <h1 className={'text-center'}>{code}</h1>
                <HeartAdd
                    size="32"
                    color="#FFF"
                    variant={isFav ? 'Bold' : 'Outline'}
                />
            </div>
            <div className={'flex justify-center items-center mt-8 gap-8'}>
                <h3>{title}</h3>
                {currenyImages && <div className={'flex items-center gap-8'}>
                    <img src={currenyImages[0]}/>
                    <img src={currenyImages[1]}/>
                </div>}
            </div>
            <h2 className={'text-center mt-16'}>Price : {price}</h2>
        </div>
    )
}

export default MarketCard