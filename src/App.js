import './App.css';
import Fullbody from './Component/Body/Fullbody/Fullbody';
import Header from './Component/Header/Header';
import Questionsandanswers from './Component/Questions-and-answers/Questionsandanswers';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Fullbody></Fullbody>
      <Questionsandanswers></Questionsandanswers>
    </div>
  );
}

export default App;
