import ListItem from "./ListItem";
import style from "./Workspace.module.css";
import ListDeadline from "./ListDeadline";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
//import EditIcon from "@mui/icons-material/Edit";
import BasicTextFields from "../Add";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Workspace({ list }) {
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setShowForm(true);
  };
  return (
    <>
      {/* {<Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>} */}
      <div className={style.Container}>
        <div className={style.Workspaces}>
          <h1>YOUR WORKSPACES</h1>
          <Fab color="primary" aria-label="add" onClick={handleClick}>
            <AddIcon />
          </Fab>
          {showForm && <BasicTextFields />}
          <section>
            <ListItem list={list} />
          </section>
          <h1 className={style.AllDeadline}>ALL DEADLINES</h1>
          <section>
            <ListDeadline list={list} />
          </section>
        </div>
      </div>
    </>
  );
}
export default Workspace;
