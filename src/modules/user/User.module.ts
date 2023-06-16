import { Module } from "@nestjs/common";
import { UserController } from "./User.controller";
import { CreateUserUseCase } from "./useCase/create-user.usecase";
import { PrismaService } from "src/infra/database/prisma.service";
import { IUserRepository } from "./repositories/user.repository";
import { UserPrismaRepository } from "./repositories/prisma/user.prisma.repository";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreateUserUseCase, PrismaService, 
    {
      provide: IUserRepository,
      useClass: UserPrismaRepository
    }
],
})
export class UserModule {}
