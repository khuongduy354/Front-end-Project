import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Progress from "../../pages/Progress";
import Add from "../../pages/Add";
import Calendar from "../../pages/Calendar";
import Workspace from "../../pages/Workspace";
import style from "./Header.module.css";
import morestyle from "../../pages/Workspace"
function Header() {
  return (
    <>
      <Router>
        <header className={style.Header}>
        <div className={style.Logo}><p>Logo</p></div>
        <nav className={style.Navigation}>
          <ul>
            <li>
              <Link to="/"><p className={morestyle.mWorkspace}>WORKSPACE</p></Link>
            </li>
            <li>
              <Link to="/progress"><p>PROGRESS</p></Link>
            </li>
            <li>
              <Link to="/add"><p>ADD</p></Link>
            </li>
            <li>
              <Link to="/calendar"><p>CALENDAR</p></Link>
            </li>
          </ul>
        </nav>
        <div className={style.Tools}>
            <div className={style.Setting}><i className="fa-solid fa-gear"></i></div>
            <div className={style.Notifications}><i className="fa-regular fa-bell"></i></div>
            <div className={style.Account}><p>M</p></div>
        </div>
        </header>
        <Routes>
          <Route path="/" element={<Workspace />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/add" element={<Add />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Router>
      </>
  );
}

export default Header;
