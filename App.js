import { useEffect, useState } from "react";
import Editor from "./components/Editor";

function App() {

  const[html,setHtml]=useState('');
  const[css,setCss]=useState('');
  const[js,setJs]=useState('');
  const[srcdoc,setSrcdoc]=useState('');

  useEffect(()=>{
    const timeout= setTimeout(()=>{
      setSrcdoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>`)
    },250)

    return ()=> clearTimeout(timeout)
  },[html,css,js])


  return (
    <div>
      <div className="pane top-pane">
        <Editor language='xml' displayName="HTML" value={html} onChange={setHtml}/>
        <Editor language='css' displayName="CSS" value={css} onChange={setCss}/>
        <Editor language='javascript' displayName="JS" value={js} onChange={setJs}/>
      </div>

      <div className="pane">
        <iframe srcdoc={srcdoc} title="output" sandbox="allow-scripts" frameBorder={0} width="100%" height="100%"/>
      </div>
    </div>
    
  );
}

export default App;
