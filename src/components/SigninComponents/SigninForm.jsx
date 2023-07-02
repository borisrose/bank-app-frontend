import { useEffect, useState } from "react"
import styles from "./SigninForm.module.scss"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../features/user/user-slice"

const SigninForm = () => {


    const [ username, setUsername] = useState()
    const [ password, setPassword ] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(state => state.user.token)

    const loginHandler = async(e) => {

        e.preventDefault()

        console.log("submit form")


        if(username && password) {

            let data = {
                email: username,
                password: password
            }

            dispatch(loginUser(data))

            console.log('')

        } 
        
    }

    useEffect(() => {

        console.log("UEff -> token", token)
        if(token) {
            navigate(`/profile/${token}`)
        }


    }, [token])


// - First Name: `Tony`
// - Last Name: `Stark`
// - Email: `tony@stark.com`
// - Password: `password123`

    
    const handleUserInput = (e, inputName) => {

        console.log("in handleUserInput")
        if(inputName === "username") {

            setUsername(e.target.value)
        }
        if(inputName === "password") {

            setPassword(e.target.value)
        }




    }


    return(



        <form className={styles.container} onSubmit={loginHandler}>

            <section>

                <div className={styles.inputContainer} >
                    <label htmlFor="username">Username </label>
                    <input type="text" name="username" id="username" onInput={e => handleUserInput(e, "username")}/>
                </div>

                <div className={styles.inputContainer} >
                    <label htmlFor="password">Password </label>
                    <input type="text" name="username" id="password" onInput={e => handleUserInput(e, "password")} />
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