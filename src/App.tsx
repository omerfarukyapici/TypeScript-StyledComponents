import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

import GlobalStyle from "./components/Global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
