import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    session_id: number;

    @Column()
    ipAdress: string;

    @Column()
    timeZone: string;

    @Column()
    country: number;

    @Column()
    agent: string;


}
