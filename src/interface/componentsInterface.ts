import React from 'react'
import { INotion } from "./hooksInterface";

export interface IQuiz {
    data: INotion[]
}

export interface IItem {
    id?: string
    tag: string
    name: string
    options?: string
    placeholder?: string
    discription?: string
    activePage: number
    setActivePage: React.Dispatch<React.SetStateAction<number>>
    count: number
}