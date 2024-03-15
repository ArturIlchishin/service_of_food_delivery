import {useNavigate} from 'react-router-dom';
import {useEffect} from "react";
import './styles.css';
import {AnimatedComponent} from "../../components/AnimatedComponent";

export const HomePage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/login')}
            , 3000);
        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatedComponent>
            <div className={'homepage__container'}>
                <p className={'homepage__container-text'}>
                    Hello!
                </p>
            </div>
        </AnimatedComponent>

    )
}