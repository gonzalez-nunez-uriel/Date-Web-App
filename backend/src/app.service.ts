import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Serve single page application';
  }

  getDate(): any {
    let date = new Date();
    return {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() + 1};
  }
}
