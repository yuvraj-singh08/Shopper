'use client';
import React, { FormEvent, useEffect, useState } from "react";
import { updateEmail } from "./action";

export default function EmailForm() {

    const [isEmailDisabled, setIsEmailDisabled] = useState(true)
    const [email, setEmail] = useState('');
    const [auth_token, setAuthToken] = useState('');

    useEffect(() => {
        setEmail(localStorage.getItem('email') || '');
        setAuthToken(localStorage.getItem('auth_token') || '');
    }, []);


    async function emailSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const response = await updateEmail(email, auth_token);
        console.log(response);
        setIsEmailDisabled(true);
        //Submit form
    }

    return (
        <>
            <div className="text-xl group-heading">Email Address</div>
            <hr />
            <div className="flex flex-start personal-container">
                <div className="text-gray-500 desc">
                    Assertively utilize adaptive customer service for future-proof platforms. Completely drive optimal markets.
                </div>
                <form className="personal-form" onSubmit={emailSubmit} >
                    <div className="input-group form-group">
                        <label htmlFor="email">E-Mail Address</label>
                        <input type="email" className="form-control" id="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            disabled={isEmailDisabled}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit"> Save </button>
                        <button className="link-edit" type="button"
                            onClick={(e) => {
                                setIsEmailDisabled(false)
                            }}
                            style={{
                                display: isEmailDisabled ? "inline-block" : "none"
                            }}>
                            Edit
                        </button>
                        <button className="btn" type="button"
                            onClick={() => {
                                setIsEmailDisabled(true)
                            }}
                            style={{
                                display: isEmailDisabled ? "none" : "inline-block"
                            }}>
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}