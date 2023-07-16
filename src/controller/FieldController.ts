import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Field } from "../entity/Field"

export class FieldController {

    private fieldRepository = AppDataSource.getRepository(Field)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.fieldRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const field = await this.fieldRepository.findOne({
            where: { id }
        })

        if (!field) {
            return "unregistered field"
        }
        return field
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { name , id_institution , price , availability , fieldDetails, fieldRules, postalCode, length, width} = request.body;

        const field = Object.assign(new Field(), {
            name,
            id_institution,
            price, 
            availability, 
            fieldDetails, 
            fieldRules, 
            postalCode, 
            width, 
            length
        })
        
        return this.fieldRepository.save(field)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let fieldToRemove = await this.fieldRepository.findOneBy({ id })

        if (!fieldToRemove) {
            return "this field not exist"
        }

        await this.fieldRepository.remove(fieldToRemove)

        return "field has been removed"
    }

}