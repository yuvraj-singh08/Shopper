import { revalidatePath } from "next/cache";

interface Address{
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: number;
}

export async function addAddress(
    prevState: {
        message: string;
    },
    formData: FormData,
) {
    console.log(formData)
}