import styles from './Project.module.css';
import {ButtonBase, Grid} from '@material-ui/core';
import ProjectCard from '../ProjectCard';
import img1 from '../../imgs/image 2.png';
import img2 from '../../imgs/image 4.png';
import img3 from '../../imgs/image 5.png';

function Project(){
    return(
        <div className={styles.box}>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <ProjectCard imgsrc={img1} status="recruiting" name="project 1"/>
                    </Grid>
                    <Grid item xs={3}>
                        <ProjectCard imgsrc={img2} status="recruiting" name="project 2"/>
                    </Grid>
                    <Grid item xs={3}>
                        <ProjectCard imgsrc={img3} status="closed" name="project 3"/>
                    </Grid>
                </Grid>
            </div>
    );
}

export default Project;