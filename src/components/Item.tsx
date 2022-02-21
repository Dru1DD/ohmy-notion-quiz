import React, { FC, useCallback } from 'react'
import { IItem } from '../interface/componentsInterface'
import { useInput } from '../hooks/useInput'

export const Item: FC<IItem> = ({
    tag, 
    name,
    count, 
    options, 
    placeholder, 
    discription, 
    activePage, 
    setActivePage,
}) => {

    const inputHook = useInput(tag, placeholder)

    const quizPageHandler = useCallback(() => {
        if ( activePage + 1 <= count) {
            setActivePage(activePage  + 1)
        }
    }, [activePage, count, setActivePage])

    return (
        <>
            <h3 className="ui header">Вопрос {activePage + 1}/{count}</h3>
            <h2 className="ui centered header">{activePage + 1}. {name}</h2>
            <div className="ui divider" />

            {discription && <div className="ui centered description">{discription}</div>}
            {tag === 'input' || tag === 'input_telefon' || tag === 'input_email' ? (
                <div className="ui form">
                    <div className="field">
                        <input {...inputHook}/>
                    </div>
                </div>
            ) : null }
            
            {
                tag === 'selection' && (
                    <div className="ui form">
                        { options && options.split(';').map((item: string, index: number) => (
                            <div className="field" key={index}>
                                <div className="ui checkbox">
                                    <input {...inputHook}/>
                                    <label>{item}</label>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
            <div className="ui column">
               <div className="ui animated button" onClick={quizPageHandler}>
                    <div className="visible content">Далее</div>
                    <div className="hidden content">
                        <i className="right arrow icon"/>
                    </div>
                </div> 
            </div>
            
        </>
    )
}