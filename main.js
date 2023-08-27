import { listen } from "@proxtx/framework";
import config from "@proxtx/config";

console.log("Server started. Port:", config.port);
await listen(config.port);
