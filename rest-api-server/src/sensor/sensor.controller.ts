import { Controller, Post, Body } from '@nestjs/common';
import { SensorService, SensorData } from './sensor.service';

@Controller('api/data')
export class SensorController {
  // 💡 NestJS의 핵심: 생성자를 통해 서비스를 주입(Injection)받습니다.
  constructor(private readonly sensorService: SensorService) {}

  @Post()
  receiveData(@Body() data: SensorData) {
    // 직접 로직을 짜지 않고 서비스의 함수를 호출만 합니다.
    return this.sensorService.processSensorData(data);
  }
}
