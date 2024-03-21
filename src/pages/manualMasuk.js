import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function ManualMasuk() {
    const [previewImage1, setPreviewImage1] = useState(null);
    const [previewImage2, setPreviewImage2] = useState(null);

    const handleImageChange1 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage1(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageChange2 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage2(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <section className="mx-auto" style={{ maxWidth: "376px" }}>
            <Navbar />
            <div className="tas d-flex justify-content-start align-items-center" style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", paddingBottom: "15px", paddingTop: "15vh" }}>
                <Link to="/manual">
                  <img src="../../assets/Arrow.svg" style={{ marginLeft: "25px" }}></img>
                </Link>
                  
                    <h1 style={{ fontSize: "16px", fontWeight: "600", textAlign: "center", marginBottom: 0 }}>Tambahkan Tiket Manual</h1>
                </div>
            <div style={{ backgroundColor: "#F0F2F5" }} className="home">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputText" class="form-label" style={{ fontSize: "12px" }}>Event</label>
                        <div className="d-flex" style={{ position: "relative" }}>
                            <input class="form-control" id="exampleInputText" type="text" placeholder="Pilih Event" style={{ fontSize: "14px" }}></input>
                            <img src="../../assets/arrow-down.svg" style={{ position: "absolute", right: "10px", top: "1.7vh" }}></img>
                        </div>
                    </div>
                    <div class="mb-3" >
                        <label for="exampleInputText" class="form-label" style={{ fontSize: "12px" }}>Jam Pelaksanaan</label>
                        <div className="d-flex" style={{ position: "relative" }}>
                            <input class="form-control" id="disabledInput" type="text" placeholder="--.-- WIB"  style={{ fontSize: "14px", backgroundColor: "transparent" }}></input>
                            <img src="../../assets/Clock.svg" style={{ position: "absolute", right: "10px", top: "1.7vh" }}></img>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputText" class="form-label" style={{ fontSize: "12px" }}>Jam Masuk</label>
                        <div className="d-flex" style={{ position: "relative" }}>
                            <input class="form-control" id="disabledInput" type="text" placeholder="--.-- WIB" style={{ fontSize: "14px" , backgroundColor: "transparent"}}></input>
                            <img src="../../assets/Alarm.svg" style={{ position: "absolute", right: "10px", top: "1.7vh" }}></img>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputText" class="form-label" style={{ fontSize: "12px" }}>Nomor Polisi</label>
                        <input type="text" class="form-control" id="exampleInputText" placeholder="Masukan Nomor Polisi" style={{ fontSize: "14px"}}></input>
                    </div>
                </form>
                <div>
                    <p style={{ fontSize: "12px", fontWeight: "500", marginBottom: "10px", marginTop: "5vh" }}>Foto Kendaraan dan Pengendara</p>
                    <div className="d-flex justify-content-between">
                        <div className="ij" style={{ borderRadius: "10px", border: "1px solid #269544", backgroundColor: "rgba(81, 180, 108, 0.2)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", position: "relative", overflow: "hidden" }}>
                            <label htmlFor="upload-input-1" className='upload-input' style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}>
                                {previewImage1 ? <img src={previewImage1} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : null}
                                {!previewImage1 && (
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                                        <img src="../../assets/Camera.svg" alt="Camera" />
                                        <p style={{ fontSize: "12px", color: "#269544", fontWeight: "500" }}>Ambil Foto Kendaraan</p>
                                    </div>
                                )}
                            </label>
                            <input type="file" id="upload-input-1" className='upload-input' style={{ display: "none" }} onChange={handleImageChange1} />
                        </div>
                        <div className="ij" style={{ borderRadius: "10px", border: "1px solid #269544", backgroundColor: "rgba(81, 180, 108, 0.2)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", position: "relative", overflow: "hidden" }}>
                            <label htmlFor="upload-input-2" className='upload-input' style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}>
                                {previewImage2 ? <img src={previewImage2} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : null}
                                {!previewImage2 && (
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                                        <img src="../../assets/Camera.svg" alt="Camera" />
                                        <p style={{ fontSize: "12px", color: "#269544", fontWeight: "500" }}>Ambil Foto Pengendara</p>
                                    </div>
                                )}
                            </label>
                            <input type="file" id="upload-input-2" className='upload-input' style={{ display: "none" }} onChange={handleImageChange2} />
                        </div>
                    </div>
                </div>
                <Link to="/suksesKeluar">
                    <button style={{ backgroundColor: "#269544", borderRadius: "10px", width: "100%", height: "39px", fontSize: "12px", fontWeight: "bold", border: "none", color: "white" }} className="mt-5 mb-3">KIRIM</button>
                </Link>

            </div>
        </section>
    )
}