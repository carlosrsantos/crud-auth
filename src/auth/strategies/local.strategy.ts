import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validade(nome: string, senha: string): Promise<any> {
    const user = await this.authService.validateUser(nome, senha);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
