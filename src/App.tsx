import log from "loglevel";
import "./App.less";
import { Layout } from "antd";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import styles from "./App.module.scss";
import Smash from "./pages/Smash/Smash";

const { Header, Content } = Layout;
// Log Config
log.setLevel(Config.logLevel);

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Header className={styles.header}>
            <Link to="/">Smash Or Pass</Link>
          </Header>
          <Content className={styles.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/smash" element={<Smash />} />
            </Routes>
          </Content>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
