'use server';

import UserServiceClient from "@/functions/UserServiceClient";
const grpc = require('@grpc/grpc-js');

export async function updateEmail(email: string, auth_token: string) {

    const metadata = new grpc.Metadata();
    metadata.add('authorization', 'Bearer ' + auth_token);
    const request = {
        email: email
    }

    return new Promise((resolve, reject) => {
        UserServiceClient.ManageProfile(request, (err: Error | null, response: any) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(response);
            }
        });
    });
}