import { useEffect, useState } from "react"

// useLocalStorage hook
const decode = (value) => {
  return JSON.stringify(value)
}

// useLocalStorage hook
const useLocalStorage = (key, defaultState) => {
  const stored = localStorage.getItem(key);
  const initial = stored ? JSON.parse(stored) : defaultState
  const [value, setValue] = useState(initial);

  useEffect(() => {
    localStorage.setItem(key, decode(value))
  },  [key,value])

  return [value, setValue]
}

export {
  useLocalStorage
}