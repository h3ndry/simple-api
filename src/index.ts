import "reflect-metadata";
import config from "config";
import log from "./logger";
import express from "express";
import { createConnection } from "typeorm";
import router from "./routes";

createConnection()
    .then(async () => {
        const port = config.get("port") as number;
        const host = config.get("host") as string;

        const app = express();

        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));

        // 1. Must be a RESTful HTTP API listening to port 3200 (or you can use another port instead
        app.listen(port, host, () => {
            log.info(`Server Listen at http://${host}:${port}`);
            app.use("/", router);
        });
    })
    .catch((error) => log.error(error));

// ============================================================
