import express from 'express'
const port = 3030

const app = express()


app.listen(port, () => console.log(`Server is running on port ${port}`))