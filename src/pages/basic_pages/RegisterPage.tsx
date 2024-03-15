import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/userSlice";
import {useSelector} from "react-redux";
import {AnimatedComponent} from "../../components/AnimatedComponent";
import './styles.css';



export const RegisterPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const {id} = useSelector((state : any) => state.userReducer)

    const auth = getAuth();
    const handleRegistration = (email: string, pass: string): void => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/start');
            })
            .catch(console.error)
    }

    return (
        <AnimatedComponent>
            <section className={'login__container'}>
                <h1 className={'login__title'}>
                    Please, sign in
                </h1>
                <form className={'login__form__container'}>
                    <input
                        type={"email"}
                        name={'email'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={'email'}
                        className={'login__input'} />
                    <input
                        type={"password"}
                        name={'password'}
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder={'password'}
                        className={'login__input'} />
                    <button
                        onClick={(e) => {e.preventDefault(); handleRegistration(email, pass)}}
                        className={'login__button'}
                    >Send</button>
                    <div className={'login__redirect__container'}>
                        <p className={'login__redirect-text'}>
                            If you already have an account, <Link to={'/login'} className={'login__redirect-link'}>login</Link>
                        </p>
                    </div>
                </form>
            </section>
        </AnimatedComponent>
    )
}