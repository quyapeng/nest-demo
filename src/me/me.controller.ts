import { Controller, Get, Post } from '@nestjs/common';
import { MeService } from './me.service';
// controller (控制器) 引入service (逻辑)

@Controller('me')
export class MeController {
  constructor(private meService: MeService) {}

  @Get()
  getMe(): any {
    return this.meService.getMe();
    // return {
    //   code: 0,
    //   data: {
    //     name: 'mia',
    //     age: 18,
    //   },
    //   msg: '请求成功',
    // };
  }

  @Post('/add')
  addUser(): any {
    return this.meService.addUser();
  }
}
