export default function Footer(){
  return (
    <footer style={{ background:"linear-gradient(180deg,#000,#0a0e27)", color:"white", padding:"3rem 1rem", marginTop:40 }}>
      <div className="container" style={{ textAlign:"center" }}>
        <div style={{ color:"var(--accent-yellow)", fontWeight:900, fontSize:"1.6rem", letterSpacing:2, marginBottom:16 }}>★ The Star Auto Service</div>
        <div style={{ display:"flex", gap:"2rem", justifyContent:"center", marginBottom:16 }}>
          <a href="/" style={a}>Home</a>
          <a href="/services" style={a}>Services</a>
          <a href="/about" style={a}>About</a>
          <a href="tel:9722312886" style={a}>Call Us</a>
        </div>
        <div style={{ color:"var(--light-grey)" }}>
          © 2024 The Star Auto Service • 900 E Belt Line Rd, Richardson, TX 75081 • (972) 231-2886
        </div>
      </div>
    </footer>
  );
}
const a: React.CSSProperties = { color:"white", textDecoration:"none", fontWeight:700 };
