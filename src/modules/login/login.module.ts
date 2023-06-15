import { SignInUseCase } from './useCases/sign-in.usecase';
import { Module } from "@nestjs/common";
import { LoginController } from "./login.controller";
import { PrismaService } from "src/infra/database/prisma.service";
import { JwtModule } from '@nestjs/jwt';


@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: "NESTJS_CURSO",
            signOptions: {expiresIn: "60s"}
        })
    ],
    controllers: [LoginController],
    providers: [
        PrismaService, 
        SignInUseCase
    ]
})
export class LoginModule {}