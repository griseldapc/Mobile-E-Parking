import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

export default function Manual() {
    return (
        <section className="mx-auto" style={{maxWidth: "376px", maxHeight: "100vh"}}>
            <Navbar />
            <div>
                <div className="tas d-flex justify-content-start align-items-center" style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", paddingBottom: "15px", paddingTop: "70px" }}>
                    <Link to="/scan">
                     <img src="../../assets/Arrow.svg" style={{ marginLeft: "25px" }}></img>
                    </Link>
                    <h1 style={{ fontSize: "16px", fontWeight: "600",textAlign: "center", marginBottom: 0}}>Tambahkan Tiket Manual</h1>
                </div>
                <div className="home mt-5 mx-auto" style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "30px" }}>
                    <Link to="/manualMasuk" className="mx-auto">
                        <img src="../../assets/Ticket-masuk.svg" className="mg mx-auto" style={{width: "100%"}}></img>
                    </Link>
                    <Link to="/manualKeluar" className="mx-auto">
                        <img src="../../assets/Ticket-keluar.svg" className="mg mx-auto"  style={{width: "100%"}}></img>
                    </Link>

                </div>
            </div>

        </section>
    )
}