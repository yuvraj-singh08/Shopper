// const grpc = require('@grpc/grpc-js')
// const protoLoader = require('@grpc/proto-loader')
// import { join } from 'path'
// import { fileURLToPath } from 'url';

// const __dirname = fileURLToPath(import.meta.url).split('/').slice(0, -1).join('/');
// const AUTH_PROTO_PATH = join(__dirname, '../protofiles/user/auth.proto');
// const packageDefination = protoLoader.loadSync(AUTH_PROTO_PATH, {
//     keepCase: true,
//     longs: String,
//     enums: String,
//     defaults: true,
//     oneofs: true,
// });


// const proto = grpc.loadPackageDefinition(packageDefination);
// const AuthServiceClient = new proto.user.AuthService(
//     'localhost:8080',
//     grpc.credentials.createInsecure()
// )

// export default AuthServiceClient

const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
import { join } from 'path'
import { fileURLToPath } from 'url';
import { RegisterUserRequest } from '@/grpc_interfaces/user/auth_pb';

const __dirname = fileURLToPath(import.meta.url).split('/').slice(0, -1).join('/');
const AUTH_PROTO_PATH = join(__dirname, '../protofiles/user/auth.proto');
const packageDefinition = protoLoader.loadSync(AUTH_PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const proto = grpc.loadPackageDefinition(packageDefinition);
const authService = new proto.user.AuthService(
    'localhost:8080',
    grpc.credentials.createInsecure()
);

export const AuthServiceClient = {
    Login: (request: any, callback: any) => authService.Login(request, callback),
    RefreshToken: (request: any, callback: any) => authService.RefreshToken(request, callback),
    ForgotPassword: (request: any, callback: any) => authService.ForgotPassword(request, callback),
    RegisterUser: (request: any, callback: any) => authService.RegisterUser(request, callback),
};

export default AuthServiceClient;
