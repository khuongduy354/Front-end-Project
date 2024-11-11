/* eslint-disable react/prop-types */
import style from "./Item.module.css";
import { useTheme } from '@mui/material';
const Item = ({ name, img }) => {
  // {const theme = useTheme();
  // style={{
  //     backgroundColor: theme.palette.mode === 'dark' ? '#ddd' : '#FFD700',
  //     color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  //   }}}
  return (
    <div className={style.Item}>
      <div className={style.GroupImg} >
        <img src={img} alt={name} />
      </div>
      <div className={style.GroupName}>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Item;
