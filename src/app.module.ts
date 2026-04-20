import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// 1. 우리가 만든 컨트롤러를 가져옵니다 (경로 주의!)
import { SensorController } from './sensor/sensor.controller'; 
// 만약 폴더를 안 만드셨다면 './sensor.controller' 로 적어주세요.

@Module({
  imports: [],
  // 2. controllers 배열 안에 SensorController를 추가합니다.
  controllers: [AppController, SensorController], 
  providers: [AppService],
})
export class AppModule {}
