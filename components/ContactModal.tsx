"use client";
import { useState } from "react";
export default function ContactModal(){
  const [open,setOpen]=useState(false);
  const [sending,setSending]=useState(false);
  const [ok,setOk]=useState<null|boolean>(null);
  async function submit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault(); setSending(true); setOk(null);
    const fd = new FormData(e.currentTarget);
    const res = await fetch("/api/contact",{ method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({
      name:fd.get("name"), email:fd.get("email"), phone:fd.get("phone"), message:fd.get("message")
    })});
    setSending(false); setOk(res.ok);
    if(res.ok){ e.currentTarget.reset(); setTimeout(()=>setOpen(false), 1000); }
  }
  return (
    <>
      <button onClick={()=>setOpen(true)} style={{
        position:"fixed", right:24, bottom:24, zIndex:60,
        background:"linear-gradient(135deg,var(--primary-blue) 0%, var(--accent-yellow) 100%)",
        color:"white", padding:"14px 22px", borderRadius:999, fontWeight:900, border:"none", cursor:"pointer"
      }}>Contact Us</button>
      {open && (
        <div onClick={()=>setOpen(false)} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.6)", display:"grid", placeItems:"center", zIndex:70 }}>
          <form onClick={(e)=>e.stopPropagation()} onSubmit={submit} style={{
            width:"min(92vw,520px)", background:"linear-gradient(135deg, white, #f3f4f6)",
            borderRadius:24, padding:"2rem", boxShadow:"0 30px 100px rgba(251,191,36,.4)"
          }}>
            <h2 style={{ color:"var(--primary-blue)", textAlign:"center", marginBottom:16 }}>Get In Touch</h2>
            <input required name="name" placeholder="Your Name" style={inp}/>
            <input required type="email" name="email" placeholder="Your Email" style={inp}/>
            <input name="phone" placeholder="Your Phone" style={inp}/>
            <textarea required name="message" placeholder="How can we help you?" rows={4} style={inp}/>
            <button disabled={sending} type="submit" style={{
              width:"100%", padding:"14px", borderRadius:12, border:"none",
              background:"linear-gradient(135deg,var(--primary-blue),var(--accent-yellow))",
              color:"white", fontWeight:900, cursor:"pointer"
            }}>{sending ? "Sending..." : "Send Message"}</button>
            {ok===true && <p style={{color:"green",marginTop:10}}>Message sent!</p>}
            {ok===false && <p style={{color:"crimson",marginTop:10}}>Failed to send. Try again.</p>}
          </form>
        </div>
      )}
    </>
  );
}
const inp: React.CSSProperties = { width:"100%", padding:"12px 14px", marginBottom:12, borderRadius:12, border:"1px solid #e5e7eb", outline:"none" };
