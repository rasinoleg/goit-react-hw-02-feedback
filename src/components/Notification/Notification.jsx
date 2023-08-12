import React from "react";
import css from '../Notification/Notification.module.css'

const Notification = ({message}) => {
   
return <p className={css.notificationText}>{message}</p>;
 
}
export default Notification;