import React, { useContext } from 'react';
import Image from "react-bootstrap/Image";
import { useSelector } from 'react-redux';
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import { languageContext } from './../../context/language';
export default function Navbar() {
  const favorites = useSelector((state) => state.favorites.favorites)
const {language , setlanguage} = useContext(languageContext)
  return (
    <>
    {/* <!-- Navbar --> */}
<nav className="navbar navbar-expand-lg " style={{backgroundColor:"black"}} >
  {/* <!-- Container wrapper --> */}
  <div className="container-fluid">
    {/* <!-- Toggle button --> */}
    <button
      className="navbar-toggler "
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars" style={{color:"white"}}></i>
    </button>

    {/* <!-- Collapsible wrapper --> */}
    <div className="collapse navbar-collapse p-3" id="navbarSupportedContent">
      {/* <!-- Navbar brand --> */}
      <NavLink className="navbar-brand mt-2 mt-lg-0" to="/home">
      <Image
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        />
      </NavLink>
      {/* <!-- Left links --> */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" style={{color:"white" , textDecoration:"none"}} to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" style={{color:"white" , textDecoration:"none"}} to="/toDo">ToDo</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link " style={{color:"white"}} ></a>
        </li>
      </ul>
      {/* <!-- Left links --> */}
    </div>
    {/* <!-- Collapsible wrapper --> */}

    {/* <!-- Right elements --> */}

    <div class="d-flex align-items-center">
    <ul class="navbar-nav">
      {/* <!-- Notification dropdown --> */}
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-bell" style={{color:"white"}}></i>
          <span class="badge rounded-pill badge-notification bg-success">1</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#" >Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </li>
      {/* <!-- Notification dropdown --> */}
    </ul>
    <button type="button" style={{textDecoration:"none",color:"rgb(121 202 172)"}}  class=" btn btn-link px-3 me-2">
    <NavLink className="nav-link" style={{textDecoration:"none",color:"rgb(121 202 172)"}} to="/signIn">Login</NavLink>
          
        </button>
        <button type="button" class="btn me-3" style={{backgroundColor:"rgb(121 202 172)"}}>
        <NavLink className="nav-link" style={{textDecoration:"none",color:"white"}} to="/signUp">Sign up for free</NavLink>
          
        </button>
        <button onClick={()=>{setlanguage((language=='en')?'ar':'en')}} type="button" class="btn me-3" style={{backgroundColor:"rgb(121 202 172)",color:"white"}}>
        {language}          
        </button>
    <ul class="navbar-nav d-flex flex-row">
      {/* <!-- Icons --> */}
      <li class="nav-item me-3 me-lg-0">
        <a class="nav-link" href="#">
          <i class="fas fa-shopping-cart" style={{color:"white"}}></i>
        </a>
      </li>
      <li class="nav-item me-3 me-lg-0">
        <NavLink className="nav-link" style={{color:"white" , textDecoration:"none"}} to="/favorites">
        <i class="fa-solid fa-heart" style={{color:"white"}}></i>
        <span class="badge rounded-pill badge-notification bg-success ">{favorites.length}</span>
        </NavLink>
      </li>
      {/* <!-- Icon dropdown --> */}
      <li mdbdropdown="true" class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          mdbdropdowntoggle="true"
          aria-expanded="false"
        >
          <i class="fas fa-user" style={{color:"white"}}></i>
        </a>
        <ul
          mdbdropdownmenu="true"
          class="dropdown-menu"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Action</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another action</a>
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
    {/* <!-- Right elements --> */}
  </div>
  {/* <!-- Container wrapper --> */}
</nav>

{/* <!-- Navbar --> */}
    </>
  );
}
