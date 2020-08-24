import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';
import { User } from './user.entity';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {
  }

  @MessagePattern({ role: 'user', cmd: 'get' })
  getUser(data: any): Promise<User> {
    return this.userService.findOne({ username: data.username });
  }
}
