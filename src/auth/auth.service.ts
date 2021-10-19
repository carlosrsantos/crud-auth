import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(nome: string, senha: string): Promise<any> {
    const user = await this.userService.findByName(nome);
    if (user && user.senha === senha) {
      const { senha, ...props } = user;
      return props;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.nomeusuario, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
