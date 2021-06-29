import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class SimCard {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
