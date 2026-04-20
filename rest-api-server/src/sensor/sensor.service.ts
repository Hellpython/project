import { Injectable, Logger } from '@nestjs/common';

export class SensorData {
  temperature: number;
  humidity: number;
  timestamp: string;
}

@Injectable()
export class SensorService {
  private readonly logger = new Logger(SensorService.name);

  // 컨트롤러가 시키는 일을 실제로 처리하는 함수
  processSensorData(data: SensorData) {
    this.logger.log('--- [Service] 데이터 처리 중 ---');
    
    // 로직 예시: 온도가 30도가 넘으면 경고 로그 추가
    if (data.temperature > 30) {
      this.logger.warn(`🔥 고온 감지! 현재 온도: ${data.temperature}°C`);
    }

    console.log(`🌡️  가공된 온도: ${data.temperature}°C`);
    console.log(`💧 가공된 습도: ${data.humidity}%`);

    return {
      success: true,
      processedAt: new Date().toISOString(),
      message: '서비스에서 안전하게 처리되었습니다.',
    };
  }
}
