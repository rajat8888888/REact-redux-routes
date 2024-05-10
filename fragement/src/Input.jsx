import React from 'react'
import styles from './Input.module.css'

export const Input = ({handleKeyDown}) => {

  return (<>
    <input type='text' className={styles.ipt} placeholder='input type'
        onKeyDown={handleKeyDown}
    />
    
   
    </>
  )
}
