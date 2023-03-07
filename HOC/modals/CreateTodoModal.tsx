import React, { FC } from 'react'
import styles from '../../styles/Modal.module.scss'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface IPortalProps {
  children: React.ReactNode
  onClick: () => void
}

const Portal: FC<IPortalProps> = ({ children, onClick }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return mounted ? (
    <div className={styles.overlayModal} onClick={onClick}>
      {createPortal(children, document.querySelector('#myportal') as HTMLElement)}
    </div>
  ) : null
}

export default Portal
