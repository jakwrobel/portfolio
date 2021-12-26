import React from "react";
import styles from "./H2.module.scss"

interface IH2{
    content: string
    variant: string
}

export const H2: React.FC <IH2> = ({content, variant})=>{
return(
    <h2 className={styles[`h2--${variant}`]}>{content}</h2>
)
}