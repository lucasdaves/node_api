export class RoleModel {
    public id: string
    public name: string
    public created_at: string

    constructor (id: string, name: string, created_at: string) {
        this.id = id
        this.name = name
        this.created_at = created_at
    }
}