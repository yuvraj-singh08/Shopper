'use client';
import React, { useState } from "react";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        fetch('http://localhost:3000/api/registerUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                phone: {
                    number: number,
                    country_code: code
                },
                password: password
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }

    return (
        <>
            <div className="mx-auto">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                    <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="number" />
                    <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="code" />
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}
