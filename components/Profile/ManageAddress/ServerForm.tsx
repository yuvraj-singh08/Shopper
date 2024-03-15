
interface closeAddAddressForm {
    closeAddAddressForm: () => void
}
export default function ServerForm({ closeAddAddressForm }: closeAddAddressForm) {

    const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"];

    return (
        <>
            <form action="" className=" max-w-md bg-sky-100 py-8 px-12 rounded-xl shadow-xl mb-16">

                {/* Address Line 1 */}
                <div className="mb-5">
                    <label className="font-semibold" htmlFor="addressLine1">Address Line 1</label>
                    <input
                        name="line1"
                        type="text" className="mt-1 px-4 py-3 rounded-lg w-full" id="addressLine1" />
                </div>

                {/* Address Line 2 */}
                <div className="mb-5">
                    <label className="font-semibold" htmlFor="addressLine2">Address Line 2 (Optional)</label>
                    <input
                        name="line2"
                        type="text" className="mt-1 px-4 py-3 rounded-lg w-full" id="addressLine2" />
                </div>

                {/*City */}
                <div className="mb-5">
                    <label className="font-semibold" htmlFor="city">City</label>
                    <input
                        name="city"
                        type="text" className="mt-1 px-4 py-3 rounded-lg w-full" id="city" />
                </div>

                {/*State */}
                <div className="mb-5">
                    <label className="font-semibold" htmlFor="state">State</label>
                    <select id="selectOption"
                        name="state"
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
                        name="pincode"
                        type="text" className="mt-1 px-4 py-3 rounded-lg w-1/2" id="city" />
                </div>

                {/* Buttons  */}
                <div className="flex mt-8">
                    <button type="submit" className="btn btn-primary">SAVE</button>
                    <button type="button" className="btn" onClick={closeAddAddressForm} >CANCEL</button>
                </div>
            </form>
        </>
    )
}