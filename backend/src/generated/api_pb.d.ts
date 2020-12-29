// package: api
// file: api.proto

import * as jspb from 'google-protobuf'

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Empty.AsObject
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: Empty,
    writer: jspb.BinaryWriter,
  ): void
  static deserializeBinary(bytes: Uint8Array): Empty
  static deserializeBinaryFromReader(
    message: Empty,
    reader: jspb.BinaryReader,
  ): Empty
}

export namespace Empty {
  export type AsObject = {}
}

export class StatusResponse extends jspb.Message {
  getMessage(): string
  setMessage(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): StatusResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: StatusResponse,
  ): StatusResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: StatusResponse,
    writer: jspb.BinaryWriter,
  ): void
  static deserializeBinary(bytes: Uint8Array): StatusResponse
  static deserializeBinaryFromReader(
    message: StatusResponse,
    reader: jspb.BinaryReader,
  ): StatusResponse
}

export namespace StatusResponse {
  export type AsObject = {
    message: string
  }
}
