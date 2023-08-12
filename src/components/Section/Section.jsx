import React from "react";
import css from '../Section/Section.model.css'

const Section = ({ title, children }) => {
    return (
        <>
            <h6 className={css.feedbackTitle}>{title}</h6>
            {children}
        </>
    );
}

export default Section;