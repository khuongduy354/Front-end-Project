import React from "react";
import style from "./ListItem.module.css";
import Item from "../Item";
import { v4 as uuidv4 } from "uuid";
const initialList = [
  {
    id: "a",
    isHaveDeadline: true,
    time: "29-10-2024",
    name: "Lap trinh truc quan",
  },
  {
    id: "b",
    isHaveDeadline: true,
    time: "28-10-2024",
    name: "Dennis Robin(1) Dennis Robin(2) Dennis Robin(3)Dennis Robin(3)",
  },
  {
    id: "c",
    isHaveDeadline: true,
    time: "01-12-2024",
    name: "Dennis Robin",
  },
];
const ListItem = () => {
  const [list, setList] = React.useState(initialList);
  const [name, setName] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    // const newList = list.concat({ name, id: uuidv4() });

    setList((preList) => [
      ...preList,
      {
        id: "a",
        isHaveDeadline: true,
        time: "29-10-2024",
        name: name,
      },
    ]);

    setName("");
  }

  return (
    <div>
      {
        // {<div>
        //   <input type="text" value={name} onChange={handleChange} />
        //   <button type="button" onClick={handleAdd}>
        //     Add
        //   </button>
        // </div>}
      }

      <ul className={style.Listitem}>
        {list.map((item) => (
          <li key={item.id}>
            <Item name={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItem;
