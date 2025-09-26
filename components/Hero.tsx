"use client";
import ContactModal from "./ContactModal";
export default function Hero(){
  return (
    <section style={{ position:"relative", height:"92vh", background:"#000", display:"grid", placeItems:"center" }}>
      <div aria-hidden style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,#0a0e27 0%, #1e3a8a 50%, #000 100%)"}}/>
      <div aria-hidden style={{ position:"absolute", bottom:"20%", left:"-10%", width:"120%", height:160, background:"#333", transform:"perspective(500px) rotateX(50deg)", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"45%", left:0, width:"100%", height:"10%", background:"repeating-linear-gradient(90deg,var(--accent-yellow) 0 50px, transparent 50px 100px)", animation:"road 1s linear infinite"}}/>
        <style>{`@keyframes road{to{transform:translateX(-100px)}}`}</style>
      </div>
      <div style={{ position:"relative", textAlign:"center", padding:"2rem" }}>
        <h1 style={{ fontSize:"clamp(2.6rem,5vw,5rem)", color:"var(--accent-yellow)", fontWeight:900, letterSpacing:4, textTransform:"uppercase", textShadow:"0 0 40px rgba(251,191,36,.8), 5px 5px 0 var(--primary-blue)" }}>
          The Star Auto Service
        </h1>
        <p style={{ color:"white", fontSize:"clamp(1.1rem,2vw,2rem)", letterSpacing:6, textTransform:"uppercase", marginTop:12 }}>
          Excellence in Every Mile
        </p>
        <a href="tel:9722312886" style={{ display:"inline-block", marginTop:24, padding:"16px 28px",
          background:"linear-gradient(135deg,var(--accent-yellow),#ff8800)", color:"#000", borderRadius:60, fontWeight:900, textDecoration:"none", letterSpacing:2 }}>
          📞 (972) 231-2886
        </a>
      </div>
      <ContactModal />
    </section>
  );
}
