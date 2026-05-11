import express from 'express'
import user from './user.js'
import pedidos from './pedidos.js'

export default function(app){
    app
    .use(express.json())
    .use('/user', user)    
    .use('/pedidos', pedidos)   
} 