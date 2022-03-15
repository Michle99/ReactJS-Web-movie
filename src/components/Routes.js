import {Routes, Route, BrowserRouter} from "react-router-dom"
import Navbar from "./Navbar"
import Search from "./Search";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import TicketBooking from "./TicketBooking";
import Confirmation from "./Confirmation";

function MyRoutes(){
    return(
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<MovieList/>} />
                    <Route path="/movies/:movieid" element={<MovieDetails/>} />
                    <Route path='/confirmation' element={<Confirmation/>} />
                    <Route path="/book" element={<TicketBooking />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default MyRoutes