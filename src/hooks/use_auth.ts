import {useSelector} from "react-redux";
interface IState {
    userReducer: any
}
export function useAuth() {
    const {email, token, id} = useSelector((state: IState) => state.userReducer);

    return (
        {
            isAuth: !!email,
            email,
            token,
            id,
        }
    )
}