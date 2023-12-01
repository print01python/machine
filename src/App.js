import store from "store";

import Main from "./components/Main";
import { Provider } from "react-redux";
import Error404 from "components/Error404";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
