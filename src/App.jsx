import { useState, useEffect } from 'react'
import './App.scss'

function App() {
  const data = ['임영웅', '아이유', '싸이', '이찬원', '정동원', '강다니엘', '김호중'];
  const [country, setCountry] = useState(data); // 전체 데이터
  const [pick, setPick] = useState([]); // 선택 변수(2개 중 택)

  // 1쌍의 선택 요소 가져오기
  const getPair = () => {
    let item1 = country[0];
    let item2 = country[1];
    setPick([item1, item2]);
  }

  // 선택하지 않은 요소 제거
  const removeItem = (id) => {
    console.log(id);
    const updateItem = country.filter((item, i) => {
      return i !== id;
    })
    setCountry(updateItem); // 제거한 배열 업데이트
    console.log(updateItem);
  }

  useEffect(() => {
    if(country.length > 1) getPair();
  }, [country]); // country 배열이 변경되면 나머지 한쌍을 다시 불러옴

  return (
    <div className="App">
      <h1>One Pick</h1>
      <div className="choice-box">
        <button onClick={() => { removeItem(1)}}>{pick[0]}</button>
        {
          country.length > 1 &&
          <button onClick={() => { removeItem(0)}}>{pick[1]}</button>
        }
      </div>
    </div>
  )
}

export default App
