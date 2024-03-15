// "actions.ts" file
'use server';
import { RegisterUserRequest } from '@/grpc_interfaces/user/auth_pb';
import AuthServiceClient from "@/functions/AuthServiceClient";
import { number } from 'zod';

interface RegisterData {
    username: string;
    contact: string;
    password: string;
    equals?: any;
    clone?: any;
    fromBinary?: any;
    fromJson?: any;
}

interface Request {
    username: string;
    password: string;
    email: string | null;
    phone: {
        countryCode: number;
        number: string;
    } | null;
}

function isEmail(inputString: string) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(inputString);
}

function isPhoneNumber(inputString: string) {
    // This regex pattern is a simplified version to match common phone number formats.
    // You might need to adjust it based on the specific formats you expect.
    const phonePattern = /^\+?(\d{1,3})?[.-]?\(?\d{3}\)?[.-]?\d{3}[.-]?\d{4}$/;
    return phonePattern.test(inputString);
}

export async function RegisterUser(data: RegisterData) {
    console.log("Registering user:", data);

    const request: Request = {
        username: data.username,
        email: null,
        phone: null,
        password: data.password,
    }

    if (isEmail(data.contact)) {
        request.email = data.contact;
    }
    else {
        console.log("Phone");
        request.phone = {
            countryCode: 91,
            number: data.contact
        }

    }

    // const request: RegisterUserRequest = {
    //     username: data.username,
    //     email: data.email,
    //     password: data.password.password,
    //     phone: {
    //         countryCode: data.phone.country_code,
    //         number:(data.phone.number), 
    //     },
    // };

    return new Promise<any>((resolve, reject) => {
        console.log("request")
        console.log(request)
        AuthServiceClient.RegisterUser(request, (err: Error | null, response: any) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(response);
            }
        });
    });
}