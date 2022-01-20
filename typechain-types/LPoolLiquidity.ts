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

export interface LPoolLiquidityInterface extends utils.Interface {
  contractName: "LPoolLiquidity";
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "LPFromPT(address)": FunctionFragment;
    "POOL_ADMIN()": FunctionFragment;
    "POOL_APPROVED()": FunctionFragment;
    "PTFromLP(address)": FunctionFragment;
    "addLPToken(address[],string[],string[])": FunctionFragment;
    "addTaxAccount(address)": FunctionFragment;
    "claim(address,uint256)": FunctionFragment;
    "claimed(address,address)": FunctionFragment;
    "converter()": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "isApprovedLP(address)": FunctionFragment;
    "isApprovedPT(address)": FunctionFragment;
    "isLP(address)": FunctionFragment;
    "isPT(address)": FunctionFragment;
    "liquidity(address)": FunctionFragment;
    "removeTaxAccount(address)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setApproved(address[],bool[])": FunctionFragment;
    "setConverter(address)": FunctionFragment;
    "setTaxPercentage(uint256,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "taxPercentage()": FunctionFragment;
    "totalClaimed(address)": FunctionFragment;
    "tvl(address)": FunctionFragment;
    "unclaim(address,uint256)": FunctionFragment;
    "utilizationRate(address)": FunctionFragment;
    "utilized(address)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "LPFromPT", values: [string]): string;
  encodeFunctionData(
    functionFragment: "POOL_ADMIN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POOL_APPROVED",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PTFromLP", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addLPToken",
    values: [string[], string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addTaxAccount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimed",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "converter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedLP",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedPT",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isLP", values: [string]): string;
  encodeFunctionData(functionFragment: "isPT", values: [string]): string;
  encodeFunctionData(functionFragment: "liquidity", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeTaxAccount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setApproved",
    values: [string[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setConverter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxPercentage",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "taxPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalClaimed",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "tvl", values: [string]): string;
  encodeFunctionData(
    functionFragment: "unclaim",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "utilizationRate",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "utilized", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "LPFromPT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "POOL_ADMIN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "POOL_APPROVED",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PTFromLP", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addLPToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addTaxAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "converter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedLP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedPT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isLP", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeTaxAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setConverter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTaxPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taxPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalClaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tvl", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unclaim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "utilizationRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "utilized", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "AddLPToken(address,address)": EventFragment;
    "Claim(address,address,uint256)": EventFragment;
    "Deposit(address,address,uint256,address,uint256)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "Unclaim(address,address,uint256)": EventFragment;
    "Withdraw(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddLPToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unclaim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type AddLPTokenEvent = TypedEvent<
  [string, string],
  { token: string; LPToken: string }
>;

export type AddLPTokenEventFilter = TypedEventFilter<AddLPTokenEvent>;

export type ClaimEvent = TypedEvent<
  [string, string, BigNumber],
  { account: string; token: string; amount: BigNumber }
>;

export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;

export type DepositEvent = TypedEvent<
  [string, string, BigNumber, string, BigNumber],
  {
    account: string;
    tokenIn: string;
    amountIn: BigNumber;
    convertedToken: string;
    convertedAmount: BigNumber;
  }
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  { role: string; previousAdminRole: string; newAdminRole: string }
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export type UnclaimEvent = TypedEvent<
  [string, string, BigNumber],
  { account: string; token: string; amount: BigNumber }
>;

export type UnclaimEventFilter = TypedEventFilter<UnclaimEvent>;

export type WithdrawEvent = TypedEvent<
  [string, string, BigNumber],
  { account: string; token: string; amount: BigNumber }
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface LPoolLiquidity extends BaseContract {
  contractName: "LPoolLiquidity";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LPoolLiquidityInterface;

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
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    LPFromPT(token_: string, overrides?: CallOverrides): Promise<[string]>;

    POOL_ADMIN(overrides?: CallOverrides): Promise<[string]>;

    POOL_APPROVED(overrides?: CallOverrides): Promise<[string]>;

    PTFromLP(token_: string, overrides?: CallOverrides): Promise<[string]>;

    addLPToken(
      token_: string[],
      name_: string[],
      symbol_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addTaxAccount(
      account_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claim(
      token_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimed(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    converter(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      token_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isApprovedLP(token_: string, overrides?: CallOverrides): Promise<[boolean]>;

    isApprovedPT(token_: string, overrides?: CallOverrides): Promise<[boolean]>;

    isLP(token_: string, overrides?: CallOverrides): Promise<[boolean]>;

    isPT(token_: string, overrides?: CallOverrides): Promise<[boolean]>;

    liquidity(token_: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    removeTaxAccount(
      account_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApproved(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setConverter(
      converter_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxPercentage(
      taxPercentNumerator_: BigNumberish,
      taxPercentDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    taxPercentage(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    totalClaimed(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tvl(token_: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    unclaim(
      token_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    utilizationRate(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    utilized(token_: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      token_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  LPFromPT(token_: string, overrides?: CallOverrides): Promise<string>;

  POOL_ADMIN(overrides?: CallOverrides): Promise<string>;

  POOL_APPROVED(overrides?: CallOverrides): Promise<string>;

  PTFromLP(token_: string, overrides?: CallOverrides): Promise<string>;

  addLPToken(
    token_: string[],
    name_: string[],
    symbol_: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addTaxAccount(
    account_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claim(
    token_: string,
    amount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimed(
    token_: string,
    account_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  converter(overrides?: CallOverrides): Promise<string>;

  deposit(
    token_: string,
    amount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isApprovedLP(token_: string, overrides?: CallOverrides): Promise<boolean>;

  isApprovedPT(token_: string, overrides?: CallOverrides): Promise<boolean>;

  isLP(token_: string, overrides?: CallOverrides): Promise<boolean>;

  isPT(token_: string, overrides?: CallOverrides): Promise<boolean>;

  liquidity(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

  removeTaxAccount(
    account_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApproved(
    token_: string[],
    approved_: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setConverter(
    converter_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxPercentage(
    taxPercentNumerator_: BigNumberish,
    taxPercentDenominator_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  taxPercentage(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  totalClaimed(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

  tvl(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

  unclaim(
    token_: string,
    amount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  utilizationRate(
    token_: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  utilized(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    token_: string,
    amount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    LPFromPT(token_: string, overrides?: CallOverrides): Promise<string>;

    POOL_ADMIN(overrides?: CallOverrides): Promise<string>;

    POOL_APPROVED(overrides?: CallOverrides): Promise<string>;

    PTFromLP(token_: string, overrides?: CallOverrides): Promise<string>;

    addLPToken(
      token_: string[],
      name_: string[],
      symbol_: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    addTaxAccount(account_: string, overrides?: CallOverrides): Promise<void>;

    claim(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claimed(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    converter(overrides?: CallOverrides): Promise<string>;

    deposit(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isApprovedLP(token_: string, overrides?: CallOverrides): Promise<boolean>;

    isApprovedPT(token_: string, overrides?: CallOverrides): Promise<boolean>;

    isLP(token_: string, overrides?: CallOverrides): Promise<boolean>;

    isPT(token_: string, overrides?: CallOverrides): Promise<boolean>;

    liquidity(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeTaxAccount(
      account_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setApproved(
      token_: string[],
      approved_: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setConverter(converter_: string, overrides?: CallOverrides): Promise<void>;

    setTaxPercentage(
      taxPercentNumerator_: BigNumberish,
      taxPercentDenominator_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    taxPercentage(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    totalClaimed(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    tvl(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    unclaim(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    utilizationRate(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    utilized(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddLPToken(address,address)"(
      token?: null,
      LPToken?: null
    ): AddLPTokenEventFilter;
    AddLPToken(token?: null, LPToken?: null): AddLPTokenEventFilter;

    "Claim(address,address,uint256)"(
      account?: string | null,
      token?: null,
      amount?: null
    ): ClaimEventFilter;
    Claim(
      account?: string | null,
      token?: null,
      amount?: null
    ): ClaimEventFilter;

    "Deposit(address,address,uint256,address,uint256)"(
      account?: string | null,
      tokenIn?: null,
      amountIn?: null,
      convertedToken?: null,
      convertedAmount?: null
    ): DepositEventFilter;
    Deposit(
      account?: string | null,
      tokenIn?: null,
      amountIn?: null,
      convertedToken?: null,
      convertedAmount?: null
    ): DepositEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;

    "Unclaim(address,address,uint256)"(
      account?: string | null,
      token?: null,
      amount?: null
    ): UnclaimEventFilter;
    Unclaim(
      account?: string | null,
      token?: null,
      amount?: null
    ): UnclaimEventFilter;

    "Withdraw(address,address,uint256)"(
      account?: string | null,
      token?: null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(
      account?: string | null,
      token?: null,
      amount?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    LPFromPT(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    POOL_ADMIN(overrides?: CallOverrides): Promise<BigNumber>;

    POOL_APPROVED(overrides?: CallOverrides): Promise<BigNumber>;

    PTFromLP(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    addLPToken(
      token_: string[],
      name_: string[],
      symbol_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addTaxAccount(
      account_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claim(
      token_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimed(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    converter(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      token_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedLP(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    isApprovedPT(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    isLP(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    isPT(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    liquidity(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeTaxAccount(
      account_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApproved(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setConverter(
      converter_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxPercentage(
      taxPercentNumerator_: BigNumberish,
      taxPercentDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    taxPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    totalClaimed(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    tvl(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    unclaim(
      token_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    utilizationRate(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    utilized(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      token_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    LPFromPT(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POOL_ADMIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    POOL_APPROVED(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PTFromLP(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addLPToken(
      token_: string[],
      name_: string[],
      symbol_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addTaxAccount(
      account_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      token_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimed(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    converter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      token_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedLP(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedPT(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isLP(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPT(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidity(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeTaxAccount(
      account_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApproved(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setConverter(
      converter_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxPercentage(
      taxPercentNumerator_: BigNumberish,
      taxPercentDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    taxPercentage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalClaimed(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tvl(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unclaim(
      token_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    utilizationRate(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    utilized(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      token_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
