import { useState, useEffect } from "react";
import { useLocalStorage } from './useLocalStorage'

const useDarkMode = (initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage('darkmode', initialValue);

    console.log(someValue)

    return [someValue, setSomeValue]

}

export default useDarkMode