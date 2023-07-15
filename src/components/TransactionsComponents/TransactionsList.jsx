import styles from "./TransactionsList.module.scss"
import TransactionItem from "./TransactionItem"


const TransactionsList = () => {

    const transactions = [

        {
            id:1,
            date: "2017",
            description:"Golden Sun Bakery",
            amount :5.00,
            balance:2000.89
        },
        {
            id:2,
            date: "2018",
            description:"Golden Sun Bakery",
            amount :5.00,
            balance:2000.89
        },
        {
            id:3,
            date: "2019",
            description:"Golden Sun Bakery",
            amount :5.00,
            balance:2000.89
        },
        {
            id:4,
            date: "2020",
            description:"Golden Sun Bakery",
            amount :5.00,
            balance:2000.89
        },
        {
            id:5,
            date: "2017",
            description:"Golden Sun Bakery",
            amount :5.00,
            balance:2000.89
        }
    ]


    return(

        <ul>

            {transactions.map((transaction,i) => 
                <TransactionItem transaction={transaction} key={i} />
            )}




        </ul>
    )


}


export default TransactionsList