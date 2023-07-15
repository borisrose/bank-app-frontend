import styles from "./Header.module.scss"
import ABLogo from "../../img/argentBankLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {logout} from "../../features/user/user-slice"




const Header = () => {

    const user  = useSelector((state) => state.user)
    const navigate = useNavigate()
 
    const dispatch = useDispatch();


    const logoutHandler = () => {

        dispatch(logout(true))
        navigate('/')

    }

    return(

        <header className={styles.container}>

            <div className={styles.logoContainer}>
                <Link to={"/"}>
                    <img src={ABLogo} alt="Argent Bank Logo" />
                </Link>
            </div>
            {user.token &&    <div className={styles.signinContainer}>
                <FontAwesomeIcon icon="fa-regular fa-circle-user" className={styles.signinIcon}/>
                <span>{user.firstName}</span>
            </div>
            }

            {user.token ? <div className={styles.signinContainer}>
                    <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
                    <button className={styles.signinButton} onClick={logoutHandler}> Sign out </button> 
                </div>
            : <div className={styles.signinContainer}>
                    <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" className={styles.signinIcon}/>
                    <Link className={styles.signinButton} to={"/signin"}> Sign in </Link>
              </div>
            } 

        </header>
    )



}


export default Header