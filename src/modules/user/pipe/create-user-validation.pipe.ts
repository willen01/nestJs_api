import { PipeTransform, Injectable, ArgumentMetadata, HttpException, HttpStatus } from "@nestjs/common";
import { CreateUserDTO } from "../dto/user.dto";

@Injectable()
export class CreateValidationPipe implements PipeTransform {
  transform({name, email, username, password}: CreateUserDTO, metadata: ArgumentMetadata) {
    if(!name || !email || !username || !password){
      throw new HttpException(`[name, email, username, password] is required`,  HttpStatus.UNPROCESSABLE_ENTITY)
    }

    return {
      name,
      email,
      username,
      password
    }
  }
}

// use transformation and validation