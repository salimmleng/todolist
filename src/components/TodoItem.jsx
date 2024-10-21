import styles from "./todoitem.module.css"
export default function TodoItem ({item ,todos,setTodos}){

    function handledelete(item){
        console.log("delete", item)
        setTodos(todos.filter((todo) => todo !== item)) // item ta delete korbe

        // here !== means specific item sara baki sob array te rakbe
        // filter method er khetre == thakle sudu ei item rakbe ar !== thakle sudu oi item sara baki sob rakbe
        
    }
      
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                {item}
                <span><button onClick={() => handledelete(item)} className={styles.deleteButton}>x</button></span>
                </div>
            <hr className={styles.line} />
        </div>
    )
}