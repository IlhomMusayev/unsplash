import { useState, useEffect } from 'react'

const UseFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPanding] = useState(true)
    useEffect(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                setIsPanding(false)
                setData(data)
            })
    }, [url])
    return { data, isPending }
}
 
export default UseFetch;