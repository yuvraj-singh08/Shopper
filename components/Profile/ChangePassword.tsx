"use client";

import React, { useState } from "react";
import "@/components/Profile/Profile.css";
import { FAQ, faqs } from "@/components/Profile/FAQ";
import { usePathname } from "next/navigation";

export default function ChangePassword() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'oldPassword') {
        setOldPassword(value);
        } else if (name === 'newPassword') {
        setNewPassword(value);
        } else if (name === 'confirmPassword') {
        setConfirmPassword(value);
        }
    };

    const changePassword = (oldPassword: string, newPassword: string) => {
        console.log('Changing password from', oldPassword, 'to', newPassword);
    };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
        setError('Passwords do not match');
        return;
        }
        try {
        await changePassword(oldPassword, newPassword);
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setError('');
        alert('Password changed successfully');
        } catch (error: any) {
        setError(error.message);
        }
    };
    
    return (
        <div>
            <div className="text-bold text-2xl my-4">Change Password</div>
            <hr />
            <div className="flex flex-start personal-container">
                <div className="text-gray-500 desc">
                    Enter your old and new password below to change your password.
                </div>
                <div className="personal-form">
                    <div className="flex flex-col mb-5">
                        <label htmlFor="oldPassword">Old Password</label>
                        <input
                            type="password"
                            id="oldPassword"
                            name="oldPassword"
                            value={oldPassword}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter your old password"
                        />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="newPassword">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value={newPassword}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter your new password"
                        />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Confirm your new password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Change Password</button>
                    {error && <p>{error}</p>}
                </div>
            </div>
            <FAQ faqs={faqs} />
        </div>
    );
    }    