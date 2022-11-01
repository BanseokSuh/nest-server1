import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/index';

import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {
    this.userRepository = userRepository;
  }

  async getAllUser() {
    const userArr = await this.userRepository.find();
    return userArr;
  }

  async signIn() {
    return;
  }

  getUser() {
    return;
  }
}
