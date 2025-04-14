import { RoleModel, RoleModelDTO } from "../models/role_model"

export class RoleRepository {
    private entities: RoleModel[]

    constructor () {
        this.entities = [];
    }

    create({ name }: RoleModelDTO) : RoleModel {
        const role = new RoleModel({name: name})
        this.entities.push(role)
        return role
    }

    findAll() : RoleModel[] {
        console.log(this.entities)
        return this.entities
    }

    findByName(name: string) : RoleModel | undefined {
        const role = this.entities.find(role => role.name === name)
        return role
    }
}
