/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

var ps;

function Sidebar(props) {
  const [usuario, setUsuario] = useState("");
  const [perfil, setPerfil] = useState(false);

  const profile = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  useEffect(() => {
    setUsuario(profile);
    setPerfil(true);
  }, []);

  const location = useLocation();
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });

  const logout = () => {
    // redireccion
    setTimeout(() => {
      window.location.href = "/admin/login";
    }, 500);

    // redireccion
    localStorage.clear();
  };

  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <Link to="/admin/dashboard" className="simple-text logo-normal m-2">
          {!!setPerfil && usuario != null ? (
            <p>
              Dr. {usuario.name} {usuario.surname}
            </p>
          ) : (
            <p>Dr. tú</p>
          )}
        </Link>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          <li>
            {!!setPerfil && usuario != null ? (
              <>
                <NavLink className="" to="/admin/dashboard">
                  Inicio
                </NavLink>

                <NavLink className="" to="/admin/agregarcitas">
                  Agregar citas
                </NavLink>

                <NavLink className="" to="/admin/vercitas">
                  Ver citas
                </NavLink>

                {/* <NavLink className="" to="/admin/user-page">
              user page
            </NavLink> */}

                {/* <NavLink className="" to="/admin/table-list">
              table-list
            </NavLink> */}

                <NavLink className="" onClick={logout} to="/admin/typografy">
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="" to="/admin/register">
                  registro
                </NavLink>

                <NavLink className="" to="/admin/login">
                  Login
                </NavLink>
              </>
            )}
          </li>
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
