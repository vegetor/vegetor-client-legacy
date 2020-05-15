import React, {useCallback, useState} from 'react'

const useDrawer = () => {
  const [visible, setVisible] = useState(false)

  const open = useCallback(() => {
    const [body] = Array.from(document.getElementsByTagName('body'))
    body.classList.toggle('dimmed')
    setVisible(true)
  }, [])

  const close = useCallback(() => {
    const [body] = Array.from(document.getElementsByTagName('body'))
    body.classList.toggle('dimmed')
    setVisible(false)
  }, [])

  return [visible, open, close] as [typeof visible, typeof open, typeof close]
}

export default useDrawer
