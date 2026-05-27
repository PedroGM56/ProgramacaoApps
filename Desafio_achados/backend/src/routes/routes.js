import express from 'express'
import achados from './achados.js'

export default function(app){
    app
    .use(express.json())
    .use('/achados', achados)
}