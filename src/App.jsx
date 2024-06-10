import "./App.css";
import React, {useState} from "react";
import { add, sub} from "./redux/slices/calculatorSlice";
import { useSelector, useDispatch } from "react-redux";
// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const [value, setValue] = useState(0);
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch;
  


  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input 
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}/> 
        만큼을 
        <button onClick={() => dispatch(add(value))}>더할게요</button>
        <button onClick={() => dispatch(sub(value))}>뺄게요</button> 
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
        <p>0</p>
      </div>
    </div>
  );
}

export default App;
