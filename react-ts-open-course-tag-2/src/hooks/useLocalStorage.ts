import { useState } from "react";


export function useLocalStorage(key: string, initValue="") {

    //store data from local storage
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initValue

    })

    const setStoredValue = (newValue:unknown) => {
        setValue(newValue);
        //key kann vorhanden sein => überschrieben
        //key ist nicht vorhanden => erzeugt
        localStorage.setItem(key, JSON.stringify(newValue))

    }

    const removeItem = () => {
        setValue(initValue);
        localStorage.removeItem(key)
    }

    return { value, setStoredValue, removeItem }

}