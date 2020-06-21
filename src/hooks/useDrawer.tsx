import { useCallback, useState } from 'react'

const useDrawer = () => {
    const [visible, setVisible] = useState(false)

    const open = useCallback(() => {
        setVisible(true)

        const [body] = Array.from(document.getElementsByTagName('body'))
        body.classList.toggle('dimmed')
    }, [])

    const close = useCallback(() => {
        setVisible(false)

        const [body] = Array.from(document.getElementsByTagName('body'))
        body.classList.toggle('dimmed')
    }, [])

    return [visible, open, close] as [typeof visible, typeof open, typeof close]
}

export default useDrawer
