import React, { FC } from 'react'
import { useNotion } from '../hooks/useNotion'
import { Quiz } from './Quiz'
import { Loader } from './Loader'

export const App: FC = () => {

    const [ data, isLoading ] = useNotion()


    if (isLoading) {
        return <Loader />
    }
    return (
        <div className="ui container">
            <h1>OhMyFamily</h1>
            <Quiz data={data} />
        </div>
    )
}