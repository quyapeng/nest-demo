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
  getUserById(id: number) {
    let reJson: any = {};
    switch (id) {
      case 1:
        reJson = {
          id: 1,
          name: 'mia',
          age: 18,
        };
        break;
      case 2:
        reJson = {
          id: 2,
          name: 'mima1',
          age: 19,
        };
        break;
    }
    return reJson;
  }
}
