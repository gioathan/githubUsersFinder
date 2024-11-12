import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bottom-navbar" style={{ width: '100%', backgroundColor: '#2c2c2c', color: 'white', marginTop: 'auto' }}>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;