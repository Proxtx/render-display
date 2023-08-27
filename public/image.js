import config from "@proxtx/config";
import fs from "fs/promises";

export const getImage = async () => {
  let res = await fs.readdir(config.path);
  res.sort((a, b) => Number(a.split(".")[0]) - Number(b.split(".")[0]));
  return await fs.readFile(config.path + "/" + res.at(-1), {
    encoding: "base64",
  });
};
