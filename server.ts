import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import {ProtoGrpcType} from './proto/index'
import { RandomHandlers} from './proto/indexPackage/Random'
import { TodoResponse } from './proto/indexPackage/TodoResponse'
import { TodoRequest } from './proto/indexPackage/TodoRequest'
import { ChatRequest } from './proto/indexPackage/ChatRequest'
import { ChatResponse } from './proto/indexPackage/ChatResponse'

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
const callObjByUserName = new Map<string, grpc.ServerDuplexStream<ChatRequest, ChatResponse>>()


function getServer(){
    const server = new grpc.Server()
    server.addService(indexPackage.Random.service, {
        PingPong : (req,res) =>{
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
        },
        Chat: (call) => {
            call.on("data", (req) => {
                const username = call.metadata.get('username')[0] as string 
                const msg = req.message
                console.log(username, req.message)
                for(let[user, userCall] of callObjByUserName){
                    if(username !== user){
                        userCall.write({
                            username: username, 
                            message: msg
                        })
                    }
                }

                if(callObjByUserName.get(username) === undefined){
                    callObjByUserName.set(username,call)
                }
            })

            call.on("end", () => {
                const username = call.metadata.get('username')[0] as string
                callObjByUserName.delete(username)
                for(let[user, userCall] of callObjByUserName){
                        userCall.write({
                            username: username, 
                            message: "left the chat"
                        })

                }
                console.log(`${username} is ending their chat conversation`)
                call.write({
                    username: "Server",
                    message: `See you later ${username}`
                })

                call.end()
            })
        
        }
    }  as RandomHandlers)

    return server
}

main()
