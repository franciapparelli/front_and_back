import { Card, Stack } from '@mui/material'

export default function UserBox({ name, password, id }) {
    return (
        <Card variant='outlined'>
            {name}
            {password}
            {id}
        </Card>
    )
}