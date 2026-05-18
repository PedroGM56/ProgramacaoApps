import express from 'express'
import initRoutes from './src/routes/routes.js'

const app = express();

initRoutes(app)

app.listen(8080, () => {
    console.log('Aplicação rodando em http://localhost:8080')
})