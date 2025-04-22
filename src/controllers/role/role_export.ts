import { RoleRepository } from "../../repositories/role_repository";
import { RoleController } from "./role_controller";
import { RoleUseCases } from "./role_use_cases";

const roleRepository = new RoleRepository()
const roleUseCases = new RoleUseCases(roleRepository)
export const roleController = new RoleController(roleUseCases)