import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UserBox({ name, password, id }) {
    
    async function handleDeleteUser() {
        try {
          const response = await fetch(`http://localhost:8000/api/users/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json',
            },
          });
    
          if (response.ok) {
            // Handle successful deletion (e.g., update state or perform any other action)
            console.log('User deleted successfully');
          } else {
            // Handle the case where the server returns an error status
            console.error(`Error deleting user: ${response.statusText}`);
          }
        } catch (error) {
          // Handle any network or other errors that may occur during the fetch operation
          console.error('Error deleting user:', error.message);
        }
      }
    
    const card = (
        <React.Fragment>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginRight: '8px' }}>
                Name:
              </Typography>
              <Typography sx={{ fontSize: 16, color: 'black' }}>{name}</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginRight: '8px' }}>
                Password:
              </Typography>
              <Typography sx={{ fontSize: 16, color: 'black' }}>{password}</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginRight: '8px' }}>
                ID:
              </Typography>
              <Typography sx={{ fontSize: 16, color: 'black' }}>{id}</Typography>
            </div>
            <Button size="small" onClick={handleDeleteUser}>
          Delete User
        </Button>
          </CardContent>
        </React.Fragment>
      );

    return (
        <Card variant='outlined'>
            {card}
        </Card>
    )
}