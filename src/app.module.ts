import { Module } from "@nestjs/common";
import { ProductsModule } from "./product/Products.module";
import { UserModule } from "./user/User.module";

@Module({
  imports: [UserModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
