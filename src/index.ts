import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import routes from './routes/export_routes'
import errorMiddleware from './middlewares/error_middleware'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errorMiddleware)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})