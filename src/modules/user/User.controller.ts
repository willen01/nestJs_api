import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { randomUUID } from "crypto";

type ParamsUser = {
  id: string;
  idEmpresa: string;
};

type QueryParams = {
  p?: string;
  r?: string;
};

type BodyUser = {
  name: string;
  age: string
}

@Controller()
export class UserController {
  @Get("/helloUser")
  helloUser() {
    return "Seja bem vindo ao curso de NestJS";
  }

  @Get("/users/:id/:idEmpresa")
  findById(@Param() params: ParamsUser) {
    return "Usuário do ID " + params.id + params.idEmpresa;
  }

  @Get("/users/findByPages")
  findByPages(@Query("p") p: string, @Query("r") r: string) {
    return "Queries " + p + r;
  }

  @Post("/users/create")
  create(@Body() data: BodyUser) {
    return {
      ...data,
      id: randomUUID()
    }
  }
}
