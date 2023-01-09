import { Injectable } from '@nestjs/common';

@Injectable()
export class MeService {
  getMe() {
    return {
      code: 0,
      data: {
        name: 'mia',
        age: 18,
      },
      msg: '请求成功',
    };
  }
  addUser() {
    return {
      code: 0,
      data: {
        name: 'mia',
        age: 18,
      },
      msg: '添加成功',
    };
  }
}
