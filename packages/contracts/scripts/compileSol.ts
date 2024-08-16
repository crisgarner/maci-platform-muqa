import hre from "hardhat";
import { buildPoseidonT3, buildPoseidonT4, buildPoseidonT5, buildPoseidonT6 } from "maci-contracts";

import fs from "fs";
import path from "path";

const PATHS = [
  path.resolve(__dirname, "..", "artifacts"),
  path.resolve(__dirname, "..", "cache"),
  path.resolve(__dirname, "..", "typechain-types"),
];

async function main(): Promise<void> {
  await Promise.all(PATHS.map((filepath) => fs.existsSync(filepath) && fs.promises.rm(filepath, { recursive: true })));

  await hre.run("compile");

  await Promise.all([buildPoseidonT3(), buildPoseidonT4(), buildPoseidonT5(), buildPoseidonT6()]);
}

main();
