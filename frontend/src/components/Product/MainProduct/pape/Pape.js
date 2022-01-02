import { NavLink } from "react-router-dom";
import "./Pape.css";

const activeNavLinkClassName = (navLinkStatus) => {
  console.log(navLinkStatus);
  return navLinkStatus.isActive ? "active" : "";
};

const Pape = () => {
  return (
    <div className="pape-div">
      <div className="pape-class">
        <p>Showing 1 -8 of 21 items</p>
        <ul>
          <li>
            <NavLink className={activeNavLinkClassName} to="pape=1">
              1
            </NavLink>
          </li>
          <li>
            <NavLink className={activeNavLinkClassName} to="pape=2">
              2
            </NavLink>
          </li>
          <li>
            <NavLink className={activeNavLinkClassName} to="pape=3">
              3
            </NavLink>
          </li>
          <li>
            <NavLink className={activeNavLinkClassName} to="/">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pape;
