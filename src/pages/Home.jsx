import styles from "./Home.module.scss"
import BankTree from "../img/bank-tree.jpeg"
import Plus from "../components/HomeComponents/Plus"
import Chat from "../img/icon-chat.png"
import Money from "../img/icon-money.png"
import Security from "../img/icon-security.png" 


const Home = () => {

    const plus = [

        {
            id: 1,
            title: "You are our #1 priority",
            image: Chat,
            description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        },
        {
            id: 2,
            title: "More savings means higher rates",
            image: Money,
            description: "The more you save with us, the higher your interest rate will be !"
        },
        {
            id: 3,
            title: "Security you can trust",
            image: Security,
            description: "We use top of the line encryption to make sure your data and money is always safe."
        }
    ]





    return(

        <main className={styles.container}>


            <section className={styles.section}>


                <img src={BankTree} alt="Bank Tree" className={styles.sectionBackgroundImage}/>
                <div className={styles.sectionOneAdContainer}>
                    <div className={styles.sectionOneAdContainerPartOne}>
                        <span>No fees.</span>
                        <span>
                            No minimum deposit.
                            </span> 
                        <span>
                        High interest rates.
                        </span>
                    </div>


                    <p>Open a savings account with Argent Bank today!</p>
                </div>

            </section>


            <section className={styles.section}>


                {plus && plus.map((p, i) => 

                    <Plus p={p} key={i}/>

                )}


            </section>


        </main>
        
       
    )
}

export default Home