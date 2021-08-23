export const GETPRODUCTSLIST = "GETPRODUCTSLIST"
export const GETPRODUCTDETAIL = "GETPRODUCTDETAIL"


export const dispatchProductList = (data)=> dispatch=>{
    return dispatch({
        type : GETPRODUCTSLIST,
        payload : data 
    })
}


export const dispatchProductDetail = (data) => dispatch =>{
    return dispatch({
        type : GETPRODUCTDETAIL,
        payload : data
    })
}