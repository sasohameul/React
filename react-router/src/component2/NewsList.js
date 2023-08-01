import axios from "axios";
import { useEffect, useState } from "react"
import NewsArticle from "./NewsArticle";
import { useParams } from "react-router-dom";

import styled from './NewsList.module.css';

function NewsList(){
//2. 로딩 처리
  const[loading, setLoading] = useState(false);

//3. 쿼리파라미터 값 처리
const {category} = useParams();

// const result = category
//onsole.log(category);

const query = category === undefined ? '' : '&category=' + category;

//1. 데이터 처리
  const [data, setData] = useState([]);

  useEffect(() => {

    let url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=09a219d22027405290fd01165f729eb5`;

    (async () => {

      let { data: { articles } } = await axios.get(url);

      setData(articles);
      setLoading(true); //데이터가 도착하면 true

      //const result = await axios.get(url);
      //console.log(result);

    })();

  }, [query]); //마운트 이후에 실행되고, query 변수가 바뀔때 마다 실행 / 생명주기 아주 중요함

  if(!loading){

    return <div>데이터를 불러오는 중입니다.</div>;

  }

  //console.log(data);

return(

  <div>
  

<ul className={styled.wrap}>
        {/* <li>
          <a href="#"></a>
          <img src="#" />
          <article>
            <p>기자</p>
            <p>일자</p>
            <p>제목</p>
            <p>설명</p>
          </article>
        </li> */}

        {data.map((item,idx)=> <NewsArticle key={idx} item={item} /> )}
      </ul>

  </div>

)

}

export default NewsList