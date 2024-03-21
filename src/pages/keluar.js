import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Keluar() {
    return (
        <section className="mx-auto" style={{maxWidth: "376px"}}>
            <Navbar/>
            <div className="d-flex justify-content-start align-items-center" style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", paddingBottom: "15px", paddingTop: "15vh", gap: "80px" }}>
            <Link to="/scan">
                  <img src="../../assets/Arrow.svg" style={{ marginLeft: "25px" }}></img>
                </Link>
                <h1 style={{ fontSize: "16px", fontWeight: "600", textAlign: "center", marginBottom: 0 }}>Scan Tiket Keluar</h1>
            </div>
            <div style={{ backgroundColor: "#F0F2F5" }} className="home">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputText" class="form-label" style={{fontSize: "12px"}}>Event</label>
                        <input class="form-control" id="disabledInput" type="text" placeholder="Gathering" disabled style={{fontSize: "14px", backgroundColor: "transparent"}}></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputText" class="form-label" style={{fontSize: "12px", backgroundColor: "transparent"}}>Jam Pelaksanaan</label>
                        <div className="d-flex" style={{position: "relative"}}>
                            <input class="form-control" id="disabledInput" type="text" placeholder="20.00 WIB" disabled style={{fontSize: "14px", backgroundColor: "transparent"}}></input>
                            <img src="../../assets/Clock.svg" style={{ position: "absolute", right: "10px", top: "1.7vh" }}></img>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputText" class="form-label" style={{fontSize: "12px", backgroundColor: "transparent"}}>Jam Masuk</label>
                        <div className="d-flex" style={{position: "relative"}}>
                            <input class="form-control" id="disabledInput" type="text" placeholder="20.10 WIB" disabled style={{fontSize: "14px", backgroundColor: "transparent"}}></input>
                            <img src="../../assets/Alarm.svg" style={{ position: "absolute", right: "10px", top: "1.7vh" }}></img>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputText" class="form-label" style={{fontSize: "12px"}}>Nomor Polisi</label>
                        <input type="text" class="form-control" id="exampleInputText" placeholder="20.10 WIB"  style={{fontSize: "14px", backgroundColor: "transparent"}}></input>
                    </div>
                </form>
                <div>
                    <p style={{ fontSize: "12px", fontWeight: "500", marginBottom: "10px", marginTop: "5vh" }}>Foto Kendaraan dan Pengendara</p>
                    <div className="d-flex justify-content-center" style={{gap: "12px"}}>
                        <img src="../../assets/motor.svg" className="img-konten p-0"></img>
                        <img src="../../assets/pengemudi.svg" className="img-konten p-0"></img>
                    </div>
                </div>
                <Link to="">
                    <button style={{ backgroundColor: "#269544", borderRadius: "10px", width: "100%", height: "39px", fontSize: "12px", fontWeight: "bold", border: "none", color: "white" }} className="mt-5 mb-3">SESUAI</button>
                </Link>
                <Link to="/tidakSesuai">
                    <button style={{ backgroundColor: "#952626", borderRadius: "10px", width: "100%", height: "39px", fontSize: "12px", fontWeight: "bold", border: "none", color: "white" }} className="mb-3">TIDAK SESUAI</button>
                </Link>

            </div>
        </section>
    )
}