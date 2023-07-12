import React from "react";

//클래스형에서 props와 state
class StateComponent2 extends React.Component {

  //클래스형 컴포넌트가 생성될 때 생성자로 프롭스 전달
  constructor(props){
    super(props); //부모님 생성자와 반드시 연결해주어야한다.
    //state생성
    this.state = {
      name: '홍길동',
      age: props.age
      
    }
  }
  
  //클래스 안에서는 const와 같은 예약어를 사용하지 않는다.
  handleState = () =>{
    //비동기적으로 state를 변경
    this.setState({name: '이순신', age: 30});

  }

  //리엑트에 있는 render함수 오버라이딩
  render() {
    //const {age}= this.props;

    return (
      <div>
        <div>클래스형 컴포넌트</div>

        state값: {this.state.name}<br/>
        state값: {this.state.age}

        <button onClick={this.handleState}>스테이트 체인지</button>

      </div>



      )
    }

}

export default StateComponent2;

