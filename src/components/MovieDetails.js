import {useParams, useNavigate} from "react-router"
import { useEffect } from "react"
import axios from "axios"
import { connect } from "react-redux"



function MovieDetails(props){
    const params =  useParams()
    const navigate =  useNavigate()
    console.log(",,, props" , params)
    const movies =  props.movies
    console.log("props movies: ", movies);

    useEffect(()=>{
       props.dispatch({
        type:"GET_MOVIE_DETAILS",
        payload:params.movieid
       })
    } ,[])

    
    function bookNow(){
    
       axios({
         method:"post",
         url:"http://localhost:3005/transactions/",
         data:{
           movieid: movies.movieid,
           price: movies.price,
           name: movies.name,
           image: movies.image,

         }
       }).then((response)=>{
         console.log("response form asdd cake to cart api" , response.data)
         if(response.data){
           navigate("/book")
         }
       }, (error)=>{
         console.log("error from add cake to cart api" , error)
       })
      
    }
    

    return (<div className="container mt-4">
    <h1>{movies && movies.name}</h1>
    {movies && <section className="cake-details mb-5 pt-4 pb-4">
    <div className="col-md-12 row">
      <div className="col-md-4 mb-4 mb-md-0">
        <div className="mdb-lightbox">
          <div className="row product-gallery mx-1">
            <div className="col-12 mb-0">
              <div className="view overlay rounded z-depth-1 main-img">
                <a href={movies.image} data-size="710x823">
                  <img src={movies.image} alt={movies.name} className="img-fluid z-depth-1" style={{width:"100%"}}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <h5>{movies.name}</h5>
        {/* <p className="mb-2 text-muted text-uppercase small">{movies.reviews} reviews</p> */}
        <ul className="rating">
          {/* {Array(ratings).fill(0).map((value, index) => <li key={index}><i className="fas fa-star fa-sm text-primary"></i></li>)} */}
          {/* {ratings < cake.ratings && <li key={ratings + 1}><i className="fas fa-star-half-alt fa-sm text-primary"></i></li>} */}
          {/* {Array(Math.floor(5 - cake.ratings)).fill(0).map((value, index) => <li key={ratings + index}><i className="far fa-star fa-sm text-primary"></i></li>)} */}
        </ul>
        {/* <p><span className="mr-1"><strong>₹{cake.price}</strong></span></p> */}
        {/* <p className="pt-1">{cake.description}</p> */}
        <div className="table-responsive">
          <table className="table table-sm table-borderless mb-0">
            <tbody>
              <tr>
                <th className="pl-0 w-25" scope="row"><strong>Duration</strong></th>
                <td>{movies.duration}</td>
              </tr>
              {/* <tr>
                <th className="pl-0 w-25" scope="row"><strong>Ingredients</strong></th>
                <td>{cake.ingredients && cake.ingredients.join()}</td>
              </tr> */}
              <tr>
                <th className="pl-0 w-25" scope="row"><strong>Times</strong></th>
                <td>{movies.times}</td>
              </tr>
              <tr>
                <th className="pl-0 w-25" scope="row"><strong>Price</strong></th>
                <td>${movies.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        {/* <button type="button" className="btn btn-primary btn-md mr-1 mb-2">Buy now</button> */}
        {!props.isLoading && <button  onClick={bookNow}  type="button" className="btn btn-light btn-md mr-1 mb-2"><i
            className="fas fa-shopping-cart pr-2"></i>Book Now</button>}
        {props.isLoading && <button type="button" className="btn btn-light btn-md mr-1 mb-2" disabled><i
            className="fas fa-shopping-cart pr-2"></i> Please wait... Booking  Now</button>}
      </div>
    </div>
   
  
  </section>}
  </div>)
}

export default connect((state,props)=>{
     return {
    movies : state["moviedetails"] || []
}
})( MovieDetails)