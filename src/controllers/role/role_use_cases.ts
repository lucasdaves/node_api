import { ErrorModel } from "../../models/error_model";
import { RoleModel, RoleModelDTO } from "../../models/role_model";
import { RoleRepository } from "../../repositories/role_repository";

export class RoleUseCases {
    constructor(private repository:RoleRepository) {}

    validateRole({ name }: RoleModelDTO) : RoleModel {
        const alreadyExists = this.repository.findByName(name)
        if(alreadyExists) throw new ErrorModel(400, 'Role already exists')
        return this.repository.create({ name })
    }

    getRoles() : RoleModel[] {
        return this.repository.findAll()
    }
}