import React , {useState , useEffect ,useCallback} from "react"
//history,push(`/${inputvalue})
import { dispatchProductList } from './action'
import {bindActionCreators } from 'redux'
import {useSelector , useDispatch} from 'react-redux'

import axios from "axios"
import { Link } from "react-router-dom"
export default function Cards(){

  /* const [productsData, setProductsData] = useState([])
  const [isLoading , setIsLoading] = useState(true) */
   
/*   const addtocart=(course)=>{
    const CourseExist =cartItem.find((item) =>item.id ==course.id);
    
   } */
   const productsData = useSelector((state) => state.productsReducer)
   const dispatch = useDispatch()
   const actions = bindActionCreators(
     {
       dispatchProductList
     },
     dispatch
   )


    const getData = useCallback(async ()=>{
        const res = await axios.get('https://api.jsonbin.io/b/6123b01ec5159b35ae02b460') 
        actions.dispatchProductList(res.data)
    },[])

    useEffect(()=>{
        getData()
    },[getData])

  return(
    
      <div className="container my-3"  id="courseList">
        <h2 className="text-danger text-center ">
        Where to?  Start your next trip with airbnb
        </h2>
        <h3 className="text-dark text-center"> Explore and Enjoy the stay with airbnb </h3>
        
           <div className="row">
          
      {productsData. productsList.map((post,index)=>{
       return(
         
         <div key={index} className="col-sm-3 py-3"  >
        
         <Link to={`/hotels/${post.id}`} style={{ textDecoration: 'none' }} >
          <div className="card  shadow-sm"  >
          <div className="card-header">
                         
          <img className="card-img-top "    src={post.img} alt="Card image cap" /></div>
          <div className="card-body my-10 "  style={{textDecoration: 'none' , color:"black"}}>
          <h6 style={{textDecoration: "none" , color:"black"}}>{post.name}</h6>
     
         <p className="card-text " style={{textDecoration: 'none' , color:"black"}}><small className="text-muted "style={{textDecoration: "none" , color:"black"}}>
         
         </small>
        
         <span className="d-block"></span>
         {/* <span className="float-right py-3"> 
         <small style={{textDecoration: "line-through" , color:"black"}} className="text-muted ">
           </small><strong className="price" >{post.price}</strong> </span> */}
           
         </p>
       <button className="btn btn-primary text-light add-to-cart"   data-id={post.id}> Explore </button>
         </div>
         </div>
         
         </Link>
           </div>
    
      
          
       )
      })}
    </div>
    </div>

  )
}




