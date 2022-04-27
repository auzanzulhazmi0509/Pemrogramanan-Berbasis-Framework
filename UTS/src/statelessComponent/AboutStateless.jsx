import React from 'react';
import '../css/style.css';
import images_biodata from '../images/myImages.JPG';

const AboutStatelsss = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="main_container">
                    <div className="item">
                        <table border="1">
                            <thead>
                                <tr>
                                    <th style={{ width: 400, textAlign: "center" }}>Images</th>
                                    <th colSpan="2" style={{ textAlign: "center" }}>Biodata</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan="9"><img src={images_biodata} className="image_biodata"></img></td>
                                </tr>
                                <tr>
                                    <td>Nama : Auzan Ihtifazhuddin F</td>
                                </tr>
                                <tr>
                                    <td>Tempat, Tanggal Lahir : Klaten, 05 - September - 2000</td>
                                </tr>
                                <tr>
                                    <td>Jenis Kelamin : Laki - laki</td>
                                </tr>
                                <tr>
                                    <td>Alamat : Jl. Sudimoro no.365, Malang</td>
                                </tr>
                                <tr>
                                    <td>Agama : Islam</td>
                                </tr>
                                <tr>
                                    <td>Status : Mahasiswa</td>
                                </tr>
                                <tr>
                                    <td>Perguruan Tinggi : Politeknik Negeri Malang</td>
                                </tr>
                                <tr>
                                    <td>Hobi : Olahraga</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutStatelsss;