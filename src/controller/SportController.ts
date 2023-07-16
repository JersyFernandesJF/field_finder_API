import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Sport } from "../entity"

export class SportController {

    private sportRepository = AppDataSource.getRepository(Sport)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.sportRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        const sport = await this.sportRepository.findOne({
            where: { id }
        })
        if (!sport) {
            return "unregistered sport"
        }
        return sport
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { name , details } = request.body;

        const sport = Object.assign(new Sport(), {
            name,
            details
        })
        
        return this.sportRepository.save(sport)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let sportToRemove = await this.sportRepository.findOneBy({ id })

        if (!sportToRemove) {
            return "this sport not exist"
        }

        await this.sportRepository.remove(sportToRemove)

        return "sport has been removed"
    }

}