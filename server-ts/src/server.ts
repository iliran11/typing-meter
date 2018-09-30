import sharedCode from "../../client-server-code/client-server-code.js";
import * as io from "socket.io";
import onConnect from "./event-handlers/onConnect";

const server: any = io.listen(4000);

server.on("connection", onConnect);
