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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface OracleInterface extends utils.Interface {
  contractName: "Oracle";
  functions: {
    "amountMax(address,uint256)": FunctionFragment;
    "amountMin(address,uint256)": FunctionFragment;
    "decimals(address)": FunctionFragment;
    "isSupported(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "priceDecimals()": FunctionFragment;
    "priceFeed(address)": FunctionFragment;
    "priceMax(address,uint256)": FunctionFragment;
    "priceMin(address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "reservePriceFeed(address)": FunctionFragment;
    "setPriceDecimals(uint256)": FunctionFragment;
    "setPriceFeed(address[],address[],address[],uint256[],bool[])": FunctionFragment;
    "setThreshold(uint256,uint256)": FunctionFragment;
    "threshold()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "amountMax",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "amountMin",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values: [string]): string;
  encodeFunctionData(functionFragment: "isSupported", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceDecimals",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "priceFeed", values: [string]): string;
  encodeFunctionData(
    functionFragment: "priceMax",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "priceMin",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reservePriceFeed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceDecimals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceFeed",
    values: [string[], string[], string[], BigNumberish[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setThreshold",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "threshold", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "amountMax", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "amountMin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isSupported",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "priceFeed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceMax", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceMin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reservePriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "threshold", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Oracle extends BaseContract {
  contractName: "Oracle";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OracleInterface;

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

    decimals(token_: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    isSupported(token_: string, overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    priceDecimals(overrides?: CallOverrides): Promise<[BigNumber]>;

    priceFeed(token_: string, overrides?: CallOverrides): Promise<[string]>;

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

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    reservePriceFeed(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setPriceDecimals(
      priceDecimals_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPriceFeed(
      token_: string[],
      priceFeed_: string[],
      reservePriceFeed_: string[],
      correctDecimals_: BigNumberish[],
      supported_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setThreshold(
      thresholdNumerator_: BigNumberish,
      thresholdDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    threshold(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
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

  decimals(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

  isSupported(token_: string, overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  priceDecimals(overrides?: CallOverrides): Promise<BigNumber>;

  priceFeed(token_: string, overrides?: CallOverrides): Promise<string>;

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

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  reservePriceFeed(token_: string, overrides?: CallOverrides): Promise<string>;

  setPriceDecimals(
    priceDecimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPriceFeed(
    token_: string[],
    priceFeed_: string[],
    reservePriceFeed_: string[],
    correctDecimals_: BigNumberish[],
    supported_: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setThreshold(
    thresholdNumerator_: BigNumberish,
    thresholdDenominator_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  threshold(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

    decimals(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    isSupported(token_: string, overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    priceDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    priceFeed(token_: string, overrides?: CallOverrides): Promise<string>;

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

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    reservePriceFeed(
      token_: string,
      overrides?: CallOverrides
    ): Promise<string>;

    setPriceDecimals(
      priceDecimals_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPriceFeed(
      token_: string[],
      priceFeed_: string[],
      reservePriceFeed_: string[],
      correctDecimals_: BigNumberish[],
      supported_: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setThreshold(
      thresholdNumerator_: BigNumberish,
      thresholdDenominator_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    threshold(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

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

    decimals(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    isSupported(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    priceDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    priceFeed(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

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

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    reservePriceFeed(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setPriceDecimals(
      priceDecimals_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPriceFeed(
      token_: string[],
      priceFeed_: string[],
      reservePriceFeed_: string[],
      correctDecimals_: BigNumberish[],
      supported_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setThreshold(
      thresholdNumerator_: BigNumberish,
      thresholdDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    threshold(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
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

    decimals(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSupported(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceFeed(
      token_: string,
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

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    reservePriceFeed(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setPriceDecimals(
      priceDecimals_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPriceFeed(
      token_: string[],
      priceFeed_: string[],
      reservePriceFeed_: string[],
      correctDecimals_: BigNumberish[],
      supported_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setThreshold(
      thresholdNumerator_: BigNumberish,
      thresholdDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    threshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
