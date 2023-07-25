/* eslint-disable no-unused-vars */
import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -New-Nation-News`;
    }, [title])
}

export default useTitle;