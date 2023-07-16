import "reflect-metadata"
import { DataSource } from "typeorm"
import { Contact, User, Field, FieldSports, Institution, Organization, Reservation, Sport, UserSport, Event } from "./entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Ii12a2018!",
    database: "field-finder",
    synchronize: true,
    logging: false,
    entities: [User, Contact, Field, FieldSports, Institution, Organization, Reservation, Sport, UserSport, Event],
    migrations: [],
    subscribers: [],
})
