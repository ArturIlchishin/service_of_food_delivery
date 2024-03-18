import items from './items.json';
import './styles.css';
import {AnimatedComponent} from "../../../components/AnimatedComponent";
import {useDispatch, useSelector} from "react-redux";
import {setItem} from "../../../redux/bucketSlice";


export const MenuPage = () => {

    const dispatch = useDispatch();
    const burgers = useSelector((state : any) => state.bucketReducer);



    const addBurger = (title: string): void => {
        const ourBurger = (items.filter((item) => item.name === title))[0]
        console.log(ourBurger)
        dispatch(setItem(ourBurger));
    }

    return (
        <section className={'menu__container'}>
            {items.map((item) =>
            <AnimatedComponent key={item.name}>
                <div  className={'menu__card__container'}>
                    <div className={'menu__card__name'}>
                        <h1 className={'menu__card__name-title'}>{item.name}</h1>
                    </div>
                    <div className={'menu__card__price'}>
                        <p className={'menu__card__price-number'}>{item.price}</p>
                    </div>
                    <div className={'menu__card__img'}>
                        <img className={'menu__card__img-pic'} alt={'Бургер'} src={item.img} />
                    </div>
                    <div className={'menu__card__size'}>
                        <button className={'menu__card__size-btn'}>Обычный</button>
                        <button className={'menu__card__size-btn'}>Большой</button>
                    </div>
                    <div className={'menu__card__amount'}>
                        <p className={'menu__card__amount-title'}
                           onClick={() => addBurger(item.name)}>Добавить в заказ</p>
                        <button className={'menu__card__amount-btn'}>-</button>
                        <p className={'menu__card__amount-num'}>2</p>
                        <button className={'menu__card__amount-btn'}>+</button>
                    </div>
                </div>
            </AnimatedComponent>
            )}
        </section>
    )
}