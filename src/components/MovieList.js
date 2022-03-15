import { Component } from "react"
import Movie from "./Movie"
import { connect } from "react-redux"
import '../App.css'


class MovieList extends Component {
    constructor(){
        super()
    this.state = {
            movies:[]
        }
    }
    componentDidMount(){

        this.props.dispatch({
            type:"GET_MOVIES"
        })
     
    }
    render() {
        return (
            <div>
               <div className="headCenter">
                    <h2>Latest Movies</h2>
               </div>
                <div className="row">
                    {this.props.movies.map((each,index)=>{
                        return <Movie  key={index} data={each} />
                    })}
                </div>
            </div>

        )
    }
}

export default connect(function(state,props){
    return {
        movies :state["movies"] || []
    }
})( MovieList)