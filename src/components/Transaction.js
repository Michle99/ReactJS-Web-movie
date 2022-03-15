
export default function Transaction(props) {
    return(
        
        <div className="card col-md-3" style={{ width: "16rem" }}>
            <img style={{ height: "15rem" }} src={props.data.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">${props.data.price}</p>
            </div>
        </div>
    );
}