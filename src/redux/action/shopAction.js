import { BAY } from '../types'

export const Bay = (comp)=> ({
    type: BAY,
    payload: comp.key,
    title: comp.title,
    parameters: comp.parameters,
    price: comp.price,
    img: comp.img
})