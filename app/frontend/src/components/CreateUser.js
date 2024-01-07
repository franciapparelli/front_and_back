import { useState } from "react"
import { TextField, Button } from "@mui/material"

function CreateUser() {
    const [textName, setTextName] = useState('')
    const [textPassword, setTextPassword] = useState('')
    function handleTextName(e) {
        setTextName(e.target.value)
    }   
    function handleTextPasswor(e) {
        setTextPassword(e.target.value)
    }
    function handleClickForm(e) {
        e.preventDefault()
        
        fetch('http://localhost:8000/api/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: textName,
                password: textPassword
            })
        }).then(() => {
            setTextName('')
            setTextPassword('')
        })
    }
    return (
        <form>
            <TextField id="outlined-basic" label="Name:" variant="outlined" onChange={handleTextName} style={{marginLeft: 15}}/>
            <TextField id="outlined-basic" label="Password:" variant="outlined" onChange={handleTextPasswor} style={{marginLeft: 15, marginRight: 15}}/>
            <Button variant="contained" onClick={handleClickForm} style={{marginTop: 6}}>Create User</Button>
        </form>
        
    )
}

export default CreateUser;