import {HardhatRuntimeEnvironment} from "hardhat/types";

import {ConfigType} from "../utils/utilConfig";

import deployConverter from "./deployConverter";
import deployOracle from "./deployOracle";
import deployPool from "./deployPool";
import deployLPToken from "./deployLPToken";
import deployMarginLong from "./deployMarginLong";
import deployResolver from "./deployResolver";
import deployFlashLender from "./deployFlashLender";
import deployTimelock from "./deployTimelock";

export default async function main(configType: ConfigType, hre: HardhatRuntimeEnvironment) {
    // await deployConverter(configType, hre);
    // await deployOracle(configType, hre);
    // await deployPool(configType, hre);
    // await deployLPToken(configType, hre);
    // await deployMarginLong(configType, hre);
    // await deployResolver(configType, hre);
    // await deployFlashLender(configType, hre);
    await deployTimelock(configType, hre);
}
