import styles from "./DataList.module.scss"


const DataItem = ({ id, type, accountNumber, amount}) => {


    const viewTransactions = (e, accountNumber) => {

        console.log('DL : viewTransactions handler jas been called ...', accountNumber)

    }
    return(
        <li className={styles.dataItemContainer}>
            <div className={styles.dataItemLeftContainer}>
                <p>{`${type}(${accountNumber})`}</p>
                <span aria-label="account amount" >{`\$${amount}`}</span>
                <span>{ id === 3 ? 'Current Balance' : 'Available Balance' }</span>
            </div>
            <div className={styles.dataItemRightContainer}>
                <button onClick={(e) => viewTransactions(e, accountNumber)}> View transactions </button>
            </div>
        </li>
    )


}



const DataList = () => {

    const data =[

        {
            id: 1,
            type : "Argent Bank Checking",
            accountNumber : "x8349",
            amount : "2,082.79",


        },
        {
            id:2,
            type : "Argent Bank Savings",
            accountNumber : "x6712",
            amount : "10,928.42",


        },
        {
            id:3,
            type : "Argent Bank Credit Card",
            accountNumber : "x8349",
            amount : "184.30",


        },


    ]


    return(
        <>
        {data && data.length && 
            <ul className={styles.container}>
            {data.map((d,i) => <DataItem {...d} key={i}/>)}
            </ul>
        
        }
        </>
     

    )


}


export default DataList