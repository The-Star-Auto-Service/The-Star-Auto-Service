export default function ServicesPage() {
  const cards = [
    ["Battery Services","Professional testing, replacement, and maintenance."],
    ["Oil Changes","Premium oils and filters to extend engine life."],
    ["Electrical Diagnostics","Advanced equipment for accurate fixes."],
    ["Engine Replacement","Warranty-backed parts and expert installation."],
    ["Tire Rotation","Even wear, pressure check, safety inspection."],
    ["Heating & Cooling","A/C repair, heater service, refrigerant recharge."],
  ];
  return (
    <section className="page" style={{ background:"linear-gradient(180deg,#0a0e27,#1e3a8a 50%,#0a0e27)" }}>
      <div className="container" style={{ padding:"6rem 1rem" }}>
        <h1 style={{ textAlign:"center", color:"var(--accent-yellow)", fontSize:"3rem", textTransform:"uppercase", letterSpacing:4, marginBottom:"3rem" }}>Our Services</h1>
        <div style={{ display:"grid", gap:"2rem", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))" }}>
          {cards.map(([title, desc]) => (
            <article key={title} style={{ background:"white", borderRadius:20, overflow:"hidden", boxShadow:"0 30px 100px rgba(251,191,36,.25)"}}>
              <div style={{ height:180, background:"linear-gradient(135deg,var(--primary-blue),var(--accent-yellow))" }} />
              <div style={{ padding:"1.5rem" }}>
                <h3 style={{ color:"var(--primary-blue)", fontSize:"1.4rem", textTransform:"uppercase", letterSpacing:1 }}>{title}</h3>
                <p style={{ color:"var(--dark-grey)", lineHeight:1.8 }}>{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
