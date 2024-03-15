'use client';
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";

interface closeAddAddressForm {
    closeAddAddressForm: () => void
}

export default function AddressForm({ closeAddAddressForm }: closeAddAddressForm) {

    const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"];
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState("");

    function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(addressLine1, addressLine2, city, state, pincode);
        //Handle form submit

        setAddressLine1("");
        setAddressLine2("");
        setCity("");
        setState('');
        setPincode('');
        closeAddAddressForm();
    }

    return (
        <>
            <form onSubmit={handleFormSubmit} action="" className=" max-w-md bg-sky-100 py-8 px-12 rounded-xl shadow-xl mb-16">

                {/* Address Line 1 */}
                <div className="mb-5">
                    <label className="font-semibold" htmlFor="addressLine1">Address Line 1</label>
                    <input
                        value={addressLine1}
                        onChange={(e) => setAddressLine1(e.target.value)}
                        type="text" className="mt-1 px-4 py-3 rounded-lg w-full" id="addressLine1" />
                </div>

                {/* Address Line 2 */}
                <div className="mb-5">
                    <label className="font-semibold" htmlFor="addressLine2">Address Line 2 (Optional)</label>
                    <input
                        value={addressLine2}
                        onChange={(e) => setAddressLine2(e.target.value)}
                        type="text" className="mt-1 px-4 py-3 rounded-lg w-full" id="addressLine2" />
                </div>

                {/*City */}
                <div className="mb-5">
                    <label className="font-semibold" htmlFor="city">City</label>
                    <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        type="text" className="mt-1 px-4 py-3 rounded-lg w-full" id="city" />
                </div>

                {/*State */}
                <div className="mb-5">
                    <label className="font-semibold" htmlFor="state">State</label>
                    <select id="selectOption" value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="mt-1 px-4 py-3 rounded-lg w-full bg-white">
                        <option value="">Select an option</option>
                        {states.map((state, index) => {
                            return (
                                <option key={index} value={state}>{state}</option>
                            )
                        })}
                    </select>
                </div>

                {/*Pin-code */}
                <div className="mb-5">
                    <label className="font-semibold" htmlFor="city">ZIP/postcode</label>
                    <input
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        type="text" className="mt-1 px-4 py-3 rounded-lg w-1/2" id="city" />
                </div>

                {/* Buttons  */}
                <div className="flex mt-8">
                    <button type="submit" className="btn btn-primary">SAVE</button>
                    <button type="button" className="btn" onClick={closeAddAddressForm} >CANCEL</button>
                </div>
            </form>

            {/* <form className="addAddressForm">
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        < input className="form-control" type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">10-digit mobile number</label>
                        < input className="form-control" type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="pincode">Pincode</label>
                        < input className="form-control" type="text" id="pincode" name="pincode" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="locality">Locality</label>
                        < input className="form-control" type="text" id="locality" name="locality" required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address (Area and Street)</label>
                    <textarea className="form-control" id="address" name="address" rows={4} required></textarea>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="city">City/District/Town</label>
                        < input className="form-control" type="text" id="city" name="city" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <select id="state" name="state" required className="form-control">
                            <option value="" selected disabled>--Select State--</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="landmark">Landmark (Optional)</label>
                        < input className="form-control" type="text" id="landmark" name="landmark" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="alt-phone">Alternate Phone (Optional)</label>
                        < input className="form-control" type="tel" id="alt-phone" name="alt-phone" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="address-type">Address Type</label><br />
                        <label>< input type="radio" name="address-type" value="home" required /> Home</label>
                        <label>< input type="radio" name="address-type" value="work" required /> Work</label>
                    </div>
                </div>
                <div className="form-buttons">
                    <button type="submit" className="btn btn-primary">SAVE</button>
                    <button type="button" className="btn" onClick={closeAddAddressForm} >CANCEL</button>
                </div>
            </form> */}
        </>
    )
}