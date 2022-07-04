import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Lnb from './component/Lnb';
import Main from './component/Main';
import View from './component/View';
import Search from './component/Search';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>        
        
          <Routes>
            <Route path="/" element={
              <Main />
            }/>
            <Route path="/Publist/Search/:Keyword" element={
              <>
                <Lnb />
                <main>
                  <Header />
                  <Search />
                </main>
              </>
            }/>
            <Route path="/Publist/:Channel/:Folder" element={
              <>
                <Lnb />
                <main>
                  <Header />
                  <View />
                </main>
              </>
            }/>
          </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;