import { Controller, Post, Body, Logger } from '@nestjs/common';

// 1. 데이터 모델 (DTO) - 나중에 파일 분리하면 좋습니다!
export class SensorData {
  temperature: number;
  humidity: number;
  timestamp: string;
}

// 2. 컨트롤러 클래스 선언
@Controller('api/data') 
export class SensorController {
  private readonly logger = new Logger(SensorController.name);

  @Post() // 라즈베리파이가 POST로 보낼 때 작동함
  receiveData(@Body() data: SensorData) {
    // 수신된 데이터 로그 찍기
    this.logger.log(`--- 데이터 수신 성공 ---`);
    console.log(`온도: ${data.temperature}°C`);
    console.log(`습도: ${data.humidity}%`);
    console.log(`시간: ${data.timestamp}`);

    // 라즈베리파이(클라이언트)에게 줄 응답
    return {
      status: 'success',
      message: '데이터를 무사히 받았습니다.',
      receivedAt: new Date().toISOString()
    };
  }
}
