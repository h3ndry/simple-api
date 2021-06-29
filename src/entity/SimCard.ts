import {ManyToOne, Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { Orders } from './Orders';

@Entity()
export class SimCard {

    @PrimaryGeneratedColumn()
    simid: number;

    @Column()
    name: string;

    @ManyToOne(() => Orders, (order: Orders) => order.simCards)
    order: Orders;

}
