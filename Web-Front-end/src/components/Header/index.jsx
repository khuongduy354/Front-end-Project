import { Link } from "react-router-dom";
import style from "./Header.module.css";

function Header() {
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
                <Link to="/progress">
                  <p>PROGRESS</p>
                </Link>
              </li>
              <li>
                <Link to="/add">
                  <p>ADD</p>
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
              <i className="fa-solid fa-gear"></i>
            </div>
            <div className={style.Notifications}>
              <i className="fa-regular fa-bell"></i>
            </div>
            <div className={style.Account}>
              <p>M</p>
            </div>
          </div>
        </header>
      
    </>
  );
}

export default Header;
