import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { lightBlue } from '@mui/material/colors';

function TaskBox({ name, description, state, id, id_user }) {
    
    async function handleDeleteTask() {
        try {
          const response = await fetch(`http://localhost:8000/api/tasks/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json',
            },
          });
    
          if (response.ok) {
            // Handle successful deletion (e.g., update state or perform any other action)
            console.log('Task deleted successfully');
          } else {
            // Handle the case where the server returns an error status
            console.error(`Error deleting task: ${response.statusText}`);
          }
        } catch (error) {
          // Handle any network or other errors that may occur during the fetch operation
          console.error('Error deleting task:', error.message);
        }
      }
    
    const card = (
        <React.Fragment>
          <CardContent style={{marginTop: 15, marginLeft: 5, marginRight: 5, backgroundColor: 'lightblue'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginRight: '8px' }}>
                Name:
              </Typography>
              <Typography sx={{ fontSize: 16, color: 'black' }}>{name}</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginRight: '8px' }}>
                Description:
              </Typography>
              <Typography sx={{ fontSize: 16, color: 'black' }}>{description}</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginRight: '8px' }}>
                State:
              </Typography>
              <Typography sx={{ fontSize: 16, color: 'black' }}>{state}</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginRight: '8px' }}>
                ID:
              </Typography>
              <Typography sx={{ fontSize: 16, color: 'black' }}>{id}</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginRight: '8px' }}>
                ID:
              </Typography>
              <Typography sx={{ fontSize: 16, color: 'black' }}>{id_user}</Typography>
            </div>
            <Button size="small" onClick={handleDeleteTask}>
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

export default TaskBox;