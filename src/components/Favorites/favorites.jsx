import React from 'react';
import Image from "react-bootstrap/Image";
import Movies from './../Movies/Movies';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../../store/slices/Favorites';
import axiosInstance from '../../axiosConfig/instance';
import { useNavigate } from 'react-router-dom';


export default function Favorites() {
    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.favorites.favorites)
    const removeItem = (move)=>{
            dispatch(removeFavorite(move))
    }
    const navigate = useNavigate()
    const handleNavigation=()=>{
      navigate("/home")  
   // navigate(2)   
}
  return (
    <>
    <section class="h-100 h-custom" style={{backgroundColor: "#d2c9ff"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card card-registration card-registration-2" style={{borderRadius:"15px"}}>
          <div class="card-body p-0">
            <div class="row g-0">
              <div class="col-lg-8">
                <div class="p-5">
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <h1 class="fw-bold mb-0 text-black">Favorites </h1>
                    <h6 class="mb-0 text-muted">3 items</h6>
                  </div>
                  <hr class="my-4"/>
                  {(favorites)?favorites.map((Move) => {
                    return  <div key={Move.id} class="row mb-4 d-flex justify-content-between align-items-center">
                      <div class="col-md-2 ">
                        <Image
                          src={`https://image.tmdb.org/t/p/w500/${Move.backdrop_path}`}
                          class="img-fluid rounded-3" alt="Cotton T-shirt"/>
                      </div>
                      <div class="col-md-7 ">
                        <h6 class="text-muted">Shirt</h6>
                        <h6 class="text-black mb-0">Cotton T-shirt</h6>
                      </div>
                      <div class="col-md-2  d-flex">
                      <button type="button" class="btn btn-dark btn-block btn"
                      data-mdb-ripple-color="dark">Watch</button>
                      </div>
                      <div class="col-md-1   text-end">
                        <a  onClick={()=>{removeItem(Move)}} class="text-muted"><i class="fas fa-times"></i></a>
                      </div>
                      <hr class="my-4"/>
                    </div>
}):""}








                  <div class="pt-5">
                    <h6 class="mb-0"><a onClick={()=>{handleNavigation()}} class="text-body"><i
                          class="fas fa-long-arrow-alt-left me-2"></i>Go Back</a></h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 " style={{backgroundColor:"#79caac"}}>
                <div class="p-5">
                  <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr class="my-4"/>

                  <div class="d-flex justify-content-between mb-4">
                    <h5 class="text-uppercase">items 3</h5>
                    <h5>€ 132.00</h5>
                  </div>

                  <h5 class="text-uppercase mb-3">Shipping</h5>

                  <div class="mb-4 pb-2">
                    <select class="select">
                      <option value="1">Standard-Delivery- €5.00</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                    </select>
                  </div>

                  <h5 class="text-uppercase mb-3">Give code</h5>

                  <div class="mb-5">
                    <div class="form-outline">
                      <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                      <label class="form-label" htmlFor="form3Examplea2">Enter your code</label>
                    </div>
                  </div>

                  <hr class="my-4"/>

                  <div class="d-flex justify-content-between mb-5">
                    <h5 class="text-uppercase">Total price</h5>
                    <h5>€ 137.00</h5>
                  </div>

                  <button type="button" class="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark">Register</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
