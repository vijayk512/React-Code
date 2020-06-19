import React from "react"
import ToDoItem from "./components/ToDoItem"

import todoDatas from "./components/todosData"

// function App() {
//         const todoData = todoDatas.map( item => {
//                 return (
//                     <ToDoItem key={item.id} item={item}/>
//                 )
//         })
//
//         return(
//                 <div className="todo-list">
//                         {todoData}
//                 </div>
//         )
// }

//class components
class App extends React.Component{
        constructor(){
                super()
                this.state = {
                        todos: todoDatas
                }
                this.handleChange = this.handleChange.bind(this)
        }

        handleChange(id){
                this.setState(prevState => {
                        const  updatedTodos = prevState.todos.map(todo => {
                                if(todo.id === id){
                                        return {
                                                // todo.completed = !todo.completed
                                                ...todo,
                                                completed: !todo.completed
                                        }
                                }
                                return todo
                        })
                        return {
                                todos: updatedTodos
                        }
                })
        }

        render() {

                const todoData = this.state.todos.map(item => {
                        return (
                            <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />
                        )
                })

                return (
                    <div className="todo-list">
                            {todoData}
                    </div>
                )
        }
}



export default App