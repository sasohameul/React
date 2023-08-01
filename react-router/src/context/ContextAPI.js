import { createContext} from "react";

//전역으로 사용할 컨텍스트API 선언
const ColorContext = createContext ({color: 'red'});// 괄호 안에는 객체형태의 초기값 설정

console.log(ColorContext);

export default ColorContext;