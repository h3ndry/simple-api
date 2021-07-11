import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Address extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    city: string;

    @Column({ nullable: false })
    province: string;

    @Column({ nullable: false })
    country: string;

    @Column({ nullable: false })
    zipCode: string;
}
