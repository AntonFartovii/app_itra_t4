import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!\n Doing task 4';
  }

  getUsers() {
    return [{ad:1, name: 'Ulbi TV'}]
  }
}
