import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Input, GiaiThua } from './dto/input.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @HttpCode(HttpStatus.OK)
  @Post('add')
  add(@Body() data: Input): { result: number } {
    return this.appService.add(data);
  }

  @HttpCode(HttpStatus.OK)
  @Post('multiple')
  multiple(@Body() data: Input): { result: number } {
    return this.appService.multiple(data);
  }

  @HttpCode(HttpStatus.OK)
  @Post('divide')
  divide(@Body() data: Input): { result: number } {
    return this.appService.divide(data);
  }
  @HttpCode(HttpStatus.OK)
  @Post('subtraction')
  subtraction(@Body() data: Input): { result: number } {
    return this.appService.subtraction(data);
  }
  @HttpCode(HttpStatus.OK)
  @Post('factorial')
  factorial(@Body() data: GiaiThua): { result: number } {
    return this.appService.factorial(data);
  }
}
