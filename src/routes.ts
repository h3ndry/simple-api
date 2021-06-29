import express from 'express';
import { getAllSimCard } from './controller/SimCardController'
import { getAllCustomers } from './controller/CustomerControler';
import { Request, Response } from "express";
// import {Repository } from 'typeorm'

const router = express.Router();


router.get("/healthcheck", (_:Request, res:Response) => res.send("oka"));

//  One endpoint to list available SIM cards
// Each SIM card must have a unique ID and Name
router.get("/sim-cards", getAllSimCard)


//    // o One endpoint to create an order (see sample)
//    // To create an order, the API client must provide:
//    // 1. SIM card id (Taken from list of SIM cards that have unique IDs)
//    // 2. Customer Id (Customer must have a name and unique ID)
//    // 3. Delivery address (of customer),
router.get("/orders")
router.post("/orders")
router.put("/orders/:id")



// not asked path
router.get("/customers", getAllCustomers);

export default router;

//    app.get("/healthcheck", (_, res: Response) => res.sendStatus(200));



//    //more
//    app.delete("/")
//    app.patch("/")


//// }
