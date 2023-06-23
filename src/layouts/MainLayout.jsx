import { Outlet } from "react-router-dom"
import styles from "./MainLayout.module.scss"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
const MainLayout = () => {



    return(

        <div aria-label="main layout container" className={styles.container} >


            <Header/>
            <Outlet />
            <Footer/>


        </div>
    )
}


export default MainLayout