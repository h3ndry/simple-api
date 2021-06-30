import {
    JoinColumn,
    OneToOne,
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm";
import { Customer } from "./Customer";
import { SimCard } from "./SimCard";
import { DeliveryAdress } from "./DeliveryAdress";

@Entity()
export class Orders {
    @PrimaryGeneratedColumn()
    orderid: number;

    @Column({default: "pedding"})
    status: string;

    @Column()
    name: string;

    @Column()
    createdAt: string;

    @OneToOne(() => Customer)
    @JoinColumn()
    customerId: Customer;

    @OneToOne(() => DeliveryAdress)
    @JoinColumn()
    deliveryAddr: DeliveryAdress;

    @OneToOne(() => SimCard)
    @JoinColumn()
    simcardId: SimCard;

}
