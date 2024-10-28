import PropTypes from "prop-types";
import style from "./Item.module.css";

const Item = ({ name }) => {
  return (
    <div className={style.Item}>
      <div className={style.GroupImg}>
        <img src="https://service.keyframe.vn/uploads/filecloud/2023/October/1/7026-MD053-Baner-1280x720-Figma-UI-Design-R03.png" alt="" />
      </div>
      <div className={style.GroupName }>
        <p >{name}</p>
      </div>
    </div>

  );
};
Item.propTypes = {
  name: PropTypes.string.isRequired,
  userBgr: PropTypes.string.isRequired,
};

export default Item;
