import { useState } from "react"

function IterationComponent2() {

  //1.
  const [list, setList] = useState([{ id: 1, topic: 'hello' },
                                    { id: 2, topic: 'bye' }
                                    //이 자리에 추가..
                                   ]);

  //2. input데이터 state
  const [inputData, setInputData] = useState('');
  
  //3. input데이터 핸들링
  const handleChange = (e) => {
    setInputData(e.target.value);
  }
  //4. 클릭이벤트 생성
  const handleClick = () => {
    //id는 마지막 아이디보다 큰 숫자
    
    //console.log(list[list.length-1].id +1);
    const obj = [{id:list[list.length-1].id +1, topic: inputData}];
    
    //기존 배열에 합치기 (concat or spread )
    const newData = list.concat(obj); 
    //const newData = [...list, ...obj];
    setList(newData);
    setInputData(''); //공백으로 초기화
    
    /* 이렇게하면 기존의 값들이 다 날라감!
    const copy = [{id:3, topic: inputData}];
    setList(copy);
    */  
  }
  
  //5. 삭제는 id가 필요함
  const handleRemove = (id) => {

      //return에 true가 걸린요소만 새로운 배열을 만든다.
      /* const result = list.filter( (item, idx) => {
        console.log(item);
        console.log(idx);

        return item.id != id;
      }); */

      const result = list.filter(item => item.id !== id);

      //console.log(result); (클릭한 아이디빼고 나머지 값들을 배열에 다시 담아준 결과)
      setList(result);

    }
                                                        //함수를 넣음
    const newList = list.map(item =><li key={item.id} onDoubleClick={() => handleRemove(item.id) }>{item.topic}</li>)



  return (
    <div>

      <h3>할일 목록 만들기</h3>
      <input type="text" onChange={handleChange} value={inputData} />
      <button type="button" onClick={handleClick}>추가하기</button>

      <ul>
        {newList}


      </ul>


    </div>



  )








}

export default IterationComponent2