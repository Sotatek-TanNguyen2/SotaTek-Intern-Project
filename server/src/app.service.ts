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
  multiple(data: Input): { result: number } {
    if (data.firstNumber > Number.MAX_SAFE_INTEGER) {
      throw new BadRequestException('firstNumber is too big');
    }
    if (data.secondNumber > Number.MAX_SAFE_INTEGER) {
      throw new BadRequestException('secondNumber is too big');
    }
    if (data.firstNumber * data.secondNumber > Number.MAX_SAFE_INTEGER) {
      throw new BadRequestException('multiple of two numbers are too big');
    }
    return { result: data.firstNumber * data.secondNumber };
  }
  divide(data: Input): { result: number } {
    if (data.firstNumber > Number.MAX_SAFE_INTEGER) {
      throw new BadRequestException('firstNumber is too big');
    }
    if (data.secondNumber > Number.MAX_SAFE_INTEGER) {
      throw new BadRequestException('secondNumber is too big');
    }
    if (data.secondNumber === 0) {
      throw new BadRequestException('Cannot divide by zero');
    }
    if (data.firstNumber / data.secondNumber > Number.MAX_VALUE) {
      throw new BadRequestException('Divide of 2 number is too big');
    }
    return { result: data.firstNumber / data.secondNumber };
  }
}
