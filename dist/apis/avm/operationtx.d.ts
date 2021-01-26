/**
 * @packageDocumentation
 * @module API-AVM-OperationTx
 */
import { Buffer } from 'buffer/';
import { TransferableOutput } from './outputs';
import { TransferableInput } from './inputs';
import { TransferableOperation } from './ops';
import { KeyChain } from './keychain';
import { Credential } from '../../common/credentials';
import { BaseTx } from './basetx';
import { SerializedEncoding } from '../../utils/serialization';
/**
 * Class representing an unsigned Operation transaction.
 */
export declare class OperationTx extends BaseTx {
    protected _typeName: string;
    protected _typeID: number;
    serialize(encoding?: SerializedEncoding): object;
    deserialize(fields: object, encoding?: SerializedEncoding): void;
    protected numOps: Buffer;
    protected ops: Array<TransferableOperation>;
    /**
     * Returns the id of the [[OperationTx]]
     */
    getTxType: () => number;
    /**
     * Takes a {@link https://github.com/feross/buffer|Buffer} containing an [[OperationTx]], parses it, populates the class, and returns the length of the [[OperationTx]] in bytes.
     *
     * @param bytes A {@link https://github.com/feross/buffer|Buffer} containing a raw [[OperationTx]]
     *
     * @returns The length of the raw [[OperationTx]]
     *
     * @remarks assume not-checksummed
     */
    fromBuffer(bytes: Buffer, offset?: number, codecid?: number): number;
    /**
     * Returns a {@link https://github.com/feross/buffer|Buffer} representation of the [[OperationTx]].
     */
    toBuffer(): Buffer;
    /**
     * Returns an array of [[TransferableOperation]]s in this transaction.
     */
    getOperations(): Array<TransferableOperation>;
    /**
     * Takes the bytes of an [[UnsignedTx]] and returns an array of [[Credential]]s
     *
     * @param msg A Buffer for the [[UnsignedTx]]
     * @param kc An [[KeyChain]] used in signing
     *
     * @returns An array of [[Credential]]s
     */
    sign(msg: Buffer, kc: KeyChain): Array<Credential>;
    clone(): this;
    create(...args: any[]): this;
    /**
     * Class representing an unsigned Operation transaction.
     *
     * @param networkid Optional networkid, [[DefaultNetworkID]]
     * @param blockchainid Optional blockchainid, default Buffer.alloc(32, 16)
     * @param outs Optional array of the [[TransferableOutput]]s
     * @param ins Optional array of the [[TransferableInput]]s
     * @param memo Optional {@link https://github.com/feross/buffer|Buffer} for the memo field
     * @param ops Array of [[Operation]]s used in the transaction
     */
    constructor(networkid?: number, blockchainid?: Buffer, outs?: Array<TransferableOutput>, ins?: Array<TransferableInput>, memo?: Buffer, ops?: Array<TransferableOperation>);
}
//# sourceMappingURL=operationtx.d.ts.map