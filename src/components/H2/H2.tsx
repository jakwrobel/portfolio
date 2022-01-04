import React from "react";
import styles from "components/H2/H2.module.scss"

interface IH2{
    content: string
    variant: "showcase" | "about" | "projects" | "project" | "contact"
}

export const H2: React.FC <IH2> = ({content, variant})=>{
return(
    <h2 className={styles[`h2--${variant}`]}>{content}</h2>
)
}