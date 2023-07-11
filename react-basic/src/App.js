import { Fragment } from "react"
import MyComponent from "./component/MyComponent"
import MyComponent2 from "./component/MyComponent2"
import MyComponent3 from "./component/MyComponent3";

function App() {

  const name = '홍길동';


  return (
    
    <Fragment>
    <div>나의 새로운 컴포넌트</div>
    
    <MyComponent name={'홍길동'} age={20}  addr={'춘천'} email={'상위@naver.com'}/>
    {/* 같은 컴포넌트여도 매개변수의 값을 다르게 줄 수 있다. 
    또한 기본 props값을 정해놓으면 매개변수값이 없더라도 기본값으로 출력된다.*/}
    <MyComponent name={'장윤정'} age={31} addr={'경기도'} />
   
   {/* 클래스형 컴포넌트 */}
    <MyComponent2 name={'신사임당'} age={40} />

    {/* 함수형 컴포넌트 MyComponent3를 생성합니다.
        props는 title, content, writer를 전달합니다.
        writer는 기본값은 'admin으로 선언해주세요' */}

    <MyComponent3 title={'모닝콜짹짹이들의 성공시대'} content={'꼴찌의 반란'} />    

    </Fragment>
    )


}

export default App 