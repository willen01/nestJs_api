import { CreateUserUseCase } from "./useCase/create-user.usecase";
import { Body, Controller, Post, HttpException, HttpStatus } from "@nestjs/common";
import { CreateUserDTO } from "./dto/user.dto";

@Controller("/users")
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(@Body() data: CreateUserDTO) {
    try {
      return await this.createUserUseCase.execute(data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
