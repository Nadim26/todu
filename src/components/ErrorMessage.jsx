const ErrorMessage = ({items}) =>{
  // let foodItems = ["Dal","Green veg","Roti","Salad","Milk"];
    //let foodItems =[];
    return(
        <>
         {items.length===0 && <h3> No food Found.</h3>}
        </>
       
    );
}
export default ErrorMessage;