import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Input } from './dto/input.dto';

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
  @Post('logarit')
  logarit(@Body() data: Input): { result: number } {
    return this.appService.logarit(data);
  }
}
