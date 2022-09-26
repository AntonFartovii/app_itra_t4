import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getUsers() {
    return [{id: 1, name: 'ULBI TV'}]
  }

  getHello(): string {
    return 'Hello World!';
  }
}
