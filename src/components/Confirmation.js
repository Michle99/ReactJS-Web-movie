import axios from "axios";
import { Component, useEffect } from "react";
import { connect } from "react-redux";
import Transaction from "./Transaction";
import '../App.css';

class Confirmation extends Component {
    constructor() {
        super();
        this.state={
            transactions: []
        }
    }

    componentDidMount(){
        axios({
            url: "http://localhost:3005/transactions",
            method: "get"
        }).then((response) => {
            console.log("responses from courses api: ", response);
             this.props.dispatch({
                type:"GET_TRANSACTIONS",
                payload:response.data
            })
        },
         (error) => {
             console.log("You're not accessing the transactions data properly: ", error);
         })

    }

    render() {
        return(
            <div>
                <h4>Ticket Confirmation</h4>
                <div className="row center" >
                    {this.props.transactions.map((each, index) => {
                    return <Transaction key={index} data={each} />
                    })}
                </div>
            </div>

           
        )
    }
}

export default connect(function(state, props){
    return {
        transactions: state["transactions"] || []
    }
})(Confirmation)