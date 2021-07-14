import {
    JoinColumn,
    OneToOne,
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm";
import { Customer } from "./Customer";
import { SimCard } from "./SimCard";
import { Address } from "./Address";

enum orderStatus {
    pedding = "PEDDING",
    processing = "PROCESSING",
    complete = "COMPLETE"
}

@Entity()
export class Orders {
    @PrimaryGeneratedColumn()
    orderid: number;

    @Column({default: "PEDDING"})
    status: orderStatus;

    @Column()
    name: string;

    @Column()
    createdAt: string;

    @OneToOne(() => Customer)
    @JoinColumn()
    customerId: Customer;

    @OneToOne(() => SimCard)
    @JoinColumn()
    simcardId: SimCard;

    @OneToOne(() => Address)
    @JoinColumn()
    addressID: Address;

}
