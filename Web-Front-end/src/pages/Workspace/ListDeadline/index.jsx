/* eslint-disable react/prop-types */
import Deadline from "../Deadline";
import { v4 as uuidv4 } from "uuid";

const ListItem = ({list}) => {
  return (
    <div>
      <ul>
        {list.map(
          (item) =>
            item.isHaveDeadline && (
              <li key={uuidv4()}>
                <Deadline name={item.name} time={item.time} />
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default ListItem;
