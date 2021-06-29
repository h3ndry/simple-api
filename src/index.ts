import "reflect-metadata";
import config from 'config';
import log from './logger';
import express from "express";
import {createConnection} from "typeorm";
import { SimCard } from "./entity/SimCard";
import router from "./routes"
// const router = require('./routes') ;


createConnection().then(async connection => {


const port = config.get("port") as number;
const host = config.get("host") as string;


    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }))

    app.use('/', router)


    // 1. Must be a RESTful HTTP API listening to port 3200 (or you can use another port instead
    app.listen(port, host, () => {

        log.info(`Server Listen at http://${host}:${port}`);

    })


    // log.info("Inserting a new user into the database...");
    // const simCard = new SimCard();
    // simCard.name = "Timber";
    // await connection.manager.save(simCard);
    // log.info("Saved a new user with id: " + simCard.id);

    console.log("Loading users from the database...");
    const simCards = await connection.manager.find(SimCard);
    // const simCards = await connection.manager.remove(i)
    console.log("Loaded users: ", simCards);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
