import { Fragment } from "react";
import './css/App.css';
import x from './css/App.module.css';

function App() {

  //console.log(x);
  return (

    <Fragment>

      <header className="app_header">

        <p style={{color: 'white', textAlign: 'center'}}><b>안녕하세요</b></p>

      </header>

      <section className={x.wrap}>

        <div className={x.item}>
          {/* css선택자 이름은 중복으로 적으면 적용안됨 */}
          <p className="inner">css모듈</p>
          <input className="input-control" type="text" />
        </div>

      </section>
    </Fragment>


  )

}

export default App;