import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { SimCard } from "../entity/SimCard";


export const getAllSimCard = async function(_:Request, res:Response) {

    const simCardRepository = getRepository(SimCard);

    const simCards = await simCardRepository.find();

    try {
        res.status(200).json({
            status: true,
            data: simCards,
        });
    } catch (e) {
        /* handle error */

        res.status(201).json({
            status: false,
            data: e,
        });
    }

}


// export class SimCardController {
//     private simCardRepository = getRepository(SimCard);

//     async all(_: Request, res: Response) {
//         const simCards = this.simCardRepository.find();

//         try {
//             res.status(200).json({
//                 status: true,
//                 data: simCards,
//             });
//         } catch (e) {
//             /* handle error */

//             res.status(201).json({
//                 status: false,
//                 data: e,
//             });
//         }
//     }

//     // async one(request: Request, response: Response, next: NextFunction) {
//     //     return this.simCardRepository.findOne(request.params.id);
//     // }

//     // async save(request: Request, response: Response, next: NextFunction) {
//     //     return this.simCardRepository.save(request.body);
//     // }

//     // async remove(request: Request, response: Response, next: NextFunction) {
//     //     let userToRemove = await this.userRepository.findOne(request.params.id);
//     //     await this.simCardRepository.remove(userToRemove);
//     // }
// }
