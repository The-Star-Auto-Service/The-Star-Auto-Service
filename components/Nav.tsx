"use client";
import Link from "next/link";
export default function Nav(){
  return (
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:50,background:"linear-gradient(180deg,rgba(0,0,0,.95),rgba(0,0,0,.7))",backdropFilter:"blur(12px)",boxShadow:"0 10px 40px rgba(251,191,36,.2)"}}>
      <div className="container" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", height:80 }}>
        <Link href="/" className="logo" style={{ color:"var(--accent-yellow)", fontWeight:900, letterSpacing:2, textDecoration:"none", display:"flex", alignItems:"center", gap:10 }}>
          <img src="/logo-star.svg" width={28} height={28} alt="Star" />
          The Star Auto Service
        </Link>
        <ul style={{ listStyle:"none", display:"flex", gap:"2rem" }}>
          <li><Link href="/" style={linkStyle}>Home</Link></li>
          <li><Link href="/services" style={linkStyle}>Services</Link></li>
          <li><Link href="/about" style={linkStyle}>About</Link></li>
          <li><a href="tel:9722312886" style={{...pill}}>📞 (972) 231-2886</a></li>
        </ul>
      </div>
    </nav>
  );
}
const linkStyle: React.CSSProperties = { color:"#fff", textDecoration:"none", fontWeight:700 };
const pill: React.CSSProperties = { background:"linear-gradient(135deg,var(--accent-yellow),#ff8800)", color:"#000", padding:"10px 16px", borderRadius:999, textDecoration:"none", fontWeight:900 };
