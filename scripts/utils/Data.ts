import fs from "fs";

type Address = string;

interface Proxy {
    proxy: Address;
    implementation: Address;
}

interface BeaconProxy {
    proxies: Address[];
    beacon: Address;
    implementation: Address;
}

interface Data {
    contracts: {
        multisig: Address;
        timelock: Address;
        TAU: Proxy;
        "VaultV2.0": BeaconProxy;
        "BeefyLPStrategyV2.0": BeaconProxy;
        "LensV2.0": BeaconProxy;
        "VaultV2.1": BeaconProxy;
        "BeefyLPStrategyV2.1": BeaconProxy;
        "LensV2.1": BeaconProxy;
        "VaultETHWrapperV1.0": Proxy;
    };
}

// Get the path of the data file
export function getDataPath() {
    return process.cwd() + "/data/data.json";
}

// **** Fix this up to have an optional parameter for the given type

// Save the data
export function saveData(data: Data) {
    const dataPath = getDataPath();
    const stringified = JSON.stringify(data);

    fs.writeFileSync(dataPath, stringified);
}

// Load the data
export function loadData() {
    const dataPath = getDataPath();
    const stringified = fs.readFileSync(dataPath).toString();

    return JSON.parse(stringified) as Data;
}
