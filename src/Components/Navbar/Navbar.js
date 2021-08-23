import React from "react"
import { Link } from "react-router-dom"
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
// import Popover from '@material-ui/core/Popover';
// import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import "./Navbar.css";



export default function Navbar(props)  {
        const {auth  ,logoutHandler , loginHandler ,cartItems} = props
        const {countCartItems} =props
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
                   <Link to="/"><img src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" width="120px" style={{marginRight:"2px" , marginBottom:"10px"}} /></Link>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">


                        <ul className="navbar-nav mr-auto container-fluid">
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-list-ul"></i> Categories
                                </a>
                                <div class="dropdown-menu " aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Development</a>
                                    <a class="dropdown-item" href="#">Bussiness</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">It & Software</a>
                                </div>
                            </li> */}


                            <li className="nav-item col-6">
                                <form className="form-inline my-2 my-lg-0 inbutton">
                                
                                    <input className="form-control form-control-lg mr-lg-0 bg-light border "
                                        style={{ borderRadius: "5px 5px 5px 5px" }}
                                        type="search" placeholder="Search cities" aria-label="Search" />
                                        <button className="btn btn-light btn-lg  my-1 my-sm-0 ml-0 col-1 border"
                                        style={{ borderRadius: "5px 5px 5px 5px" }}
                                        type="submit"><i className="fas fa-search text-danger "></i></button>

                                   
                                </form>
                            </li>

                            
                            
                        <li className="nav-item">
          <a className="nav-link active text-secondary" aria-current="page" href="#">Places To stay</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">Experiences</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">Explore your way</a>
        </li>


                        </ul>

                
     

                        {/* <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button  color="light" size="sm" {...bindTrigger(popupState)}>
              <Typography variant="caption"> Udemy for Bussiness</Typography>
          
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
          
              <Typography>vmhvjkjkbhlknkl</Typography>
            
          </Popover>
        </div>
      )}
    </PopupState> */}
                            
                        {/* <a className="nav-link btn btn-light text-dark border mx-1" href="#">Become an Instructor</a> 

                        <a href="https://github.com/wl-ui-2021/Anuradha-Product1"><h6 className="text-dark" style={{textDecoration:"none"}}>Anuradha</h6></a>






                        <Link to="/Cart"  >
                            <div>
                            <i className="fa fa-shopping-cart  btn btn-secondary mx-2 rounded-circle"   > {countCartItems}</i>
                           
                          </div>
                        </Link> */}




                        
                        
                    {!auth ?       <Link to="/Signup" ><button className="nav-link btn btn-primary text-light mx-2 text-decoration-none"  >Login</button></Link> 
                                                 
                                : <button  className="btn btn-primary" onClick={logoutHandler}>Signout</button>}


                    </div>
                </nav>
               

            </div>

        )
    }





