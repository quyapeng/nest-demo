import { Controller, Get, Post, Request, Query, Body } from '@nestjs/common';
import { urlToHttpOptions } from 'url';
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
  addUser(@Body() body): any {
    // addUser(@Request() req): any {
    // console.log(req.body);
    console.log(body);
    return this.meService.addUser();
  }

  @Get('/getUserById')
  getUserById(@Query() query): any {
    let id: number = parseInt(query.id);
    return this.meService.getUserById(id);
  }
}
