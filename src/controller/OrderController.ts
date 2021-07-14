import { getRepository } from "typeorm";
import { Request, Response } from "express";
// import log from "../logger";
import { Customer } from "../entity/Customer";
import { SimCard } from "../entity/SimCard";
import { Orders } from "../entity/Orders";

export const getAllOrders = async function (_: Request, res: Response) {
    const orderRepository = getRepository(Orders);

    const orders = await orderRepository.find({ relations: ["customerId"] });

    try {
        res.status(200).json({
            status: true,
            data: orders,
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

    try {

        if (isNaN(parseInt(req.body.customerId)))  {
            throw "Please provide a valid customer id"
        }

        if (isNaN(parseInt(req.body.simcardId)))  {
            throw "Please provide a valid simCard id"
        }

        const cust = await custRepo.findOne(req.body.customerId);
        if (cust == undefined) {
            throw "No customer find with that ID"
        }

       let order = await orderRepo.findOne({ customerId: cust })
        if (order != undefined) {
            throw "You have already created an order"
        }

        const simCard = await simcardRepo.findOne(req.body.simcardId);
        if (simCard == undefined) {
            throw "No simCard find with that ID"
        }

        var rightNow = new Date();
        const newOrder = new Orders();

        newOrder.name = req.body.name;
        newOrder.createdAt = rightNow
            .toISOString()
            .slice(0, 10)
            .replace(/-/g, "");
        newOrder.customerId = cust
        newOrder.simcardId = simCard

       if (order != undefined) {
            throw "You have already created an order"
       }

        order = await orderRepo.save(newOrder)

        console.log(order);

        res.status(200).json({
            status: true,
            data: order,
        });

    } catch (e) {
        /* handle error */
        res.status(201).json({
            status: false,
            data: e,
        });
    }
};

export const updateOrder = async function (req: Request, res: Response) {
    try {
        const orderRepository = getRepository(Orders);
        const order = await orderRepository.findOne(req.params.id);

        if (req.params.id && order && order != undefined) {
            order.status = req.body.status;
            await orderRepository.save(order);

            res.status(200).json({
                status: true,
                data: order,
            });
        }

        res.status(201).json({
            status: false,
            data: "order not found",
        });
    } catch (e) {
        /* handle error */

        res.status(201).json({
            status: false,
            data: e,
        });
    }
};
