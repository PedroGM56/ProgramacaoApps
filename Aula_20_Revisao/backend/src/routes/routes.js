import express from 'express'
import pedidos from './pedidos.js'

export default function(app){
    app
    .use(express.json())
    .use('/pedidos', pedidos)
}