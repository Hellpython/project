// 라즈베리파이의 실제 IP 주소로 꼭 바꿔주세요! (예: '192.168.0.15')
const PI_IP = '192.168.x.x'; 
const URL = `http://${PI_IP}:3000/api/data`;

async function sendData() {
  // 파이에서 만든 '고온 감지' 로직을 테스트하기 위해 일부러 30도가 넘는 32.5도를 세팅했습니다!
  const data = {
    temperature: 32.5, 
    humidity: 60.0,
    timestamp: new Date().toISOString()
  };

  try {
    console.log(`🚀 라즈베리파이(${URL})로 데이터 전송 시도 중...`);
    
    const response = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log('\n✅ [메인 PC] 통신 성공! 파이의 응답:');
    console.log(result);
  } catch (err) {
    console.error('\n❌ 통신 실패:', err.message);
    console.log('힌트: 라즈베리파이 서버가 켜져 있는지, IP 주소가 맞는지 확인해 주세요!');
  }
}

sendData();
