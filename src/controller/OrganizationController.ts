import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Organization } from "../entity/Organization"
import { Institution } from "../entity/Institution"

export class OrganizationController{
    
     private organizationRepository = AppDataSource.getRepository(Organization)
     private institutionRepository = AppDataSource.getRepository(Institution)

     async all(request: Request, response: Response, next: NextFunction) {
        return this.organizationRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const organization = await this.organizationRepository.findOne({
            where: { id }
        })

        if (!organization) {
            return "unregistered organization"
        }
        return organization
    }
    async save(request: Request, response: Response, next: NextFunction) {
        const { id_firebase , name, nif } = request.body;

        const organization = Object.assign(new Organization(), {
            id_firebase,
            name,
            nif
        })
        
        return this.organizationRepository.save(organization)
    } 
    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let organizationToRemove = await this.organizationRepository.findOneBy({ id })
        let institutionToRemove =  await this.institutionRepository.find({ where: { id_organization: id } });


        if (!organizationToRemove) {
            return "this user not exist"
        }

        await this.organizationRepository.remove(organizationToRemove)
        await this.institutionRepository.remove(institutionToRemove)

        return "user has been removed"
    }       
}