// conexãoDB
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connect } from './src/database/dbConnect.js'
import routes from './src/routes.js'

 const initializeApp = () => {
    connect()
    const app = express()

    app.use(cors())

    app.use(express.json())

    routes(app)

    return app

}

export const app = initializeApp()

