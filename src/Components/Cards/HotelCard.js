import React, { useState, useEffect,useCallback } from 'react'
import {Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/'
import { dispatchProductDetail } from './action'
import {useSelector , useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux'


import axios from 'axios'




const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column' 
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  
})) 
/*   {props.match.params.id} */
export const HotelCard = (props) => {
  const {onAdd}=props
  const classNamees = useStyles();
  const { product } = props




  const classes = useStyles();
 /*  // const [productData, setProductData] = useState({})
  // const [isLoading, setIsLoading] = useState(true)
  //    console.log(productData) */

  const productData = useSelector((state)=> state.productsReducer)
  const dispatch = useDispatch()
  const actions = bindActionCreators(
    {
      dispatchProductDetail
    },
    dispatch
  )

  const getProductData = useCallback(async ()=>{
      const res = await axios.get("https://api.jsonbin.io/b/6123ae43076a223676aff317");
      const findProductData = res.data.find((p)=> p.id === props.match.params.id)
      actions.dispatchProductDetail(findProductData)

    },[props.match.params.id])

  useEffect(()=>{
      getProductData()

      return ()=> {
        console.log("cleaned up")
      }
  }, [getProductData])

  return (
    <>

      <div className="border border-light bg-light">
        <div class="container">
          <div className="row">
            <div className="col-lg-8 mt-5">
              <div className="card bg-light text-dark ">
                <img className="card-img-top" src="" alt="" />

                <div className="card-body">
                  <h1 className="card-title fs-10">{productData. productDetail.name}</h1>
                  <p class="card-text">
                    <h4><small>{productData. productDetail.description}</small></h4>
                    <p>{productData. productDetail.desp1}</p>
                    <p>{productData. productDetail.desp2}</p>
                  </p>
                  <p className="card-text"><small className="text-muted text-light text-decoration-none">
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    
                    4.0 </small>


                  </p>

                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="card">
            
                <img className="card-img-top px-1 py-2  mt-n1 w-100" src={productData. productDetail.img}alt="" />



                <div className="card-body">
                  <h5 className="card-title text-center"><strong>{productData. productDetail.price}</strong></h5>
            <Link to="/payment"><div className="col-md-12 text-center"><button className=" btn btn-danger "  >Book Now</button></div></Link>

                 

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* ======================================================================== */}
<div className="border border-light bg-light">
        <div class="container">
          <div className="row">
            <div className="col-lg-8 mt-5">
              <div className="card bg-light text-dark ">
                <img className="card-img-top" src="" alt="" />

                <div className="card-body">
                  <h1 className="card-title fs-10">Calanjali (Ensuite)</h1>
                  <p class="card-text">
                    <h4><small>Private room in residential home</small></h4>
                    <p>{productData.desp1}</p>
                    <p>{productData.desp2}</p>
                  </p>
                  <p className="card-text"><small className="text-muted text-light text-decoration-none">
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    
                    4.0 </small>


                  </p>

                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="card">
            
                <img className="card-img-top px-1 py-2  mt-n1 w-100" src="https://a0.muscache.com/im/pictures/0075ef8a-413b-409a-9456-dc11530f756e.jpg?im_w=1200" alt="" />



                <div className="card-body">
                  <h5 className="card-title text-center"><strong>Rs.2000/-</strong></h5>
            <Link to="/payment"><div className="col-md-12 text-center">
              <button className=" btn btn-danger " onClick={()=>onAdd(productData)} >Book Now</button></div></Link>

                  

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* ======================================================================= */}

<div className="border border-light bg-light">
        <div class="container">
          <div className="row">
            <div className="col-lg-8 mt-5">
              <div className="card bg-light text-dark ">
                <img className="card-img-top" src="" alt="" />

                <div className="card-body">
                  <h1 className="card-title fs-10">Duplex Sea view Studio Room</h1>
                  <p class="card-text">
                    <h4><small>Private room in residential home</small></h4>
                    <p>{productData.desp1}</p>
                    <p>{productData.desp2}</p>
                  </p>
                  <p className="card-text"><small className="text-muted text-light text-decoration-none">
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    
                    4.0 </small>


                  </p>

                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="card">
            
                <img className="card-img-top px-1 py-2  mt-n1 w-100" src="https://a0.muscache.com/im/pictures/23a8f65e-7d36-4c63-bbb1-3a9f4700fac8.jpg?im_w=1200" alt="" />



                <div className="card-body">
                  <h5 className="card-title text-center"><strong>Rs.3500/-</strong></h5>
            <Link to="/payment"><div className="col-md-12 text-center"><button className=" btn btn-danger " onClick={()=>onAdd(productData)} >Book Now</button></div></Link>

                  

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






{/* ==================================================================================== */}

<div className="border border-light bg-light">
        <div class="container">
          <div className="row">
            <div className="col-lg-8 mt-5">
              <div className="card bg-light text-dark ">
                <img className="card-img-top" src="" alt="" />

                <div className="card-body">
                  <h1 className="card-title fs-10">Eco Sea view</h1>
                  <p class="card-text">
                    <h4><small>Private room in residential home</small></h4>
                    <p>{productData.desp1}</p>
                    <p>{productData.desp2}</p>
                  </p>
                  <p className="card-text"><small className="text-muted text-light text-decoration-none">
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    
                    4.0 </small>


                  </p>

                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="card">
            
                <img className="card-img-top px-1 py-2  mt-n1 w-100" src="https://a0.muscache.com/im/pictures/0671ce8e-f985-4bba-b061-5f16783d6e79.jpg?im_w=1200" alt="" />



                <div className="card-body">
                  <h5 className="card-title text-center"><strong>Rs.2500/-</strong></h5>
            <Link to="/payment"><div className="col-md-12 text-center"><button className=" btn btn-danger " onClick={()=>onAdd(productData)} >Book Now</button></div></Link>

                  

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




{/* ========================================================================================= */}
      

    </>

  )
}