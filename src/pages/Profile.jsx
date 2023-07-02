import styles from "./Profile.module.scss"
import DataList from "../components/ProfileComponents/DataList"


const Profile = () => {

    const user = {

        firstname : "Thomas",
        lastname : "Jarvis"
    }

    return(
    <main className={styles.container}>


            <section className={styles.sectionWelcome}>

                    <header>              
                        <h1>Welcome back <br />{user.firstname} {user.lastname} </h1>
                    </header>
                    
                    <button className={styles.editButton}> Edit Name </button>
            
            </section>


            <section className={styles.sectionData}>

                <DataList />

            </section>


        </main>
    )
}

export default Profile