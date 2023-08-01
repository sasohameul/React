import { Route, Routes } from "react-router-dom";
import NewsHome from "./component2/NewsHome";
import Header from './layout/Header';
import Category from "./component2/Category";

function App() {

  return (

    <Routes>
      <Route element={<Header />}>

        <Route path="/" element={<NewsHome />} />
        <Route path="/:category" element={<NewsHome />} />

      </Route>

    </Routes>

  );

}

export default App;