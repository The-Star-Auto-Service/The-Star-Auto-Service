export default function AboutPage() {
  const values = [
    ["🤝","Trust & Integrity","Honest assessments and transparent pricing."],
    ["🌎","Bilingual Service","Fluent English & Spanish—no barriers."],
    ["⭐","Excellence","ASE-certified techs, latest diagnostics."],
    ["👨‍👩‍👧‍👦","Family Values","Courtesy and care that go the extra mile."],
    ["📍","Local Legacy","Deep roots in Richardson."],
    ["💰","Fair Pricing","Great service that’s accessible."],
  ];
  return (
    <section className="page" style={{ background:"linear-gradient(180deg,#0a0e27,#1e3a8a 50%,#0a0e27)" }}>
      <div className="container" style={{ padding:"6rem 1rem" }}>
        <div style={{ background:"linear-gradient(135deg,var(--primary-blue),var(--accent-yellow))", color:"white", padding:"4rem 2rem", borderRadius:30, textAlign:"center", marginBottom:"3rem" }}>
          <h1 style={{ fontSize:"3rem", textTransform:"uppercase", letterSpacing:3 }}>About The Star Auto Service</h1>
          <p style={{ marginTop:"1rem", fontSize:"1.2rem" }}>Serving Richardson with pride since our establishment.</p>
        </div>
        <div style={{ display:"grid", gap:"2rem", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))" }}>
          {values.map(([icon,title,desc]) => (
            <article key={title as string} style={{ background:"white", borderRadius:20, padding:"2rem", boxShadow:"0 30px 100px rgba(251,191,36,.25)" }}>
              <div style={{ fontSize:"3rem", marginBottom:"1rem" }}>{icon as string}</div>
              <h3 style={{ color:"var(--primary-blue)", textTransform:"uppercase" }}>{title as string}</h3>
              <p style={{ color:"var(--dark-grey)" }}>{desc as string}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
