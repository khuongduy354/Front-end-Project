/* eslint-disable react/prop-types */
import style from "./ListItem.module.css";
import Item from "../Item";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
const ListItem = ({ list }) => {
  return (
    
    <div>
      <ul className={style.Listitem}>
        {list.map((item) => (
          <li key={uuidv4()} >
            <Link to={"/projectname"}>
              <Item name={item.name} img={item.img} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListItem;
