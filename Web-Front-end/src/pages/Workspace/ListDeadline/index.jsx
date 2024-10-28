import Deadline from "../Deadline";
import Header from "../../../components/Header";

const initialList = [
  {
    isHaveDeadline: true,
    time: "29-10-2024",
    name: "Lap trinh truc quan",
  },
  {
    isHaveDeadline: true,
    time: "28-10-2024",
    name: "Dennis Robin(1) Dennis Robin(2) Dennis Robin(3)",
  },
  {
    isHaveDeadline: true,
    time: "01-12-2024",
    name: "Dennis Robin",
  },
  {
    isHaveDeadline: false,
    name: "Dennis Robin(3)",
  }
];
const ListItem = () => {
  return (
    <div>
      {/*<div>
        <input type="text" value={name} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>*/}

      <ul>
        {initialList.map(
          (item) =>
            item.isHaveDeadline && (
              <li key={item.id}>
                <Deadline name={item.name} time={item.time} />
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default ListItem;
