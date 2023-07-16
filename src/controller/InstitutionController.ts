import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Between } from "typeorm";
import { Institution } from "../entity"

export class InstitutionController{
    
     private institutionRepository = AppDataSource.getRepository(Institution)

     async all(request: Request, response: Response, next: NextFunction) {
        return this.institutionRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const institution = await this.institutionRepository.findOne({
            where: { id }
        })

        if (!institution) {
            return "unregistered organization"
        }
        return institution
    }
    async save(request: Request, response: Response, next: NextFunction) {
        const { id_organization , name, latitude, longitude, email, address, postalCode } = request.body;

        const institution = Object.assign(new Institution(), {
            id_organization,
            name,
            latitude, 
            longitude, 
            email, 
            address, 
            postalCode
        })
        
        return this.institutionRepository.save(institution)
    } 
    async getNearbyInstitutions(request: Request, response: Response, next: NextFunction){
        const { latitude, longitude, longitudeDelta, latitudeDelta } = request.body

        const minLatitude = latitude - latitudeDelta / 2;
        const maxLatitude = latitude + latitudeDelta / 2;
        const minLongitude = longitude - longitudeDelta / 2; 
        const maxLongitude = longitude + longitudeDelta / 2;
        
        const institutions = await this.institutionRepository.find({
            where: {
            latitude: Between(minLatitude, maxLatitude),
            longitude: Between(minLongitude, maxLongitude)
          },
        })
      
        if (!institutions) {
            return "unregistered organization"
        }
        return institutions

    }
    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let institutionToRemove = await this.institutionRepository.findOneBy({ id })
     
        if (!institutionToRemove) {
            return "this institution not exist"
        }

        await this.institutionRepository.remove(institutionToRemove)

        return "institution has been removed"
    }       
}