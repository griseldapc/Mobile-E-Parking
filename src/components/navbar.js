import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar (){
    return(
        <section className="mx-auto navbar px-4 py-3 d-flex justify-content-between align-items-end" style={{backgroundColor: "white", position: "fixed", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", left: 0, right: 0, maxWidth: "376px", zIndex: 1}}>
            <h1 style={{fontSize: "15px", marginBottom: 0}}>14:42</h1>
            <div className="d-flex justify-content-end gap-1">
                <img src="../../assets/Connection.svg" alt="Connection"></img>
                <img src="../../assets/Wifi.svg" alt="Wifi"></img>
                <img src="../../assets/Battery.svg" alt="Battery"></img>
            </div>
        </section>
    )
}
