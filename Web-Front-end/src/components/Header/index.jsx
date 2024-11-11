/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import Setting from "../../pages/Setting/Setting";
import { Button } from "@mui/material";
function Header({ checked, onChange }) {
  return (
    <>
      <header className={style.Header}>
        <div className={style.Logo}>
          <p>Logo</p>
        </div>
        <nav className={style.Navigation}>
          <ul>
            <li>
              <Link to="/">
                <p>WORKSPACE</p>
              </Link>
            </li>
            <li>
              <Link to="/calendar">
                <p>CALENDAR</p>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={style.Tools}>
          <div className={style.Setting}>
            <Setting checked={checked} onChange={onChange} />
          </div>
          <Button
            className={style.Notifications}
            style={{
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              maxWidth: "10px",
            }}
          >
            <i className="fa-regular fa-bell"></i>
          </Button>
          <div className={style.Account}>
            <Link to={"/login"}>
              <p>M</p>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
