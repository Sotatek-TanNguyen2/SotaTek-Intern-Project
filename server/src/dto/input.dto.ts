import { IsNumber } from 'class-validator';

export class Input {
  @IsNumber()
  firstNumber: number;

  @IsNumber()
  secondNumber: number;
}

export class GiaiThua {
  @IsNumber()
  n: number;
}
