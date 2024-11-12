/* eslint-disable react/prop-types */
import style from "./Deadline.module.css";

function Deadline({ name, time }) {
  return (
    <div className={style.Item}>
      <div className={style.Time} >
        <p >{time}</p>
      </div>
      <div className={style.Name}>
        <p>{name}</p>
      </div>
    </div>
  );
}
export default Deadline;
