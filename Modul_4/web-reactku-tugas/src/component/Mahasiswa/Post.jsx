import React from "react";

const Post = (props) => {
    return (
        <div className="post-artikel">
            <div className="artikel">
                {/* <div className="gambar-artikel">
                    <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel" />
                </div> */}
                <div className="konten-artikel">
                    {/* <div className="judul-artikel">{props.judul}</div>
                    <p className="isi-artikel">{props.isi}</p> */}
                    <p className="isi-artikel"><b>NIM Mahasiswa : </b>{props.nim_mhs}</p>
                    <p className="isi-artikel"><b>Nama Mahasiswa : </b>{props.nama_mhs}</p>
                    <p className="isi-artikel"><b>Alamat Mahasiswa : </b>{props.alamat_mhs}</p>
                    <p className="isi-artikel"><b>Hp. Mahasiswa : </b>{props.hp_mhs}</p>
                    <p className="isi-artikel"><b>Angkatan Mahasiswa : </b>{props.angkatan_mhs}</p>
                    <p className="isi-artikel"><b>Status Mahasiswa : </b>{props.status_mhs}</p>
                    {/* <button className="btn btn-sm btn-warning" onClick={() => props.hapusArtikel(props.idArtikel)}>Hapus</button> */}
                    <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.id_mhs)}>Hapus</button>
                </div>
            </div>
        </div>
    )
}

export default Post;