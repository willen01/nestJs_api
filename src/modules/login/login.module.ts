import { SignInUseCase } from "./useCases/sign-in.usecase";
import { Module } from "@nestjs/common";
import { LoginController } from "./login.controller";
import { PrismaService } from "src/infra/database/prisma.service";
import { JwtModule } from "@nestjs/jwt";
import { IUserRepository } from "../user/repositories/user.repository";
import { UserPrismaRepository } from "../user/repositories/prisma/user.prisma.repository";

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: "NESTJS_CURSO",
      signOptions: { expiresIn: "60s" },
    }),
  ],
  controllers: [LoginController],
  providers: [
    PrismaService,
    SignInUseCase,
    {
      provide: IUserRepository,
      useClass: UserPrismaRepository,
    },
  ],
})
export class LoginModule {}
