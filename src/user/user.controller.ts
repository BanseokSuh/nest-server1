import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('all')
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Post('sign-in')
  signIn() {
    return this.userService.signIn();
  }

  @Get()
  getUser() {
    return this.userService.getUser();
  }
}
