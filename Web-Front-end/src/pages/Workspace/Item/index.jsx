/* eslint-disable react/prop-types */
import style from "./Item.module.css";
const Item = ({ name, img }) => {
 
  return (
    <div className={style.Item}>
      <div className={style.GroupImg} >
        <img src={img} alt={name} />
      </div>
      <div className={style.GroupName}>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Item;
