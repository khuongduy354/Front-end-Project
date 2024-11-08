/* eslint-disable react/prop-types */
import style from "./ListItem.module.css";
import Item from "../Item";
import { v4 as uuidv4 } from "uuid";

const ListItem = ({ list }) => {
  return (
    <div>
      <ul className={style.Listitem}>
        {list.map((item) => (
          <li key={uuidv4()} >
            <Item name={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListItem;
