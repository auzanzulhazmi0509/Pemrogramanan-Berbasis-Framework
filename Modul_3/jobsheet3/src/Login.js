import React from 'react';
import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <div className="row">
                <form action="POST">
                    <div className="col-md-12">
                        <div className="card">
                            <div class="container">
                                <h1 className="text-h3">Form Login</h1>
                                <h3 className="text-header">Tugas Pertemuan Ketiga</h3>
                                <div class="form-group">
                                    <span className="text-username">Usename</span>&emsp;
                                <input type="text" name="username" placeholder="Masukkan Username"></input>
                                </div>
                                <div class="form-group">
                                    <span className="text-username">Password</span>&emsp;
                                <input type="password" name="password" placeholder="Masukkan Password"></input>
                                </div>
                                <div class="form-group">
                                    <button class="button button1">Login</button>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="remember"></input>&nbsp;
                                <label className="text-rmem">Remember Me</label>
                                </div>
                                <div class="form-group">
                                    <button class="button button2">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;