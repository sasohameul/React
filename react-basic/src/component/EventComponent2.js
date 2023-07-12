import { useState } from "react";

function EventComponent2() {

  //state 여러개를 객체로 관리하기(중요***)
  const [form,setForm] = useState({title: '',
                                   topic: '',
                                  });

  const handleChange = (e) =>{
    // console.log(e.target.name);
    // console.log(e.target.value);

    const copy = {...form, [e.target.name] : e.target.value}; //객체 복사
    //console.log(copy); 현재 state값과 동일한 값이 출력됨
    
    console.log(copy);
    //state의 값을 업데이트해서 값을 유지
    setForm(copy);
    


  }

  const handleClick =()=>{

    alert(`${form.title}님의 할일 목록${form.topic}`);
    setForm({title: '', topic: ''});

  }

  const handleKeyUp=(e) => {
    if(e.key === 'Enter'){
      handleClick();
    }


  }


  return (

    <div>

      <h3>리액트의 이벤트 핸들링(인풋태그의 changeEvent)</h3>
      <input type="text" name="title" onChange={handleChange} value={form.title}/>
      변경되는 값: {form.title}
      <br />

      <h3>리액트 이벤트(keyUp)</h3>
      <input type="text" name="topic" onChange={handleChange} onKeyUp={handleKeyUp} value={form.topic}/>

      변경된 값: {form.topic}

      <h3>리액트 이벤트(click)</h3>
      <button onClick={handleClick}>클릭me!</button>



    </div>

  )


}


export default EventComponent2