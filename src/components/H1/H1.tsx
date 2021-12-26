import React from "react";
import styles from "./H1.module.scss"

interface IH1{
    content: string
    variant: "showcase"
}

export const H1: React.FC<IH1> = ({content, variant})=>{
    return(
        <h1 className={styles[`h1--${variant}`]}>{content}</h1>
    )
}