function App() {
  return (
    <div style={{
      background: "black",
      color: "white",
      minHeight: "100vh",
      display: "flex"
    }}>

      <div style={{
        width: "250px",
        background: "#111",
        padding: "20px"
      }}>
        <h1 style={{ color: "cyan" }}>
          CFA Portal
        </h1>

        <p>Dashboard</p>
        <p>Subjects</p>
        <p>Mock Tests</p>
        <p>Analytics</p>
        <p style={{cursor:"pointer",color:"gold"}}>Comics</p>
        <p>Comics</p>
      </div>

      <div style={{
        flex: 1,
        padding: "40px"
      }}>
        <h1>Welcome Back 👋</h1>

        <div style={{
          display: "flex",
          gap: "20px"
        }}>

          <div style={{
            background: "#111",
            padding: "20px",
            border: "1px solid cyan"
          }}>
            <h2>Progress</h2>
            <h1>72%</h1>
          </div>

          <div style={{
            background: "#111",
            padding: "20px",
            border: "1px solid cyan"
          }}>
            <div style={{background:"#111",padding:"20px",border:"1px solid gold",borderRadius:"12px",marginTop:"20px"}}><h2 style={{color:"gold"}}>Comics</h2><p style={{color:"#aaa"}}>Visual CFA Learning</p><a href="/comics/cfa_quant_comics.html" target="_blank" style={{color:"gold",display:"block",marginTop:"10px"}}>Quantitative Methods</a><a href="/comics/cfa_ethics_comics.html" target="_blank" style={{color:"#ff6b6b",display:"block",marginTop:"8px"}}>Ethics</a></div>
            <h2>Mocks</h2>
            <h1>14</h1>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App
