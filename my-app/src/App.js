import './App.css';
import { useRef } from "react";
import Image from 'some-image-lib';
import VariableProximity from './VariableProximity';

function App() {
  const containerRef = useRef(null);

  return (
    <div
      className="App"
      ref={containerRef}
      style={{ position: 'relative' }}
    >
      <img
        className="logo"
        src="./pixil-frame-0 (21).png"
        alt="Logo"
      />
      <VariableProximity
        label={'Bloxd World'}
        className={'variable-proximity-demo'}
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={100}
        falloff='linear'
      />
    </div>
  );
}

export default App;
