import {
    OneToOne,
    JoinColumn,
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm";
import { Address } from "./Address";

@Entity()
export class Customer extends BaseEntity {
    @PrimaryGeneratedColumn()
    customer_id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ nullable: false })
    email: string;

    @OneToOne(() => Address)
    @JoinColumn()
    addressID: Address;
}
