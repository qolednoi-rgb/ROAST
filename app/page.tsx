export default function Home() {
  return (
    <div style={{padding: "40px", fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto"}}>
      <h1>🔥 ROAST ME 🔥</h1>
      <textarea placeholder="Tell me about yourself (or someone else)..." rows={5} style={{width: "100%", padding: "12px"}} />
      <br /><br />
      <button style={{padding: "12px 24px", fontSize: "18px"}}>Generate Roast</button>
      <div style={{marginTop: "30px", padding: "20px", background: "#111", color: "#ff4444", borderRadius: "8px", minHeight: "100px"}}>
        Your roast will appear here...
      </div>
    </div>
  )
}
