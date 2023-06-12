import { Controller, Get } from "@nestjs/common";

@Controller()
export class ProductsController {
  @Get("/products")
  helloUser() {
    return "Lista de produtos do site";
  }
}
