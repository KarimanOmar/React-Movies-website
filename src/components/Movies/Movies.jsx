import React from 'react';
import Image from "react-bootstrap/Image";
import { useEffect, useState } from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
import axiosInstance from '../../axiosConfig/instance';
import './Movies.css'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../store/slices/Favorites';
import axios from 'axios';
import { MoviesAction } from './../../store/slices/Movies';

export default function Movies() {
    var [MovIes, setMovIes] = useState([])
    var [pageNum, setPageNum] = useState(1)
    const moviesStore = useSelector((state)=>state.movies.movies)
    useEffect(function () {
        dispatch(MoviesAction())
        setMovIes(moviesStore);

        console.log(moviesStore);
    }, [])

    const next = () => {
        setPageNum(++pageNum);
        console.log(pageNum);
        axiosInstance.get('/movie/popular', {
            params: {
                page: pageNum
            }

        }).then((res) => {
            setMovIes(res.data.results);
        }).catch((err) => {
            console.log(err);
        })
    }
    const prev = () => {
        if (pageNum) { }
        setPageNum(--pageNum);
        console.log(pageNum);
        axiosInstance.get('/movie/popular', {
            params: {
                page: pageNum
            }

        }).then((res) => {
            setMovIes(res.data.results);
        }).catch((err) => {
            console.log(err);
        })
        
    }
    const favorites = useSelector((state) => state.favorites.favorites)
    const dispatch = useDispatch()
    const toggleFavorite=(Move)=>{
                dispatch(addFavorite(Move))
 }

    return (

        <>
            <nav class="navbar ">
                <div class="container-fluid justify-content-center">
                    <form class="d-flex input-group w-75 ">
                        <input
                            type="search"
                            class="form-control rounded"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                        />
                        <span class="input-group-text border-0" id="search-addon" style={{ backgroundColor: "rgb(121, 202, 172)" }}>
                            <i class="fas fa-search text-white"></i>
                        </span>
                    </form>
                </div>
            </nav>
            <div className="container mb-5">
                <div className="row">
                    {MovIes.map((Move, index) => {
                        return <div key={Move.id} className="col-md-3">
                            <div className="card mt-5">
                                <div className="image-container">
                                    <div className="first">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="discount">-25%</span>
                                            <span className="wishlist">< i style={{color:"black"}} onClick={()=>{toggleFavorite(Move)}} className={(favorites.find((move)=>move.id==Move.id))?"fa-solid fa-heart":"fa-regular fa-heart" }></i></span>
                                        </div>
                                    </div>
                                    <Image style={{ height: "15rem" }} src={`https://image.tmdb.org/t/p/w500/${Move.backdrop_path}`} className="img-fluid rounded thumbnail-image" />
                                </div>
                                <div className="product-detail-container p-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="dress-name"><NavLink style={{ textDecoration: "none", color: "black" }} to={`/moviesDitals/${Move.id}`}>{Move.title}</NavLink></h5>
                                        <div className="d-flex flex-column mb-2">
                                            <span className="new-price text-center">{Move.original_language.toUpperCase()}</span>
                                            <small className="old-price text-right">{Move.release_date}</small>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center pt-1">
                                        <div className="color-select d-flex ">
                                        </div>
                                        <div className="d-flex ">
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center pt-1">
                                        <div>
                                            <i className="fa fa-star-o rating-star"></i>
                                            <span className="rating-number">{Move.vote_average}</span>
                                        </div>
                                        <span className="buy">Watch</span>
                                    </div>
                                </div>
                            </div>


                            <div className="mt-2">
                                <div className="card voutchers">
                                    <div className="voutcher-divider">
                                        <div className="voutcher-left text-center">
                                            <span className="voutcher-name">popularity</span>
                                            <h5 className="voutcher-code">{Move.popularity}</h5>
                                        </div>
                                        <div className="voutcher-right text-center border-left">
                                            <h5 className="discount-percent">20%</h5>
                                            <span className="off">Off</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>


            
            <div class="d-flex justify-content-center py-3 fs-3 sticky-bottom "
                role="group"
                aria-label="Basic example"
            >
                <button
                    class="border-0 p-3 "
                    onClick={() => { prev() }}
                >
                    <i class="fa-solid fa-angles-left shadow-lg"></i>
                </button>
                <button
                    onClick={() => { next() }}
                    class="border-0 p-3"
                >
                    <i class="fa-solid fa-angles-right shadow-lg"></i>
                </button>
            </div>
        </>
    );
}
