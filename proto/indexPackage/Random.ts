// Original file: proto/index.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { PingRequest as _indexPackage_PingRequest, PingRequest__Output as _indexPackage_PingRequest__Output } from '../indexPackage/PingRequest';
import type { PongResponse as _indexPackage_PongResponse, PongResponse__Output as _indexPackage_PongResponse__Output } from '../indexPackage/PongResponse';

export interface RandomClient extends grpc.Client {
  PingPong(argument: _indexPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_indexPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _indexPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_indexPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _indexPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_indexPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _indexPackage_PingRequest, callback: grpc.requestCallback<_indexPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _indexPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_indexPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _indexPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_indexPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _indexPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_indexPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _indexPackage_PingRequest, callback: grpc.requestCallback<_indexPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface RandomHandlers extends grpc.UntypedServiceImplementation {
  PingPong: grpc.handleUnaryCall<_indexPackage_PingRequest__Output, _indexPackage_PongResponse>;
  
}

export interface RandomDefinition extends grpc.ServiceDefinition {
  PingPong: MethodDefinition<_indexPackage_PingRequest, _indexPackage_PongResponse, _indexPackage_PingRequest__Output, _indexPackage_PongResponse__Output>
}
