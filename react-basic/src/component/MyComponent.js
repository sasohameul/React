import PropTypes from 'prop-types';

/* 매개변수에서부터 구조분해할당으로 넣을 수 있다. */
function MyComponent(/* x */ {name, age,addr, email,height}){
//하위 컴포넌트의 첫번째 매개변수에는 props가 전달됩니다.
 //const{name, age,addr} = x;

  return (
    <div>
      함수형 컴포넌트<br/>
      props: {name}<br/>
      props: {age}<br/>
      props: {addr}<br/>
      props: {height}<br/>

      props이메일:{email}<br/>
    </div>
    
  )
}


//Props값이 넘어오지 않을 때 기본값의 선언
/* 함수 밖에 컴포넌트 명.defaultProps = {} */
MyComponent.defaultProps = {
  email : 'aaa@naver.com',
  age : 0,
  addr : '부산',
  height : 170 +'cm'

}

//props값의 타입검증 (정적타입 지정)
//컴포넌트명.propTypes = {}
MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  addr: PropTypes.string.isRequired, //문자열이면서 반드시 전달되야함
}

export default MyComponent
