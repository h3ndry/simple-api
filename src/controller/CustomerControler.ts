import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Customer } from "../entity/Customer";
import { Address } from "../entity/Address";
import validator from "validator";

export const getAllCustomers = async function (_: Request, res: Response) {
    const cusRepo = getRepository(Customer);

    const customers = await cusRepo.find();

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
};

export const createCustomer = async function (req: Request, res: Response) {
    const cusRepo = getRepository(Customer);
    const addRepo = getRepository(Address);
    const cusTmp = new Customer();
    const addrTmp = new Address();

    try {
        if (!validator.isEmail(req.body.email)) {
            throw "Please provider a valid email";
        }

        addrTmp.city = req.body.address.city;
        addrTmp.province = req.body.address.province;
        addrTmp.country = req.body.address.country;
        addrTmp.zipCode = req.body.address.zipCode;

        const addr = await addRepo.save(addrTmp)

        cusTmp.firstName = req.body.firstName;
        cusTmp.lastName = req.body.lastName;
        cusTmp.email = req.body.firstName;
        cusTmp.addressID = addr

        const cust = await cusRepo.save(cusTmp)

        res.status(200).json({
            status: true,
            data: cust,
        });
    } catch (e) {

        // const erro = JSON(e)
        /* handle error */
        console.log(e)
        res.status(201).json({
            status: false,
            data: e,
        });
    }
};
