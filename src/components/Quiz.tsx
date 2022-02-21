import React, { FC, useState } from 'react'
import { Item } from './Item'
import { IQuiz } from '../interface/componentsInterface'


export const Quiz: FC<IQuiz> = ({ data }) => {
    const [ activePage, setActivePage ] = useState<number>(0)

    console.log(activePage)
    return (
        <div className="ui container">
            <div className="ui segment">
                { activePage + 1 < data.length ?
                <Item 
                    tag={data[activePage].Tags[0]}
                    name={data[activePage].Name}
                    options={data[activePage].Options}
                    discription={data[activePage].Discription}
                    placeholder={data[activePage].placeholder}
                    key={data[activePage].id}
                    activePage={activePage}
                    setActivePage={setActivePage}
                    count={data.length}
                /> : <h1 className="ui header">Спасибо за прохождение теста</h1>
            }
            </div>
            
        </div>
    )
}