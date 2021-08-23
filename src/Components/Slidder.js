import React, { Component } from 'react';

import Banner from "../Components/Search/Banner"


class Slidder extends Component {
    render() {
        return (
        
    
            <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel" >

<Banner/>

            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block item  col-md-12 " style={{height:"600px"}}  data-interval="1000" src="https://images.squarespace-cdn.com/content/v1/5c806e5734c4e2faa1db54c9/1587246353234-80NM8NM4OGB44JGIVP9Y/Neutra%27s+Wilkins+House+in+Pasadena%2C+1949.png" alt="First slide" />
              </div>
             <div className="carousel-item">
                <img className="d-block item  col-md-12"   data-interval="2000" src="https://www.jetsetter.com//uploads/sites/7/2018/04/9s9_ATCO-1380x690.jpeg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block item  col-md-12"  data-interval="3000" src="https://www.jetsetter.com//uploads/sites/7/2018/04/DFpUWVd-1380x690.jpeg" alt="Third slide" />
              </div>
              
            </div>
            
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
               

     
        
          
          </div>
          
        );
    }
}
export default Slidder