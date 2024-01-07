import { useState } from "react"
import { TextField, Button } from "@mui/material"

function CreateTask(user_id) {
    const [textName, setTextName] = useState('')
    const [textDescription, setTextDescription] = useState('')
    const [textState, setTextState] = useState('')
    var s = JSON.stringify(user_id.user_id);
    var d = JSON.parse(s);
    function handleTextName(e) {
        setTextName(e.target.value)
    }   
    function handleTextDescription(e) {
        setTextDescription(e.target.value)
    }
    function handleTextState(e) {
        setTextState(e.target.value)
    }
    function handleClickForm(e) {
        e.preventDefault()
        
        fetch('http://localhost:8000/api/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: textName,
                description: textDescription,
                state: textState,
                id_user: d
            })
        }).then(() => {
            setTextName('')
            setTextDescription('')
            setTextState('')
        })
        console.log(textName, textDescription, textState, d)
    }
    return (
        <form>
            <TextField id="outlined-basic" label="Name:" variant="outlined" onChange={handleTextName} style={{marginLeft: 15}}/>
            <TextField id="outlined-basic" label="Description:" variant="outlined" onChange={handleTextDescription} style={{marginLeft: 15, marginRight: 15}}/>
            <TextField id="outlined-basic" label="State:" variant="outlined" onChange={handleTextState} style={{marginLeft: 15, marginRight: 15}}/>
            <Button variant="contained" onClick={handleClickForm} style={{marginTop: 6}}>Create Task</Button>
        </form>
        
    )
}

export default CreateTask;