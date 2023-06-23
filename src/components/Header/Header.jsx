import styles from "./Header.module.scss"
import ABLogo from "../../img/argentBankLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faUserCircle } from "@fortawesome/free-regular-svg-icons"

const Header = () => {


    return(

        <header className={styles.container}>

            <div className={styles.logoContainer}>
                <img src={ABLogo} alt="Argent Bank Logo" />
            </div>
            <div className={styles.signinContainer}>
                <FontAwesomeIcon icon={faUserCircle} className={styles.signinIcon}/>
                <button className={styles.signinButton}> Sign in </button>
            </div>

        </header>
    )



}


export default Header