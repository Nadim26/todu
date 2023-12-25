
import AppName from "./components/AppName"
import AppTodo from "./components/AppTodo"
import "./App.css";
import CurrentTime from "./components/Time";
import Time from "./components/Time";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WlcomeMessage from "./components/wlcomeMessage";


function App() {
 //foodItems
  let foodItems = ["Dal","Green veg","Roti","Salad","Milk"];
 //let foodItems=[];

 //TodoList
 
const [todoItems,setTodoItems] = useState([]);
const handelNewItem = (itemName, itemDueDate) => {
  console.log (`New Item Added : ${itemName} Date: ${itemDueDate}`)
  const newTodoItems = [
    ...todoItems,
    {name: itemName,
    dueDate: itemDueDate},
  ]
  setTodoItems (newTodoItems);
}
const handleDeletItem =(todoItemName) =>{
  const newTodoItems = todoIems.filter(item => item.name !== todoItemName)
setTodoItems(newTodoItems)

}
  return < >
  {/* for todo */}
   <AppName/>
   <Time/>
   <AppTodo onNewItem={handelNewItem}/>
   {
    todoItems.length === 0 &&  <WlcomeMessage></WlcomeMessage>
   }
 
   <TodoItems todoItems={todoItems} onDeleteClick={handleDeletItem}></TodoItems>
  
  {/* For food */}
   <h1 className="food">Healthy Food</h1>
   <ErrorMessage items = {foodItems} />
   <FoodItems items = {foodItems} />
  </>
    
}
export default App


