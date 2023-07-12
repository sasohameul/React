import { useState } from "react"

function EventComponentQ2 (){

  const [form, setForm] = useState({put: '', contents:''});


const handleChange = (e)=>{

  //setForm({put: e.target.value, contents:form.contents});
  const copy = {...form, [e.target.name] : e.target.value};
  console.log(copy);
  setForm(copy);
  
  
}

const handleClick = ()=>{
  
  
  setForm({put: '',  contents:form.put});

}



return(

<div>
  <h3>인풋 데이터 핸들링(실습)</h3>

  <input type="text" name="put" onChange={handleChange} value={form.put}/>
  <button onClick={handleClick}>추가하기</button>
  <h3>결과</h3>
      {form.contents}
</div>

)

}

export default EventComponentQ2