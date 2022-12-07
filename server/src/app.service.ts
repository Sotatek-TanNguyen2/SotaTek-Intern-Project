import { Injectable, BadRequestException } from '@nestjs/common';
import { GiaiThua, Input } from './dto/input.dto';

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

  subtraction(data: Input): { result: number } {
    if (data.firstNumber > Number.MAX_SAFE_INTEGER) {
      throw new BadRequestException('firstNumber is too big');
    }
    if (data.secondNumber > Number.MAX_SAFE_INTEGER) {
      throw new BadRequestException('secondNumber is too big');
    }
    return { result: data.firstNumber - data.secondNumber };
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
  factorial(data: GiaiThua): { result: number } {
    if (data.n > Number.MAX_SAFE_INTEGER) {
      throw new BadRequestException('n is too big');
    }
    if (data.n <0) {
      throw new BadRequestException('n must bigger than 0');
    }
    if ( Number(data.n) === data.n && data.n % 1 !== 0 ){
      throw new BadRequestException('n can not be float number');
    } 
    let result = 1;
    for (let i = 1; i <= data.n ; i++) {
      result *= i;
    }
    return { result }; 
  }
}
