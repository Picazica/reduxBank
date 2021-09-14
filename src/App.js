import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionsCreators } from "./components/index";

function App() {
  const account = useSelector(state => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionsCreators,
    dispatch
  );

  return (
    <div className="App">
      <h1>Bank account(as a Store)</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <h3>{account}</h3>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
