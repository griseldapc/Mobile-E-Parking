import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function ManualKeluar() {
    return (
        <section className="mx-auto" style={{ maxWidth: "376px" }}>
            <Navbar />
            <div className="tas d-flex justify-content-start align-items-center" style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", paddingBottom: "15px", paddingTop: "70px" }}>
                <Link to="/manual">
                    <img src="../../assets/Arrow.svg" style={{ marginLeft: "25px" }}></img>
                </Link>
                <h1 style={{ fontSize: "16px", fontWeight: "600",textAlign: "center", marginBottom: 0}}>Tambahkan Tiket Manual</h1>
            </div>
            <div style={{ backgroundColor: "#F0F2F5", height: "78vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }} className="home">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputText" className="form-label" style={{ fontSize: "12px" }}>Nomor Polisi</label>
                        <input type="text" className="form-control" id="exampleInputText" placeholder="Masukan Nomor Polisi" style={{ fontSize: "14px", color: "#CDD0D3", fontWeight: "300" }} />
                    </div>
                </form>
                <Link to="/sukses">
                    <button style={{ backgroundColor: "#269544", borderRadius: "10px", width: "100%", height: "39px", fontSize: "12px", fontWeight: "bold", border: "none", color: "white" }} className="mt-5">KIRIM</button>
                </Link>
            </div>

        </section>
    )
}