import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <section className="mx-auto" style={{ position: "fixed", bottom: 0, left: 0, right: 0, maxWidth: "376px"}}>
            <img src="../../assets/ft.svg" alt="Footer Background" className="ft mx-auto" style={{width: "100%"}}></img>
            <div className="d-flex align-items-start justify-content-around" style={{ marginTop: "-62px" }}>
                <img src="../../assets/ho.svg" alt="Home" className="ho"></img>
                <Link to="/scan">
                    <img src="../../assets/Scan.svg" alt="Scan" style={{ width: "85%", marginTop: "-13px", marginLeft: "5px" }} className="sc"></img>
                </Link>
                <img src="../../assets/us.svg" alt="Us" className="ho"></img>
            </div>
        </section>
    )
}
