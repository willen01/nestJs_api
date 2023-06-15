import { Module } from "@nestjs/common";
import { UserModule } from "./modules/user/User.module";
import { LoginModule } from "./modules/login/login.module";

@Module({
  imports: [UserModule, LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
