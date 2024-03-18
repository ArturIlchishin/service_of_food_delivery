import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "../../../redux/userSlice";
import {useNavigate} from "react-router-dom";
import {MenuPage} from "../menu_page/MenuPage";
import {AnimatedComponent} from "../../../components/AnimatedComponent";
import './styles.css';
import {WidgetBucket} from "../widget_bucket/WidgetBucket";
import {BucketPage} from "../bucket_page/BucketPage";



export const StartPage = () => {

    const user = JSON.parse(localStorage.user);
    const isActive = !!user.email;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutFunc = () => {
        dispatch(removeUser());
        navigate('/login')
    }



    return (
        <AnimatedComponent>
            <div className={'logged__container'}> { isActive ?
                <>
                    <p className={'logged__text'}>You're logged as {user.email}</p>
                    <div className={'logged__button__container'}>
                        <button className={'logout__button'}
                                onClick={() => logoutFunc()}>Log out</button>
                    </div>
                </>
                : `You're not logged in` }
            </div>
            <WidgetBucket />
            <BucketPage />
            <MenuPage />
        </AnimatedComponent>
    )

}