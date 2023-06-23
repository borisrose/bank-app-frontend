import styles from "./SigninForm.module.scss"

const SigninForm = () => {

    const loginHandler = () => {

        console.log("submit form")
        
    }

    return(



        <form className={styles.container} onSubmit={loginHandler}>

            <section>

                <div className={styles.inputContainer}>
                    <label htmlFor="username">Username </label>
                    <input type="text" name="username" id="username" />
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor="password">Password </label>
                    <input type="text" name="username" id="password" />
                </div>



            </section>
            <section>

                <div className={styles.checkboxContainer}>

                    <input type="checkbox" id="remeber"/>
                    <label htmlFor="remember"> Remember me </label>

                </div>
                
             

            </section>
            <section>

                <button className={styles.submitButton}> Sign in </button>

            </section>
       
       


        </form>



    )





}

export default SigninForm