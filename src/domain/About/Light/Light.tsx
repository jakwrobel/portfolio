import React from "react";
import styles from "./Light.module.scss";

interface ILight{
    variant: string
}

export const Light: React.FC <ILight> = ({variant})=>{
    return(
        <div className={styles[`light--${variant}`]}></div>
    )
}