
import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Customer } from "../entity/Customer";


export const getAllCustomers = async function(_:Request, res:Response) {

    const customerCardRepository = getRepository(Customer);

    const customers = await customerCardRepository.find();

    try {
        res.status(200).json({
            status: true,
            data: customers,
        });
    } catch (e) {
        /* handle error */

        res.status(201).json({
            status: false,
            data: e,
        });
    }



}
