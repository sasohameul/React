import { useState } from "react";

function IterationComponentQ (){

  const arr = [
    {src : '/img/img1.png', title : '아이폰10', price: 1000},
    {src : '/img/img2.png', title : '아이폰11', price: 2000},
    {src : '/img/img3.png', title : '아이폰12', price: 3000},
    {src : '/img/img4.png', title : '아이폰13', price: 4000},
]

  const pic = arr.map((image, idx) =>  
                                        <div key={idx} style={{display: 'inline-block', padding:'30px'}}>
                                          <img onClick={()=> handleClick(image.src)}src={image.src} alt="#"/>
                                          <p>상품: {image.title}</p>
                                          <p>가격: {image.price}</p>
                                          </div>


  );

/* const handleClick =(e) =>{
  if(e.target.tagName !== 'IMG'){
    return;
  }
  setImg(e.target.src);
} */




  //1. img를 state로 관리
  const [img, setImg] = useState('/img/img1.png');  
  const handleClick = (src) => {

    setImg(src);

  }
  
  return (

    <div >
      <h3>이미지 데이터 반복해보기</h3>
      <div>
      <img src={img} alt="#" />
         <div >{pic} </div> 
         </div>
    </div>

  )

}

export default IterationComponentQ;