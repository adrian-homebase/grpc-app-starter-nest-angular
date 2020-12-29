// package: rpc
// file: rpc.proto

import * as rpc_pb from './rpc_pb'
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'
import { grpc } from '@improbable-eng/grpc-web'

type RpcServiceGetHealth = {
  readonly methodName: string
  readonly service: typeof RpcService
  readonly requestStream: false
  readonly responseStream: false
  readonly requestType: typeof google_protobuf_empty_pb.Empty
  readonly responseType: typeof rpc_pb.HealthResponse
}

export class RpcService {
  static readonly serviceName: string
  static readonly GetHealth: RpcServiceGetHealth
}

export type ServiceError = {
  message: string
  code: number
  metadata: grpc.Metadata
}
export type Status = { details: string; code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void
}
interface ResponseStream<T> {
  cancel(): void
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>
  end(): void
  cancel(): void
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>
  end(): void
  cancel(): void
  on(
    type: 'data',
    handler: (message: ResT) => void,
  ): BidirectionalStream<ReqT, ResT>
  on(
    type: 'end',
    handler: (status?: Status) => void,
  ): BidirectionalStream<ReqT, ResT>
  on(
    type: 'status',
    handler: (status: Status) => void,
  ): BidirectionalStream<ReqT, ResT>
}

export class RpcServiceClient {
  readonly serviceHost: string

  constructor(serviceHost: string, options?: grpc.RpcOptions)
  getHealth(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: rpc_pb.HealthResponse | null,
    ) => void,
  ): UnaryResponse
  getHealth(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (
      error: ServiceError | null,
      responseMessage: rpc_pb.HealthResponse | null,
    ) => void,
  ): UnaryResponse
}
