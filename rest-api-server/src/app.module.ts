// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensorController } from './sensor/sensor.controller';
import { SensorService } from './sensor/sensor.service'; // 추가

@Module({
  imports: [],
  controllers: [AppController, SensorController],
  providers: [AppService, SensorService], // 여기에 SensorService 추가!
})
export class AppModule {}
