import express from 'express'
const app = express()
// const port = 5000

app.get('/', (req, res) => {
  res.status(200).json({
    "success": true,
    "message": "the server run successfully!",
  })
})

export default app