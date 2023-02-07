import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import { CartWidget } from "../CartWidget/CartWidget";

export function NavBar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark bg-gradient">
        <div className="container-fluid">
          <Link to="/" className="NavbarLogo">
            <img
              src="https://res.cloudinary.com/ariel666/image/upload/v1662580277/ultimoragnar_yttkel.png"
              alt="logo"
            />
            <p className="pageName">RagnarTattoo</p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
               <Link to ="/tienda">
                Tienda
               </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="">
                      Cremas
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Tintas
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Todos los productos
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
              <Link to ="">
                Ubicacion
               </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Turnos
                </a>
              </li>
              <li className="nav-item">
              <Link to ="/contacto">
                Contacto
               </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="">
                  <CartWidget />
                </a>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Busca tu estilo"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
