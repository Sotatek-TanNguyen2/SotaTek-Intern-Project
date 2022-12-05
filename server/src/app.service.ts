import { Injectable, BadRequestException } from '@nestjs/common';
import { Input } from './dto/input.dto';

@Injectable()
export class AppService {
  add(data: Input): { result: number } {
    if (data.firstNumber > Number.MAX_SAFE_INTEGER) {
      throw new BadRequestException('firstNumber is too big');
    }
    if (data.secondNumber > Number.MAX_SAFE_INTEGER) {
      throw new BadRequestException('secondNumber is too big');
    }
    return { result: data.firstNumber + data.secondNumber };
  }
}
