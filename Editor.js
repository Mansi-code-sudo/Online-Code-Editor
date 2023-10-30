import 'codemirror/lib/codemirror.css'; // for code editor css
import 'codemirror/theme/material.css'; // for theme of the code editor
import 'codemirror/mode/xml/xml'; // for the language html
import 'codemirror/mode/css/css'; // for the language css
import 'codemirror/mode/javascript/javascript'; // for the language javascript
import { Controlled as ControlledEditor } from 'react-codemirror2'; // for importing the text editor
import { useState } from 'react';


function Editor(props){

    const {
        language,
        displayName,
        value,
        onChange
    }=props

    const[open,setOpen]=useState(true);

    function handleChange(editor,data,value){
        onChange(value)
    }

    return(
        <div className={`editor-container ${open? ' ' :'collapsed'}`}>
            <div className='editor-title'>
                {displayName}
                <button onClick={()=>setOpen(prevOpen=>!prevOpen)}>O/C</button>
            </div>
            <ControlledEditor
            onBeforeChange={handleChange}
            value={value}
            className='code-mirror-wrapper'
            options={{
                lineWrapping:true,
                lint:true,
                mode:language,
                theme:'material',
                lineNumbers:true
            }}
            />
        </div>
        
    )
}

export default Editor;