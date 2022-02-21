import { useState, useEffect } from 'react'

type InputType = "text" | "number" | "email" | "phone" | "checkbox"

export const useInput = (tag: string, placeholder: string | undefined) => {

    const [ value, setValue ] = useState('')
    const [ types, setTypes ] = useState<InputType>('text')

    useEffect(() => {
        switch(tag) {
            case "input":
                setTypes('text')
                break
            case "input_telefon":
                setTypes('phone')
                break
            case "input_email":
                setTypes('email')
                break
            case "selection":
                setTypes('checkbox')
        }
    }, [tag])

    const handleChange = (event: any) => {
        setValue(event.target.value)
    }

    return {
        value, 
        onChange: handleChange,
        type: types,
        placeholder
    }
}