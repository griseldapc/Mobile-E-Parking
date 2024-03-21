import React from "react";
import '../css/home.css';
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
    return (
        <section className="mx-auto">
            <Navbar />
            <div className="home mx-auto" style={{ backgroundColor: "#F0F2F5", maxWidth: "376px", margin: "auto" }}>
                <div className="d-flex justify-content-start gap-3 algin-items-center">
                    <img src="../../assets/profil.svg"></img>
                    <div>
                        <p style={{ fontSize: "12px", marginBottom: "0" }}>Selamat Bertugas,</p>
                        <h1 style={{ fontSize: "16px", fontWeight: "600" }}>Bambang Sutrisno</h1>
                    </div>
                </div>
                <div className="d-flex justify-content-start gap-5 align-items-center px-3 mt-4" style={{ width: "100%", borderRadius: "10px", border: "1px solid #9ED4D7", height: "84px" }}>
                    <img src="../../assets/Bus.svg"></img>
                    <div>
                        <p style={{ fontSize: "12px", marginBottom: "0" }}>Total pengunjung hari ini</p>
                        <h1 style={{ fontSize: "16px", color: "#268E95", fontWeight: "600" }}>1.200 pengunjung</h1>
                    </div>
                </div>
                <div className="mt-3 d-flex justify-content-between"  style={{gap: "15px"}}>
                    <div className="tk" style={{ border: "1px solid #269544", borderRadius: "10px",width: "100%", backgroundColor: "rgba(81, 180, 108, 0.2)", padding: "22px" }}>
                        <img src="../../assets/Ticket-hijau.svg"></img>
                        <p className="mt-3" style={{ fontSize: "12px", marginBottom: "0" }}>Parkir dengan tiket</p>
                        <h1 style={{ fontSize: "14px", color: "#269544", fontWeight: "650" }}>1.005 Pengunjung</h1>
                    </div>
                    <div className="tk" style={{ border: "1.5px solid #EDD6D6", borderRadius: "10px",width: "100%", backgroundColor: "#F7EEEE", padding: "22px"  }}>
                        <img src="../../assets/Danger.svg"></img>
                        <p className="mt-3" style={{ fontSize: "12px", marginBottom: "0" }}>Parkir tanpa tiket</p>
                        <h1 style={{ fontSize: "14px", color: "#952626", fontWeight: "650" }}>195 Pengunjung</h1>
                    </div>
                </div>
                <div className="mt-3 px-3 py-4" style={{ backgroundColor: "white", borderRadius: "10px", marginBottom: "12vh" }}>
                    <h1 style={{ fontSize: "14px", fontWeight: "600" }}>Grafik Pengunjung</h1>
                    <div className="slide d-flex justify-content-between mt-2 align-items-end">

                        <div className="i-slide" style={{ width: "104px", textAlign: "center" }}>
                            <div className="d-flex justify-content-start gap-2 align-items-end px-3">
                                <div style={{width: "32px"}}>
                                <img src="../../assets/1,2k.svg" style={{ position: "relative", marginLeft: "-12px", zIndex: "2", marginBottom: "-30vh" }}></img>
                                    <p style={{ width: "32px", height: "218px", borderRadius: "10px", backgroundColor: "#269544" }}></p>
                                </div>
                                <p style={{ width: "32px", height: "48px", borderRadius: "10px", backgroundColor: "#952626" }}></p>
                            </div>
                            <p style={{ fontSize: "12px", fontWeight: "500" }}>Januari</p>
                        </div>

                        <div className="i-slide" style={{ width: "104px", textAlign: "center" }}>
                            <div className="d-flex justify-content-start gap-2 align-items-end px-3">
                                <p style={{ width: "32px", height: "155px", borderRadius: "10px", backgroundColor: "#269544" }}></p>
                                <p style={{ width: "32px", height: "93px", borderRadius: "10px", backgroundColor: "#952626" }}></p>
                            </div>
                            <p style={{ fontSize: "12px", fontWeight: "500" }}>Februari</p>
                        </div>

                        <div className="i-slide" style={{ width: "104px", textAlign: "center" }}>
                            <div className="d-flex justify-content-start gap-2 align-items-end px-3">
                                <p style={{ width: "32px", height: "189px", borderRadius: "10px", backgroundColor: "#269544" }}></p>
                                <p style={{ width: "32px", height: "12px", borderRadius: "10px", backgroundColor: "#952626" }}></p>
                            </div>
                            <p style={{ fontSize: "12px", fontWeight: "500" }}>Maret</p>
                        </div>

                        <div className="i-slide" style={{ width: "104px", textAlign: "center" }}>
                            <div className="d-flex justify-content-start gap-2 align-items-end px-3">
                                <p style={{ width: "32px", height: "131px", borderRadius: "10px", backgroundColor: "#269544" }}></p>
                                <p style={{ width: "32px", height: "1px", borderRadius: "10px", backgroundColor: "#952626" }}></p>
                            </div>
                            <p style={{ fontSize: "12px", fontWeight: "500" }}>April</p>
                        </div>

                        <div className="i-slide" style={{ width: "104px", textAlign: "center" }}>
                            <div className="d-flex justify-content-start gap-2 align-items-end px-3">
                                <p style={{ width: "32px", height: "55px", borderRadius: "10px", backgroundColor: "#269544" }}></p>
                                <p style={{ width: "32px", height: "1px", borderRadius: "10px", backgroundColor: "#952626" }}></p>
                            </div>
                            <p style={{ fontSize: "12px", fontWeight: "500" }}>Mei</p>
                        </div>

                        <div className="i-slide" style={{ width: "104px", textAlign: "center" }}>
                            <div className="d-flex justify-content-start gap-2 align-items-end px-3">
                                <p style={{ width: "32px", height: "190px", borderRadius: "10px", backgroundColor: "#269544" }}></p>
                                <p style={{ width: "32px", height: "1px", borderRadius: "10px", backgroundColor: "#952626" }}></p>
                            </div>
                            <p style={{ fontSize: "12px", fontWeight: "500" }}>Juni</p>
                        </div>

                        <div className="i-slide" style={{ width: "104px", textAlign: "center" }}>
                            <div className="d-flex justify-content-start gap-2 align-items-end px-3">
                                <p style={{ width: "32px", height: "216px", borderRadius: "10px", backgroundColor: "#269544" }}></p>
                                <p style={{ width: "32px", height: "116px", borderRadius: "10px", backgroundColor: "#952626" }}></p>
                            </div>
                            <p style={{ fontSize: "12px", fontWeight: "500" }}>Juli</p>
                        </div>

                        <div className="i-slide" style={{ width: "104px", textAlign: "center" }}>
                            <div className="d-flex justify-content-start gap-2 align-items-end px-3">
                                <p style={{ width: "32px", height: "216px", borderRadius: "10px", backgroundColor: "#269544" }}></p>
                                <p style={{ width: "32px", height: "150px", borderRadius: "10px", backgroundColor: "#952626" }}></p>
                            </div>
                            <p style={{ fontSize: "12px", fontWeight: "500" }}>Agustus</p>
                        </div>

                        <div className="i-slide" style={{ width: "104px", textAlign: "center" }}>
                            <div className="d-flex justify-content-start gap-2 align-items-end px-3">
                                <p style={{ width: "32px", height: "27px", borderRadius: "10px", backgroundColor: "#269544" }}></p>
                                <p style={{ width: "32px", height: "177px", borderRadius: "10px", backgroundColor: "#952626" }}></p>
                            </div>
                            <p style={{ fontSize: "12px", fontWeight: "500" }}>September</p>
                        </div>

                        <div className="i-slide" style={{ width: "104px", textAlign: "center" }}>
                            <div className="d-flex justify-content-start gap-2 align-items-end px-3">
                                <p style={{ width: "32px", height: "73px", borderRadius: "10px", backgroundColor: "#269544" }}></p>
                                <p style={{ width: "32px", height: "124px", borderRadius: "10px", backgroundColor: "#952626" }}></p>
                            </div>
                            <p style={{ fontSize: "12px", fontWeight: "500" }}>Oktober</p>
                        </div>

                        <div className="i-slide" style={{ width: "104px", textAlign: "center" }}>
                            <div className="d-flex justify-content-start gap-2 align-items-end px-3">
                                <p style={{ width: "32px", height: "216px", borderRadius: "10px", backgroundColor: "#269544" }}></p>
                                <p style={{ width: "32px", height: "48px", borderRadius: "10px", backgroundColor: "#952626" }}></p>
                            </div>
                            <p style={{ fontSize: "12px", fontWeight: "500" }}>November</p>
                        </div>

                        <div className="i-slide" style={{ width: "104px", textAlign: "center" }}>
                            <div className="d-flex justify-content-start gap-2 align-items-end px-3">
                                <p style={{ width: "32px", height: "76px", borderRadius: "10px", backgroundColor: "#269544" }}></p>
                                <p style={{ width: "32px", height: "48px", borderRadius: "10px", backgroundColor: "#952626" }}></p>
                            </div>
                            <p style={{ fontSize: "12px", fontWeight: "500" }}>Desember</p>
                        </div>

                    </div>
                    <div className="d-flex justify-content-center gap-5">
                        <div className="d-flex justify-content-start gap-1 align-items-center">
                            <p style={{ width: "12px", height: "12px", backgroundColor: "#269544", borderRadius: "100%", marginBottom: "0" }}></p>
                            <p style={{ fontSize: "12px", marginBottom: "0" }}>dengan tiket</p>
                        </div>
                        <div className="d-flex justify-content-start gap-1 align-items-center">
                            <p style={{ width: "12px", height: "12px", backgroundColor: "#952626", borderRadius: "100%", marginBottom: "0" }}></p>
                            <p style={{ fontSize: "12px", marginBottom: "0" }}>tanpa tiket</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>

    )
}