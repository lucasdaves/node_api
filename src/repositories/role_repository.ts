import { RoleModel, RoleModelDTO } from "../models/role_model";

export class RoleRepository {
  public static INSTANCE: RoleRepository;

  private entities: RoleModel[];

  private constructor() {
    this.entities = [];
  }

  public static getInstance(): RoleRepository {
    if (!RoleRepository.INSTANCE) {
      RoleRepository.INSTANCE = new RoleRepository();
    }

    return RoleRepository.INSTANCE;
  }

  create({ name }: RoleModelDTO): RoleModel {
    const role = new RoleModel({ name: name });
    this.entities.push(role);
    return role;
  }

  findAll(): RoleModel[] {
    return this.entities;
  }

  findByName(name: string): RoleModel | undefined {
    const role = this.entities.find((role) => role.name === name);
    return role;
  }
}
