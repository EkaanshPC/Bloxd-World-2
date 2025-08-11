
import './App.css';

// Component inspired by Tom Miller from the GSAP community
// https://codepen.io/creativeocean/pen/NPWLwJM

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
