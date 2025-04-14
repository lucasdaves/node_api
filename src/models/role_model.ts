import { v4 as uuid } from 'uuid'

export interface RoleModelDTO {
    id?: string
    name: string
    created_at?: string
}

export class RoleModel {
    public id: string
    public name: string
    public created_at: string

    constructor({ id, name, created_at }: RoleModelDTO) {
        //props:RoleModelDTO
        this.id = id ?? uuid()
        this.name = name
        this.created_at = created_at ?? new Date().toISOString()
    }
}
