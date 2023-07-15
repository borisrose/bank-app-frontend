import styles from "./Profile.module.scss"
import DataList from "../components/ProfileComponents/DataList"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updateUser } from "../features/user/user-slice"

const Profile = () => {

    const user = useSelector((state) => state.user)
    const navigate = useNavigate()
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const dispatch = useDispatch()

    useSelector(() => {

        if(!user.token){
            console.log('no token redirection ...')
            navigate('/')
        }

    }, [user])

 

    const [ isEdit, setIsEdit ] = useState(false)

    const editHandler = () => {

        console.log('edit handler clicked on')
        setIsEdit(true)
    }

    const saveHandler = () => {

        console.log('save handler clicked on')

        let data = {}
        if(!firstName && lastName){

            data = {
                firstName: user.firstName,
                lastName,
            }

        }

        if(firstName && !lastName){

             data = {
                lastName: user.lastName,
                firstName,
            }

        }

        if(firstName && lastName){

            console.log('firstName: ' + firstName + ' lastName: ' + lastName)
            data = {

                firstName,
                lastName
            }
  
        }

        if(!firstName && !lastName){

            console.log('no change')

            return
        }

        data.token = user.token
        dispatch(updateUser(data))
        setIsEdit(false)

    }   

    const cancelHandler = () => {

        console.log('cancel handler clicked on')
        setIsEdit(false)
    }

    return(
    <main className={styles.container}>


            <section className={styles.sectionWelcome}>

                    <header>              
                        <h1>Welcome back <br />{user.firstName} {user.lastName} </h1>
                    </header>
                    
                    <button className={styles.editButton} onClick={editHandler}> Edit Name </button>

                    <div className={styles.editor}>
                        {isEdit &&
                        <>
                        <div className={styles.left}>

                            <input className={styles.input} placeholder={user.firstName} onInput={(e) => setFirstName(e.target.value)}/>
                            <button className={styles.button} onClick={saveHandler}>
                                Save
                            </button>
                        </div>


                        <div className={styles.right}>
                            <input className={styles.input} placeholder={user.lastName} onInput={(e) => setLastName(e.target.value)}/>
                            <button className={styles.button} onClick={cancelHandler}>
                                Cancel
                            </button>
                        </div>
                        </>
                        }

                    </div> 
            
            </section>


            <section className={styles.sectionData}>

                <DataList />

            </section>


        </main>
    )
}

export default Profile