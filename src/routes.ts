import express from 'express';
import { getAllSimCard } from './controller/SimCardController'
import { Request, Response } from "express";
// import {Repository } from 'typeorm'


const router = express.Router();


//  One endpoint to list available SIM cards
// Each SIM card must have a unique ID and Name
router.get("/healthcheck", (_:Request, res:Response) => res.send("oka"));

router.get("/sim-cards", getAllSimCard)


export default router;

//    app.get("/healthcheck", (_, res: Response) => res.sendStatus(200));


//    // o One endpoint to create an order (see sample)
//    // To create an order, the API client must provide:
//    // 1. SIM card id (Taken from list of SIM cards that have unique IDs)
//    // 2. Customer Id (Customer must have a name and unique ID)
//    // 3. Delivery address (of customer),

//    app.get("/orders")
//    app.put("/orders/:id")

//    //more
//    app.delete("/")
//    app.patch("/")


//// }
