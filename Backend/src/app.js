import express from 'express'
import aiRoutes from './routes/ai.routes.js'

const app = express()

app.post('/', (req, res) => {
    res.send('hello world')
})

app.use(express.json())
app.use('/ai', aiRoutes)

export default app