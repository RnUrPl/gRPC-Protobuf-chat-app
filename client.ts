import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import {ProtoGrpcType} from './proto/index'
//  

const PORT = 8082
const PROTO_FILE = './proto/index.proto'

const packageDefinition = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const gRPCObj = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType

const client  = new gRPCObj.indexPackage.Random(
    `0.0.0.0:${PORT}`, grpc.credentials.createInsecure()
)

const deadLine = new Date()
deadLine.setSeconds(deadLine.getSeconds() + 5)
client.waitForReady(deadLine, (err) => {
    if(err) {
        console.error(err)
        return
    }
    onClientReady()

})

function onClientReady() {
    // client.PingPong({message: "Ping"}, (err,result) => {
    //     if(err){
    //         console.error(err)
    //         return 
    //     }
    //     console.log(result)
    // })

    // const stream = client.RandNum({maxVal: 85})
    // stream.on("data", (chunk) => {
    //     console.log(chunk)
    // })
    // stream.on("end", () => {
    //     console.log("Communication ended")
    // })

    const stream = client.TodoList((err, result) => {
        if(err){
            console.log(err)
            return
        }
        console.log(result)
    })
    stream.write({todo: "Walk with the dog", status: "Never"})
    stream.write({todo: "Feed The dog", status: "Doing"})
    stream.write({todo: "Get the job", status: "Impossible"})
    stream.write({todo: "Rizz up", status: "Done"})
    stream.end()
}