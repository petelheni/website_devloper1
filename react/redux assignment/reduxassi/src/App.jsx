import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./component/Counter";
import store from "./store";
import AddTodos from "./component/AddTodos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import RecAddTodos from "./component/RecAddTodos";
import Home from "./component/Home";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Counter />}></Route>
            <Route path="/task2" element={<AddTodos />}></Route>
            <Route
              path="/task3"
              element={
                <RecoilRoot>
                  <RecAddTodos />
                </RecoilRoot>
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;