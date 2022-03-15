import { Component, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const url = "http://localhost:3005/userinfo";
export default function TicketBooking(props) {
    
    const [ticket, setTicket] = useState({
        movieid: '',
        name: '',
        email: ''
    })

      /**
     * 
     * @returns 
     * Below are the event handlers
     */
        
       const navigate = useNavigate();
       
       function handleChange(e) {
            setTicket({ 
                [e.target.name]: e.target.value
            });
        }
        function handleSubmit (event) {
            event.preventDefault();
            const random = Math.floor(Math.random() * 100);
            const movieData = {
            movieid: random,
            name: ticket.name,
            email: ticket.email,
            }
            
   

            //posting user data using axios
            axios({
                url,
                method: "post",
                data: movieData
            }).then((response) => {
            console.log("Movie form data: ", response.data);
            }, (error) => {
            console.log("Movie data not entered: ", error);
            })
            alert('User data is submitted');
            console.log("Movie data: ", movieData);

            navigate('/confirmation');
        }


    return(
        <div>
            <p style={{ marginTop: 10 }}>Ticket Booking page</p>

            <form >
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text"
                            className="form-control"
                            name="name"
                            value={ticket.name}
                            onChange={handleChange}
                            id="name"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text"
                            className="form-control"
                            value={ticket.email}
                            name="email"
                            onChange={handleChange}
                            id="email"/>
                    </div>
                        <br />
                    <button type="submit" className="btn btn-success"
                        onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
        </div>
    )
}
