import styles from "./TransactionItem.module.scss"




const TransactionItem = ({transaction}) => {


    return(
        <li>
            <div className={styles.transactionItemChevron}>
                
            </div>
            <div className={styles.transactionItemData}>
                {transaction.data}
            </div>
            <div className={styles.transactionItemDescription}>
                {transaction.description}
            </div>  
            <div className={styles.transactionItemAmount}>
                {transaction.amount}
            </div>  
            <div className={styles.transactionBalance}>
                {transaction.balance}
            </div>  
        </li>
    )

}

export default TransactionItem