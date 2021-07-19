import {createConnection} from "typeorm";
import { SimCard } from "../entity/SimCard";
import log from '../logger';

createConnection().then(async connection => {

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
