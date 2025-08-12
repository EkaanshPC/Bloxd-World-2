import './App.css';
import { useRef } from "react";
import RotatingText from './RotatingText';
import { Helmet } from "react-helmet";

function App() {
  const containerRef = useRef(null);

  return (
    <>
      <Helmet>
        <title>Bloxd Land</title>
        <meta name="description" content="Bloxd Lands is a community-driven site where you can upload, vote, and explore creative things for Bloxd. Built by NeonJet Studios." />
        <meta property="og:title" content="Bloxd Land" />
        <meta property="og:description" content="Explore Bloxd Mods!" />
        <meta property="og:image" content="/herobanner.png" />
        <meta property="og:url" content="https://bloxd-lands.pages.dev" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

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
            height: "70px",
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
            minHeight: "calc(100vh - 70px)",
            paddingTop: "80px",
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

          <p style={{ fontSize: "22px", fontWeight: "500", textAlign: "center" }}>
            Bloxd Lands is the #1 place for{" "}
            <span style={{ display: "inline-block" }}>
              <RotatingText
                texts={["Mods", "Texture Packs", "Schematics"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
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
    </>
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