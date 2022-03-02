import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './ProjectCard.module.css';


export default function ProjectCard(props) {
  const { imgsrc, status, name} = props;
  return (
    <Card variant="outlined" sx={{ maxWidth: 228 }}>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Roboto:ital,wght@0,400;1,100&display=swap');
        </style>
      <CardMedia
        component="img"
        height="120"
        image={imgsrc}
        alt="green iguana"
      />
      <div style={{paddingTop:"7px"}}>
        <a className={styles.name} style={{fontSize:"14px", marginLeft: "10px", color:"#2D3748"}}>{name}</a>
        {status === "recruiting"
            ?<div className={styles.status}> recruiting </div>
            :<div className={styles.status2}> closed </div>
        }   
      </div>
      <p className={styles.content} style={{marginLeft:"10px", paddingRight:"15px"}}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that...
      </p>
      <CardActions>
        <a className={styles.content}>May 2020 - Aug 2020</a>
        <Button 
         className={styles.name}
         style={{color:"#2D3748", marginLeft:"5px", fontSize:"10px"}}>
             Read More
        </Button>
      </CardActions>
    </Card>
  );
}