const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

  app.get('/sales', (req, res) => {
    res.sendFile(__dirname+'/public/sales.html')
  })

  app.get('/newSales', (req, res) => {
    res.sendFile(__dirname+'/public/newSale.html')
  })


  app.get('*', (req, res) => {
    res.send('404| Paila mano')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})