'use server';
import AuthServiceClient from "@/functions/AuthServiceClient";

interface Data {
    email: string;
    password: string;
}

export async function Login(data: Data) {
    console.log("Called");

    const request = {
        username: null,
        password: data.password,
        phone: null,
        email: data.email,
    };
    console.log(request);


    return new Promise<any>((resolve, reject) => {
        AuthServiceClient.Login(request, (err: Error | null, response: any) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(response);
                resolve(response);
            }
        });
    });
}