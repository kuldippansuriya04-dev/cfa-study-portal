import { useEffect } from 'react'

function App() {
  useEffect(() => {
    window.location.href = '/src/frontend/index.html'
  }, [])
  return <div style={{background:"#1a1a2e",color:"white",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}><h2>Loading CFA Portal...</h2></div>
}

export default App
