import ListItem from "./ListItem";
import style from "./Workspace.module.css";
import ListDeadline from "./ListDeadline";
import Header from "../../components/Header";
function Workspace() {
  return (
    <>
    
    <div className={style.Container}>
      <div className={style.Workspaces}>
        <h1>YOUR WORKSPACES</h1>
        <section>
          <ListItem/>
        </section>
        <h1 className={style.AllDeadline}>ALL DEADLINES</h1>
        <section>
          <ListDeadline/>
        </section>
      </div>
    </div>
    </>
  );
}
export default Workspace;
