const stockData = {
    "\uc885\uac00": {
      "1691539200000": 49500.0,
      "1691625600000": 48200.0,
      "1691712000000": 49750.0,
      "1691971200000": 50200.0,
      "1692144000000": 49700.0,
      "1692230400000": 49700.0
      // ... 그 외 데이터
    }
  };
  
  // showStockGraph 함수 (차트 라이브러리를 사용한 데이터 표시)
  function showStockGraph(stockData) {
    const timestamps = Object.keys(stockData).map(timestamp => {
      const koreanTime = new Date(parseInt(timestamp)).toLocaleString('ko-KR', {timeZone: 'Asia/Seoul'});
      return koreanTime;
    });
    const prices = Object.values(stockData);
  
    // Chart 객체 생성 (위 코드와 동일)
    // ...
  }
  
  // 그래프 표시를 위한 호출 (stockData 변수를 showStockGraph 함수에 전달)
  showStockGraph(stockData['\uc885\uac00']);
  