function TodoItem({todo, time, onDeleteClick}){
 
    return <div className="container ">
    <div className="row kg-row">
      <div className="col-4">
        {todo}
      </div>
      <div className="col-4">
      {time}
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-danger kg-button"
      onClick={()=> onDeleteClick(todoName)}>delete</button>
      </div>
    </div>
   </div>
    }
    export default TodoItem;