import React from 'react';
import  { useEffect ,useState} from 'react';
import Image from "react-bootstrap/Image";
import axiosInstance from '../../axiosConfig/instance';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './MoviesDitals.css'
export default function MoviesDitals() {
    var { id } = useParams()
    const navigate = useNavigate()
    const [Move,setMove]  = useState({})
 
 
     useEffect(function () {
 
 
         const getDetails=async()=>{
             try{
                 var res =  await axiosInstance.get(`/movie/${id}`)
                 // console.log(res);
                 setMove(res.data)
                }catch(err){
                 console.log(err);
                }
         }
           
        getDetails()

     }, [])
     const handleNavigation=()=>{
        navigate("/home")  
     // navigate(2)   
 }
    return (
        <>
            <div className="container">

                <div className="row my-4">
                    <div className="col-md-2">
                        <a href="#"><img src="" className="img-thumbnail p-0 border-0" /></a>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group input-group-lg">
                            <input type="text" id="" name="" className="form-control" placeholder="What search?" />
                            <select className="form-control form-control-lg rounded-0">
                                <option>Categories</option>
                                <option>Electronics</option>
                                <option>Decoration</option>
                                <option>Computers</option>
                                <option>Sports</option>
                            </select>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button"><i className="fas fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-outline-secondary btn-block btn-lg" type="button">
                            <i className="fas fa-sync-alt"></i>
                        </button>
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-outline-secondary btn-block btn-lg" type="button">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                    <div className="col-md-2">
                        <div className="dropdown">
                            <button className="btn btn-outline-secondary btn-block btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-shopping-bag"></i>
                                <span>Cart</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right p-3" style={{ width: "500px" }}>
                                <table className="table table-sm table-striped table-bordered m-0">
                                    <tbody>
                                        <tr>
                                            <td className="text-center">
                                                <img src={`https://image.tmdb.org/t/p/w500/${Move.backdrop_path}`} className="img-thumbnail p-0" alt="" />
                                            </td>
                                            <td className="text-left">
                                                <p className="m-0">
                                                    <a href="#">
                                                        <i className="fas fa-times"></i>
                                                    </a>
                                                    <span>iPhone 11 Plus</span>
                                                </p>
                                            </td>
                                            <td className="text-center">1x</td>
                                            <td className="text-right">$123.20</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <img src={`https://image.tmdb.org/t/p/w500/${Move.backdrop_path}`} className="img-thumbnail p-0" alt="" />
                                            </td>
                                            <td className="text-left">
                                                <p className="m-0">
                                                    <a href="#">
                                                        <i className="fas fa-times"></i>
                                                    </a>
                                                    <span>iPhone 11 Plus</span>
                                                </p>
                                            </td>
                                            <td className="text-center">1x</td>
                                            <td className="text-right">$123.20</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <img src="https://via.placeholder.com/30x30" className="img-thumbnail p-0" alt="" />
                                            </td>
                                            <td className="text-left">
                                                <p className="m-0">
                                                    <a href="#">
                                                        <i className="fas fa-times"></i>
                                                    </a>
                                                    <span>iPhone 11 Plus</span>
                                                </p>
                                            </td>
                                            <td className="text-center">1x</td>
                                            <td className="text-right">$123.20</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right" colspan="3">Sub-Total</td>
                                            <td className="text-right">$601.00</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right" colspan="3">Eco Tax (-2.00)</td>
                                            <td className="text-right">$4.00</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right" colspan="3">VAT (20%)</td>
                                            <td className="text-right">$120.20</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right" colspan="3">Total</td>
                                            <td className="text-right">$725.20</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right" colspan="4">
                                                <a className="btn btn-secondary" href="#" role="button">
                                                    <i className="fas fa-shopping-cart"></i>
                                                    <span>View Cart</span>
                                                </a>
                                                <a className="btn btn-primary" href="#" role="button">
                                                    <i className="fas fa-share"></i>
                                                    <span>Checkout</span>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12 mb-4">
                                <img alt="" className="img-thumbnail p-0 border-0" style={{height:"29rem"}} src={`https://image.tmdb.org/t/p/w500/${Move.backdrop_path}`} />
                            </div>
                            <div className="col-md-3 mb-4">
                                <img alt="" className="img-thumbnail p-0 border-0" src="https://www.themoviedb.org/t/p/w138_and_h175_face/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg" />
                            </div>
                            <div className="col-md-3 mb-4">
                                <img alt="" className="img-thumbnail p-0 border-0" src="https://www.themoviedb.org/t/p/w138_and_h175_face/lyUyVARQKhGxaxy0FbPJCQRpiaW.jpg" />
                            </div>
                            <div className="col-md-3 mb-4">
                                <img alt="" className="img-thumbnail p-0 border-0" src="https://www.themoviedb.org/t/p/w138_and_h175_face/dhiUliLE7dFaqj5BKNQ6x7Wm9uR.jpg" />
                            </div>
                            <div className="col-md-3 mb-4">
                                <img alt="" className="img-thumbnail p-0 border-0" src="https://www.themoviedb.org/t/p/w138_and_h175_face/lFKyW2C7xj7X4nWpOEbVIDGOKrH.jpg" />
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h1>{Move.title}</h1>
                                <p className="m-0">
                                    <i className="fas fa-star fa-sm"></i>
                                    <i className="fas fa-star fa-sm"></i>
                                    <i className="fas fa-star fa-sm"></i>
                                    <i className="far fa-star fa-sm"></i>
                                    <i className="far fa-star fa-sm"></i>
                                </p>
                                <ul className="list-group list-group-flush mb-4">
                                    <li className="list-group-item pl-0 pr-0 pt-2 pb-2">Language: {Move.original_language}</li>
                                    <li className="list-group-item pl-0 pr-0 pt-2 pb-2">popularity: {Move.popularity}</li>
                                    <li className="list-group-item pl-0 pr-0 pt-2 pb-2">release date: {Move.release_date}</li>
                                    <li className="list-group-item pl-0 pr-0 pt-2 pb-2">vote average: {Move.vote_average}</li>
                                    <li className="list-group-item pl-0 pr-0">
                                        <p className="m-0 h2"> <small>overview</small></p>
                                        <p className="m-0 text-muted">{Move.overview}</p>
                                    </li>

                                </ul>

                                <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-secondary">
                                        <i className="fas fa-cart-plus"></i>
                                        <span>Add Cart</span>
                                    </button>
                                    <button type="button" className="btn btn-secondary"><i className="fas fa-shopping-cart"></i></button>
                                    <button type="button" className="btn btn-secondary"><i className="fas fa-heart"></i></button>
                                    <button type="button" className="btn btn-secondary"><i className="fas fa-exchange-alt"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="d-flex justify-content-center my-3 fs-3 "
                        role="group"
                        aria-label="Basic example"
                    >
                        <button
                            class="border-0 p-3 "
                        >
                            <i class="fa-solid fa-angles-left shadow-lg"></i>
                        </button>
                        <button
                            class="border-0 p-3"
                        >
                            <i class="fa-solid fa-angles-right shadow-lg"></i>
                        </button>
                    </div>
                    <button onClick={()=>{handleNavigation()}} className="btn btn-secondary btn-block btn-lg shadow-lg" type="button">
                        <h3 >Go Back</h3>
                    </button>
                    <div className="col-md-12 mt-5">
                        <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link lead active" role="tab" data-toggle="tab" href="#tabDescription">Description</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link lead" role="tab" data-toggle="tab" href="#tabSpecification">Specification</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link lead" role="tab" data-toggle="tab" href="#tabReview">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link lead" role="tab" data-toggle="tab" href="#tabFaq">FAQ's</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link lead" role="tab" data-toggle="tab" href="#tabVideo">Video</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link lead" role="tab" data-toggle="tab" href="#tabBlog">Blog</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane pt-4 active" role="tabpanel" id="tabDescription">
                                <p>Morbi et feugiat massa, ut pretium felis. Fusce lobortis quam a turpis iaculis accumsan. In ac odio vitae augue vulputate egestas. Nulla iaculis mi in lectus accumsan pellentesque. Integer neque est, imperdiet eget ex at, suscipit euismod eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed malesuada elementum accumsan. Suspendisse rhoncus accumsan orci, id blandit ante accumsan viverra. Etiam id tortor in arcu suscipit iaculis. Donec efficitur, leo nec pulvinar pulvinar, nibh ligula feugiat augue, euismod condimentum turpis nulla nec ipsum. Praesent id tristique massa, id rhoncus diam. Sed vel odio porttitor, pretium augue nec, placerat neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit sapien. Nullam semper laoreet ligula ut varius. Fusce interdum scelerisque porttitor.</p>
                                <p>Nunc mollis velit libero, vel semper lorem bibendum eu. Nam in purus arcu. Quisque et tortor ac nunc ullamcorper interdum vel eget sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam ultrices cursus turpis interdum vulputate. Nullam vulputate, nisi ut hendrerit rhoncus, nunc nibh ultrices lorem, at facilisis lorem mauris id ex. Integer nec faucibus odio. Sed nec risus ut nisi tempus viverra. Vivamus hendrerit faucibus lorem. Curabitur vel laoreet est, nec accumsan lacus.</p>
                                <p>Maecenas tempus eu ex vitae vulputate. Cras non elit scelerisque, tempus risus eu, porta ipsum. Morbi elementum, lorem a viverra dictum, nibh urna sollicitudin elit, at vestibulum nisi urna at metus. Vivamus id volutpat nibh, finibus vehicula velit. In hac habitasse platea dictumst. Aliquam pharetra lectus massa, et dictum felis molestie et. Nunc sed nibh ac felis consequat consectetur ut sed lorem. Suspendisse tempus tincidunt eros vel pharetra. Mauris pellentesque lacus posuere lacus pellentesque lacinia. Nunc sit amet eros eu ipsum cursus pharetra. Mauris non nunc enim. Vestibulum lectus leo, dictum ut risus sed, semper tristique turpis. Etiam nec libero sed libero tristique condimentum.</p>
                                <p>In hac habitasse platea dictumst. Integer ut dignissim diam. Mauris varius eget erat quis sollicitudin. Sed congue nulla lacus. Proin nec hendrerit eros. Proin consequat vehicula quam commodo vestibulum. Etiam nec ligula mattis, laoreet ipsum vel, ultricies nisi. Vestibulum ut dignissim velit. In gravida velit vel vestibulum viverra. Sed convallis at turpis ut pharetra. Nulla eleifend urna arcu, a semper eros ultrices sit amet. Vivamus eget sapien ipsum. Etiam euismod, ante quis pellentesque pellentesque, mauris leo rhoncus dui, ut faucibus felis dui non odio. Etiam eleifend lobortis eros, sed aliquam elit fermentum et. Sed vel lectus accumsan, tempor magna venenatis, euismod orci.</p>
                            </div>
                            <div className="tab-pane pt-4" role="tabpanel" id="tabSpecification">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <td colspan="2"><strong>Memory</strong></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>test 1</td>
                                            <td>16GB</td>
                                        </tr>
                                    </tbody>
                                    <thead>
                                        <tr>
                                            <td colspan="2"><strong>Processor</strong></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>No. of Cores</td>
                                            <td>4</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="tab-pane pt-4" role="tabpanel" id="tabReview">
                                <div className="card mb-4">
                                    <div className="card-header">Write a read</div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group row">
                                                <label for="" className="col-sm-12 col-form-label">Your Name</label>
                                                <div className="col-sm-12">
                                                    <input type="text" className="form-control" id="" name="" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="" className="col-sm-12 col-form-label">Your Review</label>
                                                <div className="col-sm-12">
                                                    <textarea className="form-control" id="" name="" placeholder="Your Review" rows="3"></textarea>
                                                    <small id="" className="form-text text-muted">Note: HTML is not translated!</small>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer">
                                        <input className="btn btn-primary" type="submit" value="Submit" />
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">Write a review</div>
                                    <div className="card-body">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td colspan="2">
                                                        <strong>Ilea Heidemann</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <p>Quaerat et sit sequi unde nostrum, accusantium accusamus ad placeat. Libero sit ut sit ut in consequuntur, sed recusandae esse; qui eum alias fuga ratione ut reiciendis commodi et laboriosam? Earum eveniet et neque est alias commodi voluptatem veniam est. Ad aut sit excepturi unde laudantium voluptatem reiciendis nostrum eos. Molestiae omnis consectetur, culpa in sed aliquam porro quas asperiores. Eum modi, a incidunt dolor ut molestiae aut accusamus aspernatur! Tenetur sed eveniet nesciunt, quam reprehenderit modi repellat quasi voluptatem. Sit quia nulla similique omnis in ipsa quasi ipsam consectetur!</p>
                                                        <p className="m-0">18/03/2013</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <strong>Customer Rating: </strong>
                                                        <span className="fa fa-stack">
                                                            <i className="fas fa-star fa-stack-1x"></i>
                                                            <i className="far fa-star fa-stack-1x"></i>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="far fa-star fa-stack-1x"></i>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="far fa-star fa-stack-1x"></i>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="far fa-star fa-stack-1x"></i>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="far fa-star fa-stack-1x"></i>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td colspan="2">
                                                        <strong>Jelea lehwe</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <p>Libero sit ut sit ut in consequuntur, sed recusandae esse; qui eum alias fuga ratione ut reiciendis commodi et laboriosam? Earum eveniet et neque est alias commodi voluptatem veniam est. Ad aut sit excepturi unde laudantium voluptatem reiciendis nostrum eos. Molestiae omnis consectetur, culpa in sed aliquam porro quas asperiores.</p>
                                                        <p className="m-0">18/03/2013</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <strong>Customer Rating: </strong>
                                                        <span className="fa fa-stack">
                                                            <i className="fas fa-star fa-stack-1x"></i>
                                                            <i className="far fa-star fa-stack-1x"></i>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="far fa-star fa-stack-1x"></i>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="far fa-star fa-stack-1x"></i>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="far fa-star fa-stack-1x"></i>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="far fa-star fa-stack-1x"></i>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane pt-4" role="tabpanel" id="tabFaq">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header bg-white" id="headingOne" data-toggle="collapse" data-target="#collapseOne">Collapsible Group Item #1</div>
                                        <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                            <div className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header bg-white" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo">Collapsible Group Item #2</div>
                                        <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
                                            <div className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header bg-white" id="headingThree" data-toggle="collapse" data-target="#collapseThree">Collapsible Group Item #3</div>
                                        <div id="collapseThree" className="collapse" data-parent="#accordionExample">
                                            <div className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane pt-4" role="tabpanel" id="tabVideo">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="card">
                                            <Image className="card-img-top" src="https://via.placeholder.com/200x200" alt="" />
                                            <div className="card-footer">
                                                <p className="card-text"><a href="#">Usage Video</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <Image className="card-img-top" src="https://via.placeholder.com/200x200" alt="" />
                                            <div className="card-footer">
                                                <p className="card-text"><a href="#">Settings Video</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <Image className="card-img-top" src="https://via.placeholder.com/200x200" alt="" />
                                            <div className="card-footer">
                                                <p className="card-text"><a href="#">Experiences Video</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <Image className="card-img-top" src="https://via.placeholder.com/200x200" alt="" />
                                            <div className="card-footer">
                                                <p className="card-text"><a href="#">Customer Reviews Video</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane pt-4" role="tabpanel" id="tabBlog">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card mb-4">
                                            <div className="row no-gutters">
                                                <div className="col-md-4">
                                                    <img className="card-img" alt="" src="https://via.placeholder.com/200x230" />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h6 className="card-title">Praesent convallis lacus sed est gravida ultricies.</h6>
                                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card mb-4">
                                            <div className="row no-gutters">
                                                <div className="col-md-4">
                                                    <img className="card-img" alt="" src="https://via.placeholder.com/200x230" />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h6 className="card-title">Praesent convallis lacus sed est gravida ultricies.</h6>
                                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="row no-gutters">
                                                <div className="col-md-4">
                                                    <img className="card-img" alt="" src="https://via.placeholder.com/200x230" />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h6 className="card-title">Praesent convallis lacus sed est gravida ultricies.</h6>
                                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="row no-gutters">
                                                <div className="col-md-4">
                                                    <img className="card-img" alt="" src="https://via.placeholder.com/200x230" />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h6 className="card-title">Praesent convallis lacus sed est gravida ultricies.</h6>
                                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <i className="float-left mr-3 fa-3x fas fa-shipping-fast"></i>
                                        <p className="h5">Free shipping & Return <br /><small className="text-muted">For all orders over $500</small></p>
                                    </div>
                                    <div className="col-md-3">
                                        <i className="float-left mr-3 fa-3x fas fa-thumbs-up"></i>
                                        <p className="h5">Customer Protection <br /><small className="text-muted">From click to delivery.</small></p>
                                    </div>
                                    <div className="col-md-3">
                                        <i className="float-left mr-3 fa-3x fas fa-umbrella"></i>
                                        <p className="h5">Safe Payment <br /><small className="text-muted">Use world’s most secure payment methods.</small></p>
                                    </div>
                                    <div className="col-md-3">
                                        <i className="float-left mr-3 fa-3x fas fa-life-ring"></i>
                                        <p className="h5">Support 24/7 <br /><small className="text-muted">We answer for question all time</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <p className="lead">We’ll never share your email address with a third-party.</p>
                                <div className="input-group input-group-lg">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Sign Up For Newsletter</span>
                                    </div>
                                    <input type="text" id="" name="" className="form-control" placeholder="Your email address" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12 mb-5">
                        <div className="card">
                            <div className="card-header">
                                <p className="m-0 lead text-center">follow us on social media</p>
                            </div>
                            <div className="card-body">
                                <ul className="nav justify-content-center">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa-3x fab fa-facebook-f"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa-3x fab fa-twitter"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa-3x fab fa-instagram"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa-3x fab fa-google-plus-g"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa-3x fab fa-youtube"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa-3x fab fa-pinterest"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa-3x fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card">
                            <div className="card-header">Corporate</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-2"><a href="#" title="">About Us</a></li>
                                <li className="list-group-item p-2"><a href="#" title="">Company Profile</a></li>
                                <li className="list-group-item p-2"><a href="#" title="">Blog</a></li>
                                <li className="list-group-item p-2"><a href="#" title="">Site Maps</a></li>
                                <li className="list-group-item p-2"><a href="#" title="">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card">
                            <div className="card-header">Services</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-2"><a href="#" title="">Discounts</a></li>
                                <li className="list-group-item p-2"><a href="#" title="">Campaigns</a></li>
                                <li className="list-group-item p-2"><a href="#" title="">Brands</a></li>
                                <li className="list-group-item p-2"><a href="#" title="">Gift Certificates</a></li>
                                <li className="list-group-item p-2"><a href="#" title="">Returns</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card">
                            <div className="card-header">Account</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-2"><a href="#" title="">Sign In</a></li>
                                <li className="list-group-item p-2"><a href="#" title="">Sign up</a></li>
                                <li className="list-group-item p-2"><a href="#" title="">My Account</a></li>
                                <li className="list-group-item p-2"><a href="#" title="">Order History</a></li>
                                <li className="list-group-item p-2"><a href="#" title="">Wish List</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card">
                            <div className="card-header">Support</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-2"><a href="#" title="">FAQ</a></li>
                                <li className="list-group-item p-2"><a href="#" title="">Ticket</a></li>
                                <li className="list-group-item p-2"><a href="#" title="">Feedback</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">Contact Us</div>
                            <div className="card-body">
                                <p>We are a team of designers and developers that create high quality Magento, Prestashop, Opencart.</p>
                                <p className="m-0"><strong>Address</strong></p>
                                <p>4710-4890 Breckinridge St, UK Burlington, VT 05401</p>
                                <p className="m-0"><strong>Need Help?</strong></p>
                                <p>Call: 1-800-345-6789</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-5 mb-4">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa-2x fab fa-cc-diners-club"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa-2x fab fa-cc-amex"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa-2x fab fa-cc-discover"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa-2x fab fa-cc-jcb"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa-2x fab fa-cc-mastercard"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa-2x fab fa-cc-paypal"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa-2x fab fa-cc-visa"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-12">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Privacy Policy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Terms & Conditions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Site Map</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-12">
                        <p className="text-center">Copyright © 2019 Your Store All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </>

    );
}
