// Original file: proto/index.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ChatRequest as _indexPackage_ChatRequest, ChatRequest__Output as _indexPackage_ChatRequest__Output } from '../indexPackage/ChatRequest';
import type { ChatResponse as _indexPackage_ChatResponse, ChatResponse__Output as _indexPackage_ChatResponse__Output } from '../indexPackage/ChatResponse';
import type { NumReq as _indexPackage_NumReq, NumReq__Output as _indexPackage_NumReq__Output } from '../indexPackage/NumReq';
import type { NumRes as _indexPackage_NumRes, NumRes__Output as _indexPackage_NumRes__Output } from '../indexPackage/NumRes';
import type { PingRequest as _indexPackage_PingRequest, PingRequest__Output as _indexPackage_PingRequest__Output } from '../indexPackage/PingRequest';
import type { PongResponse as _indexPackage_PongResponse, PongResponse__Output as _indexPackage_PongResponse__Output } from '../indexPackage/PongResponse';
import type { TodoRequest as _indexPackage_TodoRequest, TodoRequest__Output as _indexPackage_TodoRequest__Output } from '../indexPackage/TodoRequest';
import type { TodoResponse as _indexPackage_TodoResponse, TodoResponse__Output as _indexPackage_TodoResponse__Output } from '../indexPackage/TodoResponse';

export interface RandomClient extends grpc.Client {
  Chat(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_indexPackage_ChatRequest, _indexPackage_ChatResponse__Output>;
  Chat(options?: grpc.CallOptions): grpc.ClientDuplexStream<_indexPackage_ChatRequest, _indexPackage_ChatResponse__Output>;
  chat(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_indexPackage_ChatRequest, _indexPackage_ChatResponse__Output>;
  chat(options?: grpc.CallOptions): grpc.ClientDuplexStream<_indexPackage_ChatRequest, _indexPackage_ChatResponse__Output>;
  
  PingPong(argument: _indexPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_indexPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _indexPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_indexPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _indexPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_indexPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _indexPackage_PingRequest, callback: grpc.requestCallback<_indexPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _indexPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_indexPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _indexPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_indexPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _indexPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_indexPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _indexPackage_PingRequest, callback: grpc.requestCallback<_indexPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  
  RandNum(argument: _indexPackage_NumReq, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_indexPackage_NumRes__Output>;
  RandNum(argument: _indexPackage_NumReq, options?: grpc.CallOptions): grpc.ClientReadableStream<_indexPackage_NumRes__Output>;
  randNum(argument: _indexPackage_NumReq, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_indexPackage_NumRes__Output>;
  randNum(argument: _indexPackage_NumReq, options?: grpc.CallOptions): grpc.ClientReadableStream<_indexPackage_NumRes__Output>;
  
  TodoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_indexPackage_TodoResponse__Output>): grpc.ClientWritableStream<_indexPackage_TodoRequest>;
  TodoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_indexPackage_TodoResponse__Output>): grpc.ClientWritableStream<_indexPackage_TodoRequest>;
  TodoList(options: grpc.CallOptions, callback: grpc.requestCallback<_indexPackage_TodoResponse__Output>): grpc.ClientWritableStream<_indexPackage_TodoRequest>;
  TodoList(callback: grpc.requestCallback<_indexPackage_TodoResponse__Output>): grpc.ClientWritableStream<_indexPackage_TodoRequest>;
  todoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_indexPackage_TodoResponse__Output>): grpc.ClientWritableStream<_indexPackage_TodoRequest>;
  todoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_indexPackage_TodoResponse__Output>): grpc.ClientWritableStream<_indexPackage_TodoRequest>;
  todoList(options: grpc.CallOptions, callback: grpc.requestCallback<_indexPackage_TodoResponse__Output>): grpc.ClientWritableStream<_indexPackage_TodoRequest>;
  todoList(callback: grpc.requestCallback<_indexPackage_TodoResponse__Output>): grpc.ClientWritableStream<_indexPackage_TodoRequest>;
  
}

export interface RandomHandlers extends grpc.UntypedServiceImplementation {
  Chat: grpc.handleBidiStreamingCall<_indexPackage_ChatRequest__Output, _indexPackage_ChatResponse>;
  
  PingPong: grpc.handleUnaryCall<_indexPackage_PingRequest__Output, _indexPackage_PongResponse>;
  
  RandNum: grpc.handleServerStreamingCall<_indexPackage_NumReq__Output, _indexPackage_NumRes>;
  
  TodoList: grpc.handleClientStreamingCall<_indexPackage_TodoRequest__Output, _indexPackage_TodoResponse>;
  
}

export interface RandomDefinition extends grpc.ServiceDefinition {
  Chat: MethodDefinition<_indexPackage_ChatRequest, _indexPackage_ChatResponse, _indexPackage_ChatRequest__Output, _indexPackage_ChatResponse__Output>
  PingPong: MethodDefinition<_indexPackage_PingRequest, _indexPackage_PongResponse, _indexPackage_PingRequest__Output, _indexPackage_PongResponse__Output>
  RandNum: MethodDefinition<_indexPackage_NumReq, _indexPackage_NumRes, _indexPackage_NumReq__Output, _indexPackage_NumRes__Output>
  TodoList: MethodDefinition<_indexPackage_TodoRequest, _indexPackage_TodoResponse, _indexPackage_TodoRequest__Output, _indexPackage_TodoResponse__Output>
}
