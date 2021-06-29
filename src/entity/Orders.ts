import {
    OneToMany,
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

    @Column()
    status: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    createdAt: string;

    @OneToOne(() => Customer)
    @JoinColumn()
    customerId: Customer;

    @OneToOne(() => DeliveryAdress)
    @JoinColumn()
    simId: DeliveryAdress;

    @OneToMany(() => SimCard, (simCard: SimCard) => simCard.order)
    simCards: SimCard[];
}
