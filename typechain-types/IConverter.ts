/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IConverterInterface extends utils.Interface {
  contractName: "IConverter";
  functions: {
    "maxAmountOut(address,uint256,address)": FunctionFragment;
    "minAmountIn(address,address,uint256)": FunctionFragment;
    "swapMaxOut(address,uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "maxAmountOut",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "minAmountIn",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapMaxOut",
    values: [string, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "maxAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minAmountIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapMaxOut", data: BytesLike): Result;

  events: {};
}

export interface IConverter extends BaseContract {
  contractName: "IConverter";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IConverterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    maxAmountOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      tokenOut_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    minAmountIn(
      tokenIn_: string,
      tokenOut_: string,
      amountOut_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    swapMaxOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      tokenOut_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  maxAmountOut(
    tokenIn_: string,
    amountIn_: BigNumberish,
    tokenOut_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  minAmountIn(
    tokenIn_: string,
    tokenOut_: string,
    amountOut_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  swapMaxOut(
    tokenIn_: string,
    amountIn_: BigNumberish,
    tokenOut_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    maxAmountOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      tokenOut_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minAmountIn(
      tokenIn_: string,
      tokenOut_: string,
      amountOut_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapMaxOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      tokenOut_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    maxAmountOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      tokenOut_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minAmountIn(
      tokenIn_: string,
      tokenOut_: string,
      amountOut_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapMaxOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      tokenOut_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    maxAmountOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      tokenOut_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minAmountIn(
      tokenIn_: string,
      tokenOut_: string,
      amountOut_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapMaxOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      tokenOut_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
