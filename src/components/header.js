import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../scss/main.scss";

const Header = () => {
  const money = useSelector(state => state.pr1.money);
  return (
    <header className="header">
      <div className="container">
        <div className="header_logo">Logo</div>
        <div className="hamburger-box">
          <div className="menu">
            <input className="menu__btn" type="checkbox" id="menu__btn" />
            <label className="menu__icon" htmlFor="menu__btn">
              <span className="menu__navicon"></span>
            </label>

            <ul className="hamburger-list">
              <li className="hamburger-list__item">
                <NavLink className="hamburger-list__link" to="/">
                  головна
                </NavLink>
              </li>
              <li className="hamburger-list__item">
                <NavLink className="hamburger-list__link" to="my_components">
                  My test Components
                </NavLink>
              </li>
              <li className="hamburger-list__item">
                <NavLink className="hamburger-list__link" to="office">
                  My Office
                </NavLink>
              </li>
              <li className="hamburger-list__item">
                <NavLink className="hamburger-list__link" to="shop">
                  Shop
                </NavLink>
              </li>
              <li className="hamburger-list__item">
                <NavLink className="hamburger-list__link" to="/">
                  {money}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

// <nav className="Header Header-expand-lg Header-dark bg-dark">
//   <div className="Header-brand">My App</div>
//   <button
//     className="Header-toggler"
//     type="button"
//     data-toggle="collapse"
//     data-target="#HeaderText"
//     aria-controls="HeaderText"
//     aria-expanded="false"
//     aria-label="Toggle navigation"
//   >
//     <span className="Header-toggler-icon"></span>
//   </button>

//   <div className="collapse Header-collapse" id="HeaderText">
//     <ul className="Header-nav mr-auto">
//       <li className="nav-item active">
//         <NavLink className="nav-link" to="/" exact>
//           Home <span className="sr-only">(current)</span>
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" to="my_components">
//           My test Components
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" to="office">
//           My Office
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" to="shop">
//          Shop
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" to="/">
//          {money} Dollars
//         </NavLink>
//         </li>
//     </ul>
//     <span className="Header-text">Header text with an inline element</span>
//   </div>
// </nav>
