/* eslint-disable react/prop-types */
import Deadline from "../Deadline";
import { v4 as uuidv4 } from "uuid";

const ListItem = ({ list }) => {
  let countDeadline = 0;
  return (
    <div>
      <ul>
        {list.map((item) => {
          if (item.isHaveDeadline) {
            countDeadline++;
            if (item.isHaveDeadline && countDeadline <= 3) {
              return (
                <li key={uuidv4()}>
                  <Deadline name={item.name} time={item.time} />
                </li>
              );
            }
            return null;
          }
        })}
      </ul>
    </div>
  );
};

export default ListItem;
