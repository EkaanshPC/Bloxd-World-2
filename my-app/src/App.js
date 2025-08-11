
import './App.css';
import ScrambledText from './ScrambledText';

function App() {
  return (
    <div className="App">

<ScrambledText
  className="scrambled-text-demo"
  radius={100}
  duration={1.2}
  speed={0.5}
  scrambleChars={".:"}
>
</ScrambledText>

    </div>
  );
}

export default App;
