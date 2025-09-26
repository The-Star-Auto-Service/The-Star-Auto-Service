import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="page" style={{ background: "linear-gradient(135deg,#0a0e27, #1e3a8a 50%, #0a0e27)" }}>
        <div className="container" style={{ padding: "6rem 1rem" }}>
          <h2 style={{fontSize:"3rem",color:"var(--accent-yellow)",textAlign:"center",textTransform:"uppercase",letterSpacing:3,marginBottom:"2rem"}}>Our Mission</h2>
          <p style={{color:"white",lineHeight:1.9,maxWidth:900,margin:"0 auto",padding:"2rem",borderRadius:24,background:"rgba(255,255,255,.06)",border:"1px solid rgba(251,191,36,.3)"}}>
            At The Star Auto Service, we deliver exceptional automotive care with integrity and expertise. We treat every vehicle as if it were our own and build lasting relationships one repair at a time.
          </p>
        </div>
      </section>
      <section className="page" style={{ background: "linear-gradient(180deg,#000,#0a0e27 50%,#000)" }}>
        <div className="container" style={{ padding: "6rem 1rem" }}>
          <h2 style={{textAlign:"center",fontSize:"2.5rem",color:"var(--accent-yellow)",textTransform:"uppercase",letterSpacing:3,marginBottom:"3rem"}}>What Our Customers Say</h2>
          <div style={{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))"}}>
            {[
              ["Quickly diagnosed and repaired my vehicle. Attention to detail meant a lot.", "Trish Hammons"],
              ["Honest assessments, good price, quality service. Wonderful people!", "Beth Nystrom"],
              ["Fixed a mess another shop made. These guys are my new mechanics.", "Laura Dorsett"],
            ].map(([text, who], i) => (
              <article key={i} style={{background:"white",padding:"2rem",borderRadius:20,boxShadow:"0 20px 60px rgba(251,191,36,.2)"}}>
                <p style={{color:"var(--dark-grey)",fontStyle:"italic",marginBottom:"1rem"}}>“{text}”</p>
                <p style={{color:"var(--primary-blue)",fontWeight:800,textAlign:"right"}}>— {who}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="page" style={{ background: "linear-gradient(135deg,#f3f4f6,white 50%,#f3f4f6)" }}>
        <div className="container" style={{ padding: "6rem 1rem", display: "grid", gap: "3rem", gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <h2 style={{ color: "var(--primary-blue)", fontSize: "2.5rem", marginBottom: "1rem", textTransform: "uppercase" }}>Visit Us</h2>
            <div style={{ background: "white", borderRadius: 18, padding: "1.5rem", marginBottom: "1rem" }}>
              <h3 style={{ color: "var(--primary-blue)" }}>📍 Address</h3>
              <p style={{ color: "var(--dark-grey)" }}>900 E Belt Line Rd<br/>Richardson, TX 75081</p>
            </div>
            <div style={{ background: "white", borderRadius: 18, padding: "1.5rem" }}>
              <h3 style={{ color: "var(--primary-blue)" }}>🕐 Hours</h3>
              <p style={{ color: "var(--dark-grey)" }}>Mon–Fri: 8:00 AM – 6:30 PM<br/>Sat: 8:00 AM – 4:00 PM<br/>Sun: Closed</p>
            </div>
          </div>
          <div style={{ borderRadius: 18, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,.3)" }}>
            <iframe src="https://www.google.com/maps?q=900%20E%20Belt%20Line%20Rd%20Richardson%20TX%2075081&output=embed" width="100%" height="420" style={{ border: 0 }} loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
