import React from 'react'
import styles from './Display.module.css'
export const Display = ({displayVal}) => {
  return (
    
        <input type='text'  className={styles.display} value={displayVal} readOnly/>
    
  )
}
