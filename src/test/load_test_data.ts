import {createConnection} from "typeorm";
import { Customer } from '../entity/Customer';
import { SimCard } from "../entity/SimCard";

import log from '../logger';

createConnection().then(async connection => {

    log.info("load customer 1");
    const customer = new Customer();
    customer.firstName = "customer one first name"
    customer.lastName = "customer one lastname"
    customer.age = 27
    customer.email = "test@t.ca"
    await connection.manager.save(customer);

    log.info("load customer 2");
    const customer_1 = new Customer();
    customer_1.firstName = "customer two first name"
    customer_1.lastName = "customer two lastname"
    customer_1.age = 30
    customer_1.email = "test_1@t.ca"
    await connection.manager.save(customer_1);

    log.info("load customer 3");
    const customer_2 = new Customer();
    customer_2.firstName = "customer three first name"
    customer_2.lastName = "customer three lastname"
    customer_2.age = 17
    customer_2.email = "test_2@t.ca"
    await connection.manager.save(customer_2);

    log.info("load customer 4");
    const customer_3 = new Customer();
    customer_3.firstName = "customer four first name"
    customer_3.lastName = "customer four lastname"
    customer_3.age = 27
    customer_3.email = "test_4@t.ca"
    await connection.manager.save(customer_3);

    log.info("load customer 5");
    const customer_4 = new Customer();
    customer_4.firstName = "customer five first name"
    customer_4.lastName = "customer five lastname"
    customer_4.age = 27
    customer_4.email = "test_5@t.ca"
    await connection.manager.save(customer_4);

    // ==============================================================

    log.info("load simcard 1");
    const simcard = new SimCard();
    simcard.name = "Unique name"
    await connection.manager.save(simcard);

    log.info("load simcard 2");
    const simcard_1 = new SimCard();
    simcard_1.name = "Unique name 1"
    await connection.manager.save(simcard_1);

    log.info("load simcard 3");
    const simcard_2 = new SimCard();
    simcard_2.name = "Unique name 2"
    await connection.manager.save(simcard_2);

    log.info("load simcard 4");
    const simcard_3 = new SimCard();
    simcard_3.name = "Unique name 3"
    await connection.manager.save(simcard_3);

    log.info("load simcard 4");
    const simcard_4 = new SimCard();
    simcard_4.name = "Unique name 4"
    await connection.manager.save(simcard_4);


}).catch(error => console.log(error));
