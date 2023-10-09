import React, { useState } from 'react';
import './ToDo.css'
export default function ToDo() {
  const [ToDoVal , setToDo] = useState({
    val : "",
    arrOfValues : []
  })
 const getValToDo = (evnVal)=>{
  setToDo({...ToDoVal,val:evnVal.target.value})
  }
  const AddNewToDO = ()=>{
    if(ToDoVal.val){
      ToDoVal.arrOfValues.push(ToDoVal.val)
      setToDo({...ToDoVal,arrOfValues:ToDoVal.arrOfValues})
    }
console.log(ToDoVal.arrOfValues);
  }
  const Delet =(eve)=>{
    eve.target.parentElement.parentElement.parentElement.parentElement.remove()//ask********
    // eve.remove()
  }
  const Complet =(eve)=>{
eve.target.parentElement.parentElement.parentElement.classList.toggle("text-decoration-line-through")
  }
  
  return (
    <>
    {/* /////////////////////////////////////////////////////////////////////////// */}
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* <!-- Container wrapper --> */}
  <div className="container-fluid">
    {/* <!-- Toggle button --> */}
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarCenteredExample"
      aria-controls="navbarCenteredExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    {/* <!-- Collapsible wrapper --> */}
    <div
      className="collapse navbar-collapse justify-content-center"
      id="navbarCenteredExample"
    >
      {/* <!-- Left links --> */}
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        {/* <!-- Navbar dropdown --> */}
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          {/* <!-- Dropdown menu --> */}
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">Action</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Another action</a>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <a className="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled"
            >Disabled</a
          >
        </li>
      </ul>
      {/* <!-- Left links --> */}
    </div>
    {/* <!-- Collapsible wrapper --> */}
  </div>
  {/* <!-- Container wrapper --> */}
</nav>
    {/* /////////////////////////////////////////////////////////////////////////// */}
<section className="vh-100 ">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card" id="list1" style={{borderRadius: ".75rem", backgroundColor: "#eff1f2"}}>
          <div className="card-body py-4 px-4 px-md-5">

            <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
              <i className="fas fa-check-square me-1"></i>
              <u>My Todo-s</u>
            </p>

            <div className="pb-2">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-row align-items-center">
                    <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1"
                      placeholder="Add new..." value={ToDoVal.val} onChange={(e)=>{getValToDo(e)}}/>
                    <a href="#!" data-mdb-toggle="tooltip" title="Set due date"><i
                        className="fas fa-calendar-alt fa-lg ms-2 me-3"></i></a>
                    <div>
                      <button type="button" onClick={()=>{AddNewToDO()}} className="btn btn-primary">Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-4"/>

            <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
              <p className="small mb-0 me-2 text-muted">Filter</p>
              <select className="select">
                <option value="1">All</option>
                <option value="2">Completed</option>
                <option value="3">Active</option>
                <option value="4">Has due date</option>
              </select>
              <p className="small mb-0 ms-4 me-2 text-muted">Sort</p>
              <select className="select">
                <option value="1">Added date</option>
                <option value="2">Due date</option>
              </select>
              <a href="#!" style={{color: "#23af89"}} data-mdb-toggle="tooltip" title="Ascending"><i
                  className="fas fa-sort-amount-down-alt ms-2"></i></a>
            </div>
           
{ToDoVal.arrOfValues.map((toDO,index) => {
  return            <ul key={index} className="list-group list-group-horizontal rounded-0 bg-transparent">
  <li
    className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
    <div className="form-check">
      <input onChange={(e) => { Complet(e) }} className="form-check-input me-0" type="checkbox" value="" id="flexCheckChecked1"
        aria-label="..."  />
    </div>
  </li>
  <li
    className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
    <p className="lead fw-normal mb-0">{toDO}</p>
  </li>
  <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
    <div className="d-flex flex-row justify-content-end mb-1">
      <a href="#!" className="text-info" data-mdb-toggle="tooltip" title="Edit todo"><i
          className="fas fa-pencil-alt me-3"></i></a>
      <a href="#!" onClick={(e)=>{Delet(e)}} className="text-danger" data-mdb-toggle="tooltip" title="Delete todo"><i
          className="fas fa-trash-alt"></i></a>
    </div>
    <div className="text-end text-muted">
      <a href="#!" className="text-muted" data-mdb-toggle="tooltip" title="Created date">
        <p className="small mb-0"><i className="fas fa-info-circle me-2"></i>28th Jun 2020</p>
      </a>
    </div>
  </li>
</ul>
})}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
