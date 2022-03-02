import styles from './Setting.module.css';

export default function Setting(){
    return(
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,100&display=swap');
            </style>
            <div className={styles.box} style={{fontFamily:"'Roboto', sans-serif"}}>
            <div>
            <h4>Password and Security</h4>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; change password</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; phone number &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12345678</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12345678@gmail.com </p>
            </div>
            <div styles={{marginTop:"25px"}}>
            <h4>Connected Account</h4>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Google &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12345678@gmail.com </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Github</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Linkedin</p>
            </div>
            </div>
        </div>
    );
}