const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
import { join } from 'path'
import { fileURLToPath } from 'url';

const dirname = fileURLToPath(import.meta.url).split('/').slice(0, -1).join('/');
const USER_PROTO_PATH = join(dirname, '../protofiles/user/user.proto');
const packageDefination = protoLoader.loadSync(USER_PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});


const proto = grpc.loadPackageDefinition(packageDefination);
const UserServiceClient = new proto.user.UserService(
    'localhost:8080',
    grpc.credentials.createInsecure()
)

export default UserServiceClient