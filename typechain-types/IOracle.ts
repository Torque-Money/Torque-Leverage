/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IOracleInterface extends utils.Interface {
  contractName: "IOracle";
  functions: {
    "amountMax(address,uint256)": FunctionFragment;
    "amountMin(address,uint256)": FunctionFragment;
    "priceMax(address,uint256)": FunctionFragment;
    "priceMin(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "amountMax",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "amountMin",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "priceMax",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "priceMin",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "amountMax", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "amountMin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceMax", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceMin", data: BytesLike): Result;

  events: {};
}

export interface IOracle extends BaseContract {
  contractName: "IOracle";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOracleInterface;

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
    amountMax(
      token_: string,
      price_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    amountMin(
      token_: string,
      price_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    priceMax(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    priceMin(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  amountMax(
    token_: string,
    price_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  amountMin(
    token_: string,
    price_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  priceMax(
    token_: string,
    amount_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  priceMin(
    token_: string,
    amount_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    amountMax(
      token_: string,
      price_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    amountMin(
      token_: string,
      price_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceMax(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceMin(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    amountMax(
      token_: string,
      price_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    amountMin(
      token_: string,
      price_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceMax(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceMin(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    amountMax(
      token_: string,
      price_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    amountMin(
      token_: string,
      price_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceMax(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceMin(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
