import styles from './PageProfile.module.css';
import {Avatar} from '@material-ui/core';
import {ButtonBase, Grid} from '@material-ui/core';
import { useState, useEffect } from "react";
import Profile from '../Components/Profile';
import Project from '../Components/Project';
import Setting from '../Components/Setting';
import Like from '../Components/Like';
import defaultimg from '../imgs/default.png';

function PageProfile(){
    const [page,setPage] = useState("Profile");

    return(

        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,100&display=swap');
            </style>
            <div className = {styles.header}>
                <div style = {{height:"100%", width:"12%", float:"left"}}>
                    <Avatar 
                        variant = "square"
                        src={defaultimg}
                        style={{height:"70%", width:"60px", marginTop:"5px", marginLeft:"20px"}}
                        className = {styles.pic} />
                    <ButtonBase
                        style = {{marginLeft:"41px", color:"white", marginBottom:"3px", fontSize:"5px"}}> 
                        <u>edit</u> 
                    </ButtonBase>
                </div>
                <div style={{marginTop:"15px"}}>
                    <strong
                     className = {styles.fonts}
                     style = {{fontSize:"18px"}}> Xiao Ming
                    </strong>
                    <p className = {styles.fonts}
                     style = {{fontSize:"10px", color:"#edf0fc", marginTop:"5px"}}>
                        One sentence to introduce myself
                    </p>
                </div>
            </div>

            <div className = {styles.navi}>
                <ButtonBase className = {page == "Profile" ? styles.button2 : styles.button} 
                 style={{width:"20%", height:"100%"}}
                 onClick = {() => setPage("Profile")}>My profile</ButtonBase>
                <ButtonBase className = {page == "Project" ? styles.button2 : styles.button}
                 style={{width:"20%", height:"100%"}}
                 onClick = {() => setPage("Project")}>My project</ButtonBase>
                <ButtonBase className = {page == "Collection" ? styles.button2 : styles.button} 
                 style={{width:"20%", height:"100%"}}
                 onClick = {() => setPage("Collection")}>My collection</ButtonBase>
                <ButtonBase className = {page == "Like" ? styles.button2 : styles.button} 
                 style={{width:"20%", height:"100%"}}
                 onClick = {() => setPage("Like")}>My like</ButtonBase>
                <ButtonBase className = {page == "Setting" ? styles.button2 : styles.button}
                 style={{width:"20%", height:"100%"}}
                 onClick = {() => setPage("Setting")}>Account Setting</ButtonBase>
            </div>

            { page=="Profile"
                ? <Profile />
                : page =="Project"
                 ? <Project />
                 : page =="Setting"
                  ? <Setting />
                  : <Like />
            }
        </div>
    );
}

export default PageProfile;