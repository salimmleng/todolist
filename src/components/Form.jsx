import styles from "./form.module.css"
import { useState } from "react"
export default function Form({todos,setTodos}) {
    const [todo, setTodo] = useState("")
    

    function handleSubmit(e) {
        e.preventDefault()
        console.log(todo)
        setTodos([...todos, todo])  // previous item will retain ...todos
        setTodo("")   // input box will be cleared
    }
    return (
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
            <input
             className={styles.modernInput}
             placeholder="Type todo list"
             onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
            <button className={styles.modernButton} type="submit" >Add</button>

            </div>
           
        </form>

    )
}