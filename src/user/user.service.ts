import { Injectable } from '@nestjs/common';

const userInfo = {
  name: 'BanseokSuh',
  gender: 'Male',
  age: 30,
};

@Injectable()
export class UserService {
  getUser() {
    return userInfo;
  }
}
