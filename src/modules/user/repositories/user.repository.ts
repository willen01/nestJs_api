import { CreateUserDTO, UserCreatedDTO, UsernameAndEmail } from "../dto/user.dto";

// Não é ideal aplicar interface porque o js não reconhece nativamente essa palavra, o que compromete a injeção de dependência no momento da conversão para js nativo

// quem implementa a classe abstrata é que realiza seus métodos
export abstract class IUserRepository {
  abstract findByUsernameOrEmail(data: UsernameAndEmail): Promise<CreateUserDTO | null>;
  abstract save(data: CreateUserDTO): Promise<UserCreatedDTO>;
  abstract findByUsername(username: string): Promise<UserCreatedDTO | null>;
}
