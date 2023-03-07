import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";

//Pages
import PostMainPage from "./component/page/PostMainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";
import MainPage from "./component/page/MainPage";
import Header from "./component/ui/Header";
import Footer from "./component/ui/Footer";
import CopyPage from "./component/page/CopyPage";

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
            {/* <Route index element={<CopyPage />} /> */}
            <Route path="post" element={<PostMainPage />} />
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
