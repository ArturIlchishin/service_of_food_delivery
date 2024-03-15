import items from './items.json';
import './styles.css';
import {AnimatedComponent} from "../../../components/AnimatedComponent";


export const MenuPage = () => {

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
                </div>
            </AnimatedComponent>
            )}
        </section>
    )
}