import { useState } from "react"
import { TextField, Button } from "@mui/material"

export default function CreateUser() {
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
            <TextField id="outlined-basic" label="Name:" variant="outlined" onChange={handleTextName} />
            <TextField id="outlined-basic" label="Password:" variant="outlined" onChange={handleTextPasswor} />
            <Button variant="contained" onClick={handleClickForm}>Create User</Button>
        </form>
        
    )
}