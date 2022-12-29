import React, {Component, useState} from 'react';

const Register=() =>{
    const [login,setLogin] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const sendData = (event) =>
    {
        event.preventDefault()
        const data = {
            login,password,name,email
        }
        console.log(data)
    }

    return (
        <div className="registerForm">
        <form onSubmit={sendData}>
            <h3>Zarejestruj się </h3>
            <div className="mb-3">
                <label>Login</label>
                <input
                    type="login"
                    className="form-control"
                    placeholder="Wpisz login"
                    value={login}
                    onChange={(event)=>setLogin(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Nazwa</label>
                <input
                    type="name"
                    className="form-control"
                    placeholder="Wpisz nazwe "
                    value={name}
                    onChange={(event)=>setName(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Wpisz email"
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Hasło</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Wpisz hasło"
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary"> Zarejestruj się</button>
            </div>
        </form>
        </div>
    )
}
export default Register;
