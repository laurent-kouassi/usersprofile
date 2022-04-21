import './App.css';
import { Users } from './screens/users';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
}

export default App;