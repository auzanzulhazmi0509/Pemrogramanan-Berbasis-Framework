import React, { Component } from 'react';
import './Mahasiswa.css';
import Post from '../../component/Mahasiswa/Post';

class Mahasiswa extends Component {
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            NIM: 1,
            nama: "",
            alamat: "",
            hp: "",
            angkatan: 0,
            status: ""
        }
    }

    handleTambahArtikel = (event) => {
        // let fromInsertArtikel = { ...this.state.insertArtikel };
        // let timestamp = new Date().getTime();
        // fromInsertArtikel["id"] = timestamp;
        // fromInsertArtikel[event.target.name] = event.target.value;
        // this.setState({
        //     insertArtikel: fromInsertArtikel
        // })
        let fromInsertMhs = { ...this.state.insertMahasiswa };
        let timestamp = new Date().getTime();
        fromInsertMhs["id"] = timestamp;
        fromInsertMhs[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: fromInsertMhs
        })
    }

    handleTombolSimpan = () => {
        // fetch('http://localhost:3001/posts', {
        fetch('http://localhost:3002/mahasiswa', {
            method: "post", headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(this.state.insertArtikel)
            body: JSON.stringify(this.state.insertMahasiswa)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI()
            })
    }

    ambilDataDariServerAPI = () => {
        // fetch('http://localhost:3001/posts?_sort=id&_order=desc')
        fetch('http://localhost:3002/mahasiswa')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    // listArtikel: jsonHasilAmbilDariAPI
                    listMahasiswa: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }


    handleHapusArtikel = (data) => {
        // fetch(`http://localhost:3001/posts/${data}`, { method: 'DELETE' })
        fetch(`http://localhost:3002/mahasiswa/${data}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    render() {
        return (
            <div className="post-artikel">
                <div className="form pb-2 border-buttom">
                    <div className="for-group row">
                        {/* <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="title" id="title" onChange={this.handleTambahArtikel} />
                        </div> */}
                        <label htmlFor="title" className="col-sm-2 col-form-label">NIM Mahasiswa</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="NIM" id="NIM" onChange={this.handleTambahArtikel} required />
                        </div>
                    </div>
                    {/* <div className="for-group row"> */}
                    {/* <label htmlFor="title" className="col-sm-2 col-form-label" >Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" name="body" id="body" onChange={this.handleTambahArtikel} />
                        </div> */}
                    {/* </div> */}
                    <div className="for-group row">
                        {/* <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="title" id="title" onChange={this.handleTambahArtikel} />
                        </div> */}
                        <label htmlFor="title" className="col-sm-2 col-form-label">Nama Mahasiswa</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="nama" id="nama" onChange={this.handleTambahArtikel} required />
                        </div>
                    </div>
                    <div className="for-group row">
                        {/* <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="title" id="title" onChange={this.handleTambahArtikel} />
                        </div> */}
                        <label htmlFor="title" className="col-sm-2 col-form-label">Alamat Mahasiswa</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="alamat" id="alamat" onChange={this.handleTambahArtikel} required />
                        </div>
                    </div>
                    <div className="for-group row">
                        {/* <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="title" id="title" onChange={this.handleTambahArtikel} />
                        </div> */}
                        <label htmlFor="title" className="col-sm-2 col-form-label">HP. Mahasiswa</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="hp" id="hp" onChange={this.handleTambahArtikel} required />
                        </div>
                    </div>
                    <div className="for-group row">
                        {/* <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="title" id="title" onChange={this.handleTambahArtikel} />
                        </div> */}
                        <label htmlFor="title" className="col-sm-2 col-form-label">Angkatan Mahasiswa</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="angkatan" id="angkatan" onChange={this.handleTambahArtikel} required />
                        </div>
                    </div>
                    <div className="for-group row">
                        {/* <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="title" id="title" onChange={this.handleTambahArtikel} />
                        </div> */}
                        <label htmlFor="title" className="col-sm-2 col-form-label">Status Mahasiswa</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="status" id="status" onChange={this.handleTambahArtikel} required />
                        </div>

                    </div>
                    {/* <button type="submit" className="btn btn-sm btn-primary col-md-12" onClick={this.handleTombolSimpan}>Simpan</button> */}
                    <button type="submit" className="btn btn-sm btn-primary col-md-12" onClick={this.handleTombolSimpan}>Simpan</button>
                    <br />
                    <br />
                </div>
                {/* <h2>Daftar Artikel</h2> */}
                <h2>Daftar Mahasiswa</h2>
                {
                    // this.state.listArtikel.map(artikel => {
                    //     return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}></Post>
                    // })
                    this.state.listMahasiswa.map(artikel => {
                        return <Post key={artikel.id} nim_mhs={artikel.NIM} nama_mhs={artikel.nama} alamat_mhs={artikel.alamat}
                            hp_mhs={artikel.hp} angkatan_mhs={artikel.angkatan}
                            status_mhs={artikel.status} id_mhs={artikel.id}
                            hapusMahasiswa={this.handleHapusArtikel}></Post>
                    })
                }
            </div>
        )
    }
}
export default Mahasiswa;