import express from 'express'


const app = express()

const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
  res.end('<h1>Hello</h1>')
})

app.listen( PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})

