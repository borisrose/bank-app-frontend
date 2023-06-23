import styles from "./Header.module.scss"
import ABLogo from "../../img/argentBankLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faUserCircle } from "@fortawesome/free-regular-svg-icons"
import { Link } from "react-router-dom"

const Header = () => {


 

    return(

        <header className={styles.container}>

            <div className={styles.logoContainer}>
                <img src={ABLogo} alt="Argent Bank Logo" />
            </div>
            <div className={styles.signinContainer}>
                <FontAwesomeIcon icon={faUserCircle} className={styles.signinIcon}/>
                <Link className={styles.signinButton} to={"/signin"}> Sign in </Link>
            </div>

        </header>
    )



}


export default Header