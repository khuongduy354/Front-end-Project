import ListItem from "./ListItem";
import style from "./Workspace.module.css";
import ListDeadline from "./ListDeadline";
import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
// eslint-disable-next-line react/prop-types
function Workspace({ list }) {
  const [item, setItem] = useState({
    name: "",
    img: "",
  });
  const [items, setItems] = useState(() => {
    // Retrieve items from localStorage if available
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const handleAdd = () => {
    if (item.trim() === "") return; // Prevent adding empty items
    setItems((prev) => {
      const newItems = [...prev, item];
      // Save updated list to localStorage
      localStorage.setItem("items", JSON.stringify(newItems));
      return newItems;
    });
    setItem(""); // Reset input after adding
  };
  return (
    <>
      {/* {<FormControl style={{ background: "orange", padding: "30px 30px" }}>
        <input
          value={item.name}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Enter item"
        />
        <button onClick={handleAdd}>Add</button>
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>} */}

      <div className={style.Container}>
        <div className={style.Workspaces}>
          <h1>YOUR WORKSPACES</h1>
          <section>
            <ListItem list={list} />
          </section>
          <h1 className={style.AllDeadline}>DEADLINES</h1>
          <section>
            <ListDeadline list={list} />
          </section>
        </div>
      </div>
    </>
  );
}
export default Workspace;
