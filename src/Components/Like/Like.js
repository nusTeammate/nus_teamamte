import styles from './Like.module.css';
import {Grid, ButtonBase} from '@material-ui/core';

export default function Like() {
    return(
        <div className={styles.box}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Roboto:ital,wght@0,400;1,100&display=swap');
            </style>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <div className={styles.like}>
                        <div className={styles.title}>NUS teammate</div>
                        <div className={styles.lable}>recruiting</div>
                    </div>
                    <div style={{marginTop:"40px"}}>
                        <ButtonBase style={{marginLeft:"30px", fontSize:"10px"}}>Brief introduction</ButtonBase>
                        <ButtonBase style={{float:"right", marginRight:"50px", fontSize:"10px"}}>more</ButtonBase>
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <div className={styles.like}>
                        <div className={styles.title}>NUS teammate</div>
                        <div className={styles.lable}>recruiting</div>
                    </div>
                    <div style={{marginTop:"40px"}}>
                        <ButtonBase style={{marginLeft:"30px", fontSize:"10px"}}>Brief introduction</ButtonBase>
                        <ButtonBase style={{float:"right", marginRight:"50px", fontSize:"10px"}}>more</ButtonBase>
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <div className={styles.like}>
                        <div className={styles.title}>NUS teammate</div>
                        <div className={styles.lable}>recruiting</div>
                    </div>
                    <div style={{marginTop:"40px"}}>
                        <ButtonBase style={{marginLeft:"30px", fontSize:"10px"}}>Brief introduction</ButtonBase>
                        <ButtonBase style={{float:"right", marginRight:"50px", fontSize:"10px"}}>more</ButtonBase>
                    </div>
                </Grid>


            </Grid>
        </div>
    );
}