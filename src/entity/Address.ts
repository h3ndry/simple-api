import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Address extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    city: string;

    @Column()
    province: string;

    @Column()
    country: string;

    @Column()
    zipCode: number;
}
