import React from 'react'
import styles from './Container.module.css'
export const Container = ({children}) => {
    console.log(children);
  return (
    <div className={styles.Container}>{children}</div>
  )
}
