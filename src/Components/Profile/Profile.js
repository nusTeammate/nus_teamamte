import {ButtonBase} from "@material-ui/core";
import styles from './Profile.module.css';

function Profile() {
    return(
        <div style={{marginLeft:"12%"}}>
                <div style = {{marginTop:"17%"}}>
                    <b>
                        Personal Information
                    </b>
                    <ButtonBase style = {{marginLeft: "20px"}}><u>edit</u></ButtonBase>
                </div>
                <div style = {{marginTop:"10px"}}>
                    <a style = {{marginRight:"40px", marginLeft: "10px"}}>gender</a>
                    <a style = {{marginRight:"40px"}}>age</a>
                    <a style = {{marginRight:"40px"}}>address</a>
                    <a style = {{marginRight:"40px"}}>major</a>
                    <a style = {{marginRight:"40px"}}>enrollment year</a>
                </div>

                <div style = {{marginTop:"25px"}}>
                    <b>
                        My Experience
                    </b>
                    <ButtonBase style = {{marginLeft: "20px"}}><u>edit</u></ButtonBase>
                </div>
                <div style = {{marginTop:"10px", marginLeft:"10px"}}>
                    I have tried full stack development ...
                </div>

                <div style = {{marginTop:"25px"}}>
                    <b>
                        My Skills
                    </b>
                    <ButtonBase style = {{marginLeft: "20px"}}><u>edit</u></ButtonBase>
                </div>
                <div style = {{marginTop:"10px", marginLeft:"10px"}}>
                    <div className = {styles.skills}>ReactJs</div>
                    <div className = {styles.skills}>CSS</div>
                    <div className = {styles.skills}>HTML</div>
                    <div className = {styles.skills}>Python</div>
                </div>

                <div style={{clear:"both"}}></div>
                <div style = {{marginTop:"25px"}}>
                    <b>
                        My Interest
                    </b>
                    <ButtonBase style = {{marginLeft: "20px"}}><u>edit</u></ButtonBase>
                </div>

                <div style = {{marginTop:"25px"}}>
                    <b>
                        Resume
                    </b>
                    <ButtonBase style = {{marginLeft: "20px"}}><u>upload</u></ButtonBase>
                </div>

                <div style = {{marginTop:"25px"}}>
                    <b>
                        Additional Information
                    </b>
                    <ButtonBase style = {{marginLeft: "20px"}}><u>edit</u></ButtonBase>
                </div>
        </div>
    );
}

export default Profile;