import Item from "./Item";

const FoodItems = ({items}) => {
 // let foodItems = ["Dal","Green veg","Roti","Salad","Milk"];
 // let foodItems =[];
    return (
        <ul className="list-group">
        {
          items.map((item)=>(
         <Item key ={item} foodItem ={item}> </Item>
            )
          )
        }
    </ul>

    );
}
export default FoodItems;