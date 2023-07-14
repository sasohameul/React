import { useEffect, useRef, useState } from "react"

function HookQ(){


  const [form, setForm] = useState({iden: '', pass:''});

  const idInputRef = useRef(null);
  useEffect(()=>{
    //아이디에 포커스
    console.log('첫번째 마운트실행시');
    idInputRef.current.focus();

  }, [form.iden])

  const handleChange =(e)=>{
    
    const copy = {...form, 'iden': e.target.value, 'pass': e.target.value};
    setForm(copy);
  }

const handleClick = () =>{
  console.log(form.value);

  if( form.iden === ''){
    alert(`아이디는 필수입니다.`);
    idInputRef.current.focus();
    return;
  } else {

    alert(`${form.iden}님 환영합니다.`);

  }

}
  
  return(

    <div>
      <input onChange={handleChange} type="text" name="id" placeholder="아이디" ref={idInputRef} /><br/>
      
      <input onChange={handleChange} type="password" name="pw" placeholder="비밀번호" /><br/>
      
      <button onClick={handleClick}>로그인</button>

    </div>



  )


}


export default HookQ