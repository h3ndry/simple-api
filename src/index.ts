import "reflect-metadata";
import config from 'config';
import log from './logger';
import express from "express";
import {createConnection} from "typeorm";
// import { Customer } from './entity/Customer';
// import { SimCard } from "./entity/SimCard";
import router from "./routes"


createConnection().then(async () => {

    const port = config.get("port") as number;
    const host = config.get("host") as string;

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }))

    // 1. Must be a RESTful HTTP API listening to port 3200 (or you can use another port instead
    app.listen(port, host, () => {

        log.info(`Server Listen at http://${host}:${port}`);

        app.use('/', router)
    })

}).catch(error => console.log(error));


//     const customer = new Customer();
//     customer.firstName = "customer one first name"
//     customer.lastName = "customer one lastname"
//     customer.age = 27
//     customer.email = "test@t.ca"


//     const customer_1 = new Customer();
//     customer_1.firstName = "customer two first name"
//     customer_1.lastName = "customer two lastname"
//     customer_1.age = 30
//     customer_1.email = "test_1@t.ca"


//     const customer_2 = new Customer();
//     customer_2.firstName = "customer three first name"
//     customer_2.lastName = "customer three lastname"
//     customer_2.age = 17
//     customer_2.email = "test_2@t.ca"


//     const customer_3 = new Customer();
//     customer_3.firstName = "customer four first name"
//     customer_3.lastName = "customer four lastname"
//     customer_3.age = 27
//     customer_3.email = "test_4@t.ca"


//     const customer_4 = new Customer();
//     customer_4.firstName = "customer five first name"
//     customer_4.lastName = "customer five lastname"
//     customer_4.age = 27
//     customer_4.email = "test_5@t.ca"


//     await connection.manager.save(customer);
//     await connection.manager.save(customer_1);
//     await connection.manager.save(customer_2);
//     await connection.manager.save(customer_3);
//     await connection.manager.save(customer_4);


// ============================================================
    // const customer = new SimCard();
    // customer.name = "Unique name"

    // const customer_1 = new SimCard();
    // customer_1.name = "Unique name 1"

    // const customer_2 = new SimCard();
    // customer_2.name = "Unique name 2"

    // const customer_3 = new SimCard();
    // customer_3.name = "Unique name 3"

    // const customer_4 = new SimCard();
    // customer_4.name = "Unique name 4"


    // await connection.manager.save(customer);
    // await connection.manager.save(customer_1);
    // await connection.manager.save(customer_2);
    // await connection.manager.save(customer_3);
    // await connection.manager.save(customer_4);





