import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class SimCard {

    @PrimaryGeneratedColumn()
    simid: number;

    @Column({ nullable: false })
    name: string;
}
