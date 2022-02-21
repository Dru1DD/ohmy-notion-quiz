export type Tags = 'greeting' | 'selection' | 'input' | 'input_telefon' | 'input_email' 

export interface INotion {
    id: string
    Tags: string[]
    Name: string
    Options?: string
    placeholder?: string
    Discription?: string
}