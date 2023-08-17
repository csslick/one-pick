import { useState, useEffect } from 'react'
import './App.scss'

function App() {
  const data = [
    { name: '임영웅', image: '/images/iyw.jpg' },
    { name: '아이유', image: '/images/iu.jpg' },
    { name: '싸이', image: '/images/psy.jpg' },
    { name: '이찬원', image: '/images/leechan.jpg' },
    { name: '정동원', image: '/images/jdw.jpg' },
    { name: '강다니엘', image: '/images/kd.jpg' },
    { name: '김호중', image: '/images/khj.jpg' },
  ];
  const [star, setStar] = useState(data); // 전체 데이터
  const [pick, setPick] = useState([]); // 선택 변수(2개 중 택)

  // 1쌍의 선택 요소 가져오기
  const getPair = () => {
    let item1 = star[0];
    let item2 = star[1];
    setPick([item1, item2]);
  }

  // 제거 함수
  const removeItem = (id) => {
    console.log(id);
    const updateItem = star.filter((item, i) => {
      return i !== id;
    })
    setStar(updateItem); // 제거한 배열 업데이트
    console.log(updateItem);
  }

  useEffect(() => {
    getPair();
  }, [star]); // country 배열이 변경되면 나머지 한쌍을 다시 불러옴

  return (
    <div className="App">
      <h1>One Pick</h1>
      <div className="choice-box">
        {
          pick.length > 0 &&
          <button
            style={{ backgroundImage: `url(${pick[0].image})` }}
            onClick={() => { removeItem(1) }}>{pick[0].name}
          </button>
        }
        {
          pick.length > 0 && star.length > 1 ?
            <button
              style={{ backgroundImage: `url(${pick[1].image})` }}
              onClick={() => { removeItem(0) }}>{pick[1].name}
            </button> : <button></button>
        }
      </div>
      { star.length === 1 && 
        <>
          <button 
            className='btn-restart' 
            onClick={() => {location.reload()}}
          >재시작</button> 
          <p>당신은 {pick[0].name}을 가장 좋아합니다!</p>
        </>  
      } 
    </div>
  )
}

export default App
