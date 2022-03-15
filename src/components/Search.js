import {useLocation} from "react-router"

function Search(){
    var location = useLocation()
    console.log("...................." , location.search)
    return <div>
        <h1>Search Page</h1>
    </div>
}

export default Search