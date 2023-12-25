import styles from "./Item.module.css";


const Item = ({foodItem}) => {
   // let {foodItem} = props;
return(
    <li className={`${styles["hmm"]}`}>
    <span className={styles["oi"]}>{foodItem}</span>
    </li>
); 
}
export default Item;