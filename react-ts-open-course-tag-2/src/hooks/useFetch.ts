import { useState, useEffect } from 'react';

export function useFetch(url: string) {

    //define state values
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({ msg: "" });


    //process fetch 
    async function fetchData() {

        try {

            const response = await fetch(url)
            console.log("response", response)

            if (!response.ok) {
                throw new Error("Network response failed")
            }
            const json = await response.json()

            setData(json)

        } catch (err) {
            console.log("err", err)
            setError({ msg: "Hat nicht geklappt" })

        } finally {
            setIsLoading(false)

        }

    }



    useEffect(() => {
        fetchData()
    }, [])



    return { data, isLoading, error }
}