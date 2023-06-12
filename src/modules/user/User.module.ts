import { Module } from "@nestjs/common";
import { UserController } from "./User.controller";
import { CreateUserUseCase } from "./useCase/create-user.usecase";
import { PrismaService } from "src/infra/database/prisma.service";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreateUserUseCase, PrismaService],
})
export class UserModule {}
