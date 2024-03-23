import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import '../css/home.css';

export default function TidakSesuai() {
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
        <section className="mx-auto" style={{maxWidth: "376px"}}>
            <Navbar/>
            <div className="hid d-flex justify-content-start align-items-center" style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", paddingBottom: "15px", paddingTop: "70px" }}>
            <Link to="/keluar">
                  <img src="../../assets/Arrow.svg" style={{ marginLeft: "25px" }}></img>
                </Link>
                <h1 style={{ fontSize: "16px", fontWeight: "600", textAlign: "center", marginBottom: 0}}>Tidak Sesuai</h1>
            </div>
            <div style={{ backgroundColor: "#F0F2F5", height: "100vh" }} className="home">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputText" class="form-label" style={{fontSize: "12px", fontWeight: "700"}}>Masukan Nomor Polisi</label>
                        <input type="text" class="form-control" id="exampleInputText" style={{fontSize: "14px"}}></input>
                    </div>
                </form>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
                    <div>
                    <p style={{ fontSize: "12px", fontWeight: "500", marginBottom: "10px", marginTop: "0" }}>Foto Pengambil dan Scan KTP</p>
                    <div className="ktp d-flex justify-content-center p-3" style={{backgroundColor: "white", borderRadius: "10px", width: "auto", height: "auto", gap: "15px"}}>
                        <div className="doc" style={{border: "2px solid #606060", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", position: "relative", overflow: "hidden", padding: "10px"  }}>
                        <label htmlFor="upload-input-1" className='upload-input' style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}>
                                {previewImage1 ? <img src={previewImage1} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : null}
                                {!previewImage1 && (
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", padding: "15px" }}>
                                        <img src="../../assets/Camera.svg" alt="Camera" />
                                        <p style={{ fontSize: "12px", color: "#606060", fontWeight: "400", textAlign: "center" }}>Ambil foto Pengambil</p>
                                    </div>
                                )}
                            </label>
                            <input type="file" id="upload-input-1" className='upload-input' style={{ display: "none" }} onChange={handleImageChange1} />
                        </div>
                        <div className="doc" style={{border: "2px solid #606060", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", position: "relative", overflow: "hidden", padding: "10px"  }}>
                        <label htmlFor="upload-input-2" className='upload-input' style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}>
                                {previewImage2 ? <img src={previewImage2} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : null}
                                {!previewImage2 && (
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", padding: "15px" }}>
                                        <img src="../../assets/Camera.svg" alt="Camera" />
                                        <p style={{ fontSize: "12px", color: "#606060", fontWeight: "400", textAlign: "center", width: "auto" }}>Ambil foto Scan KTP</p>
                                    </div>
                                )}
                            </label>
                            <input type="file" id="upload-input-2" className='upload-input' style={{ display: "none" }} onChange={handleImageChange2} />
                        </div>
                    </div>
                </div>
                <Link to="/sukses">
                    <button style={{ backgroundColor: "#269544", borderRadius: "10px", width: "100%", height: "39px", fontSize: "12px", fontWeight: "bold", border: "none", color: "white", marginBottom: "20px" }} className="">KIRIM</button>
                </Link>
                </div>
                

            </div>
        </section>
    )
}