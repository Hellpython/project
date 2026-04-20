import { Injectable, Logger } from '@nestjs/common';

export class SensorData {
  temperature: number;
  humidity: number;
  timestamp: string;
}

@Injectable()
export class SensorService {
  private readonly logger = new Logger(SensorService.name);

  processSensorData(data: SensorData) {
    this.logger.log('--- [Raspberry Pi Server] 데이터 처리 시작 ---');

    // 1. 단순한 상태 판별 로직 추가
    const status = data.temperature > 30 ? 'WARNING' : 'NORMAL';

    if (status === 'WARNING') {
      this.logger.warn(`🔥 고온 감지! 현재 온도: ${data.temperature}°C`);
    }

    // 2. 처리 결과 반환 (장치 식별자 포함)
    return {
      success: true,
      deviceId: 'RPI-NODE-01', // 이 서버가 라즈베리파이임을 알림
      status: status,
      data: {
        temp: data.temperature,
        humi: data.humidity,
      },
      processedAt: new Date().toISOString(),
      message: '라즈베리파이에서 데이터를 성공적으로 가공했습니다.',
    };
  }
}
