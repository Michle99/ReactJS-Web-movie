import { Link } from "react-router-dom"
import { Component } from "react"
import '../App.css';


class Navbar extends Component {
    
    constructor(){
        super()
        this.state = {
            searchtext:""
        }
    }

    getSearchText =(e)=>{
        console.log("......" , e.target.value)
        this.setState({
            searchtext:e.target.value
        })
    }

    render(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Movie App</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                   
                    <form class="d-flex">
                        <input onChange={this.getSearchText} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                       <Link to={`/search?q=${this.state.searchtext}`}> <button class="btn btn-outline-success" type="button">Search</button></Link>
                    </form>
                    </ul>
                </div>
            </div>
        </nav>
    )
    }
}


export default Navbar;