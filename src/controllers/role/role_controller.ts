import { Request, Response } from "express";
import { ErrorModel } from "../../models/error_model";
import { RoleUseCases } from "./role_use_cases";

export class RoleController {
  constructor(private useCases: RoleUseCases) {}

  create(req: Request, res: Response): Response {
    const { name } = req.body;
    if (!name) throw new ErrorModel(400, "Bad Request");
    const role = this.useCases.validateRole({ name: name });
    return res.status(201).json(role);
  }

  getAll(req: Request, res: Response): Response {
    const roles = this.useCases.getRoles();
    return res.status(200).json(roles);
  }
}
