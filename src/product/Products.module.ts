import { ProductsController } from "./Products.controller";
import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [],
})
export class ProductsModule {}
