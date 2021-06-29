import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class DeliveryAdress {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @Column()
    city: string;

    @Column()
    zipCode: number;

    @Column()
    country: string;

}
