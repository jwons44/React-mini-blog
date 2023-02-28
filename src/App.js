import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";

//Pages
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";
import Header from "./component/ui/Header";
import Footer from "./component/ui/Footer";

const Wrapper = styled.div`
    display: flex;
  flex-direction: column;
  height: 100vh;

  .contentWrapper {
    flex: 1;
  }
`

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <div className="contentWrapper">
          <Header />
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="post-write" element={<PostWritePage />} />
            <Route path="post/:postId" element={<PostViewPage />} />
          </Routes>
        </div>
        <Footer />
      </Wrapper>
    </BrowserRouter >
  );
}

export default App;
