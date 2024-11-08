import ListItem from "./ListItem";
import style from "./Workspace.module.css";
import ListDeadline from "./ListDeadline";
// eslint-disable-next-line react/prop-types
function Workspace({list}) {
  return (
    <>
    <div className={style.Container}>
      <div className={style.Workspaces}>
        <h1>YOUR WORKSPACES</h1>
        <section>
          <ListItem list={list} />
        </section>
        <h1 className={style.AllDeadline}>ALL DEADLINES</h1>
        <section>
          <ListDeadline list={list}/>
        </section>
      </div>
    </div>
    </>
  );
}
export default Workspace;
