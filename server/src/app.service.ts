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

  logarit(data: Input): { result: number } {
    if (data.firstNumber > Number.MAX_SAFE_INTEGER) {
      throw new BadRequestException('number is too big');
    }
    if (data.secondNumber > Number.MAX_SAFE_INTEGER) {
      throw new BadRequestException('base is too big');
    }
    if (
      data.firstNumber <= 0 ||
      data.secondNumber <= 0 ||
      data.secondNumber === 1
    ) {
      throw new BadRequestException(
        'condition logarit undefined (defined for number > 0 and base > 0 and base != 1)'
      );
    }
    return { result: Math.log(data.firstNumber) / Math.log(data.secondNumber) };
  }
}
