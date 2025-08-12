import './App.css';
import { useRef } from "react";
import VariableProximity from './VariableProximity';

function App() {
  const containerRef = useRef(null);
  const words = ["Bloxd", "World"];

  return (
    <div ref={containerRef} style={{ fontFamily: "sans-serif" }}>
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px 30px",
          background: "#111",
          color: "white",
          position: "sticky",
          top: 0,
          zIndex: 100,
          height: "70px", // 👈 Explicit height
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="/bloxdlandslogo.png"
            alt="Logo"
            style={{ width: "40px", height: "40px" }}
          />
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>Bloxd Lands</span>
        </div>

        <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0 }}>
          <li><a href="#home" style={navLinkStyle}>Home</a></li>
          <li><a href="#about" style={navLinkStyle}>About</a></li>
          <li><a href="#play" style={navLinkStyle}>Play</a></li>
          <li><a href="#contact" style={navLinkStyle}>Contact</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 70px)", // 👈 Adjust for navbar height
          paddingTop: "80px", // 👈 Prevent overlap
          paddingBottom: "40px",
          background: "linear-gradient(to bottom, #222, #000)",
          color: "white",
          textAlign: "center",
          gap: "20px"
        }}
      >
        <img
          src="/herobanner.png"
          alt="Hero Banner"
          style={{ maxWidth: "100%", height: "auto" }}
        />

        {words.map((word, index) => (
          <VariableProximity
            key={index}
            label={word}
            className="variable-proximity-demo"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        ))}

        <p style={{ maxWidth: "600px", fontSize: "18px", opacity: 0.8 }}>
          The Place For BLOXD mods!
        </p>

        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}>
          <button style={btnStyle}>Play Now</button>
          <button style={{ ...btnStyle, background: "transparent", border: "2px solid white" }}>
            Learn More
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#111",
          color: "white",
          textAlign: "center",
          padding: "20px",
          fontSize: "14px"
        }}
      >
        © {new Date().getFullYear()} NeonJet Studios. All rights reserved.
      </footer>
    </div>
  );
}

const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
  transition: "color 0.2s",
  cursor: "pointer"
};

const btnStyle = {
  background: "#00b894",
  border: "none",
  color: "white",
  padding: "12px 20px",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "background 0.2s"
};

export default App;

