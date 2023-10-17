import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import {ProtoGrpcType} from './proto/index'
import { RandomHandlers} from './proto/indexPackage/Random'
import { TodoResponse } from './proto/indexPackage/TodoResponse'
import { TodoRequest } from './proto/indexPackage/TodoRequest'

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

const todoList: TodoResponse = {todos:[]}
function getServer(){
    const server = new grpc.Server()
    server.addService(indexPackage.Random.service, {
        "PingPong" : (req,res) =>{
            console.log(req.request)
            res(null, {message: "Pong"})
        },
        RandNum: (call) => {
            const { maxVal = 10} = call.request
            console.log({maxVal})

            let runCount = 0
            const id = setInterval(() => {
                runCount = ++runCount
                call.write({num: Math.floor(Math.random() * maxVal )})

                if(runCount >= 10){
                    clearInterval(id)
                    call.end()
                }
            },500)

        }, 
        TodoList: (call, callback) => {
             call.on("data", (chunk: TodoRequest) => {
                todoList.todos?.push(chunk)
                console.log(chunk)
             })

             call.on("end", () => {
                callback(null,{todos: todoList.todos})
             })
        }
    }  as RandomHandlers)

    return server
}

main()
