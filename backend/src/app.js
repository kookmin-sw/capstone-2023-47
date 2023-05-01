import express from 'express'
import cors from 'cors'
import config from '@/config'
import myRouter from '@/router'

const app = express()

// cors 설정
app.use(
  cors({
    origin: config.origin,
    credentials: true,
    allowedHeaders: ['Content-Type'],
  })
)

// json 받기 위한 설정
app.use(express.json())

// router 연결
app.use('/', myRouter)

// error handling
const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500)
  res.send({ message: err.message })
}
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
})
