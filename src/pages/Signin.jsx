
import styles from "./Signin.module.scss"
import SigninForm from "../components/SigninComponents/SigninForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-regular-svg-icons"

const Signin = () => {


    return(


        <main className={styles.container}>

          
            
                <section  className={styles.sectionContainer}>

                    <header className={styles.sectionHeaderContainer}> 

                            <FontAwesomeIcon icon={faUserCircle}  className={styles.sectionHeaderIcon}/>
                            <h3>Sign in</h3>

                    </header>

                    <SigninForm />

                </section>




        </main>



    )




}

export default Signin