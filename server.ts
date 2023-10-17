import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import {ProtoGrpcType} from './proto/index'
import { RandomHandlers} from './proto/indexPackage/Random'

const PORT = 8082
const PROTO_FILE = './proto/index.proto'

const packageDefinition = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const gRPCObj = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType
const indexPackage  = gRPCObj.indexPackage

function main(){
    const server = getServer()

    server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
    (err,port) => {
        if(err){
            console.error(err)
            return
        }
        console.log(`Your server as started on port ${PORT}`)
        server.start()
    }
    )
}

function getServer(){
    const server = new grpc.Server()
    server.addService(indexPackage.Random.service, {
        "PingPong" : (req,res) =>{
            console.log(req,res)
        }
    }  as RandomHandlers)

    return server
}

main()
