import { Link } from "react-router-dom"
import { Button } from 'reactstrap';


function Movie(props) {
    // props is an object
    return (
        <div class="card col-md-4 cardStyle" style={{ width: "21.8rem" }}>
            <Link to={`/movies/${props.data.movieid}`}><img style={{ height: "15rem" }} src={props.data.image} class="card-img-top" alt="..." /></Link>
            <div class="card-body">
                <h5 class="card-title">{props.data.name}</h5>
                <p class="card-text">{props.data.ratings}</p>
                {/* <Button>Normal Seat</Button><br/>
                <Button>Moderate Seat</Button><br/>
                <Button>Expensive Seat</Button> */}
            </div>
        </div>
    )
}

export default Movie