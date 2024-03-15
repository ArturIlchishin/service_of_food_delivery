import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/userSlice";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import {AnimatedComponent} from "../../components/AnimatedComponent";
import './styles.css';

export const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    const handleLogin = (email: string, pass: string): void => {
        const auth = getAuth();
        console.log(auth)
        signInWithEmailAndPassword(auth, email, pass)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/start');
            })
            .catch(console.error);
    }

    return (
        <AnimatedComponent>
            <section className={'login__container'}>
                <h1 className={'login__title'}>
                    Login
                </h1>
                <div className={'login__form__container'}>
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
                    <button className={'login__button'}
                            onClick={() => handleLogin(email, pass)}
                    >Send</button>
                    <div className={'login__redirect__container'}>
                        <p className={'login__redirect-text'}>
                            Or <Link to={'/registration'} className={'login__redirect-link'}>sign in</Link>
                        </p>
                    </div>
                </div>
            </section>
        </AnimatedComponent>
    )
}