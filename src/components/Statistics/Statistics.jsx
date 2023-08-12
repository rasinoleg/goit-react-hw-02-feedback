import React from 'react';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.container}>
    <h2 className={css.title}>Statistics</h2>
    <p className={css.item}>Good: {good}</p>
    <p className={css.item}>Neutral: {neutral}</p>
    <p className={css.item}>Bad: {bad}</p>
    <p className={css.item}>Total: {total}</p>
    <p className={css.item}>Positive feedback: {Math.trunc(positivePercentage)}%</p>
  </div>
);

export default Statistics;
