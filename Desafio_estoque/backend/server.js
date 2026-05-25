import express from 'express'
import initRoutes from './src/routes/routes.js'
import cors from 'cors'

const app = express();

app.use(cors({
    origin: '*'
}))
initRoutes(app)

app.listen(8080, () => {
    console.log('Aplicação rodando em http://localhost:8080')
})