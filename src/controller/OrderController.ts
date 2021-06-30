import { getRepository } from "typeorm";
import { Request, Response } from "express";
import log from "../logger";
import { Customer } from "../entity/Customer";
import { DeliveryAdress } from "../entity/DeliveryAdress";
import { SimCard } from "../entity/SimCard";
import { Orders } from "../entity/Orders";

export const getAllOrders = async function (_: Request, res: Response) {
    // const customerCardRepository = getRepository(Customer);

    // const customers = await customerCardRepository.find();

    try {
        res.status(200).json({
            status: true,
            data: "worked..",
        });
    } catch (e) {
        /* handle error */

        res.status(201).json({
            status: false,
            data: e,
        });
    }
};

export const createOrder = async function (req: Request, res: Response) {
    const custRepo = getRepository(Customer);
    const simcardRepo = getRepository(SimCard);
    const orderRepo = getRepository(Orders);
    const deliveryAddrRepo = getRepository(DeliveryAdress);

    try {
        // Check if customer exist with the provided id
        const cust = await custRepo.findOne(req.body.customerId);
        if (!cust) {
            res.status(201).json({
                status: false,
                erro: "customer not found",
            });
            return;
        }

        // Check if sim card exist with the provided id
        const simcard = await simcardRepo.findOne(req.body.simId);
        if (!simcard) {
            res.status(201).json({
                status: false,
                erro: "simcard not found",
            });
            return;
        }

        // check if address is provide
        if (!req.body.deliveryAddr) {
            res.status(201).json({
                status: false,
                erro: "Please provide address",
            });
            return;
        }

        // Check if address exist before create new one
        // const addr = await deliveryAddrRepo.findOne({ firstName: "Timber", lastName: "Saw" });

        // if(!addr) {

        const addr = new DeliveryAdress();
        addr.address = req.body.deliveryAddr.address;
        addr.city = req.body.deliveryAddr.city;
        addr.zipCode = req.body.deliveryAddr.zipCode;
        addr.country = req.body.deliveryAddr.country;

        await deliveryAddrRepo.save(addr);
        // await deliveryAddrRepo.save(addr)

        // }

        const newOrder = new Orders();
        newOrder.name = req.body.name;
        newOrder.createdAt = Date.now().toString();
        // newOrder.status = "pedding";
        newOrder.customerId = cust;
        newOrder.deliveryAddr = addr;
        newOrder.simcardId = simcard;

        await orderRepo.save(newOrder);

        log.info(newOrder);

        res.status(200).json({
            status: true,
            data: newOrder,
        });
    } catch (e) {
        /* handle error */
        res.status(201).json({
            status: false,
            data: e,
        });
    }
};
