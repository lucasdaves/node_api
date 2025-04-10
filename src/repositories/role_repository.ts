import { RoleModel, RoleModelParams } from "../models/role_model"

export class RoleRepository {
    private entities: RoleModel[]

    constructor () {
        this.entities = [];
    }

    create({ name }: RoleModelParams) : RoleModel {
        const role = new RoleModel({name: name})
        this.entities.push(role)
        return role
    }

    findAll() : RoleModel[] {
        return this.entities
    }
}