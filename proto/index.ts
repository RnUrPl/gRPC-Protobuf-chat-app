import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { RandomClient as _indexPackage_RandomClient, RandomDefinition as _indexPackage_RandomDefinition } from './indexPackage/Random';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  indexPackage: {
    ChatRequest: MessageTypeDefinition
    ChatResponse: MessageTypeDefinition
    NumReq: MessageTypeDefinition
    NumRes: MessageTypeDefinition
    PingRequest: MessageTypeDefinition
    PongResponse: MessageTypeDefinition
    Random: SubtypeConstructor<typeof grpc.Client, _indexPackage_RandomClient> & { service: _indexPackage_RandomDefinition }
    TodoRequest: MessageTypeDefinition
    TodoResponse: MessageTypeDefinition
  }
}

