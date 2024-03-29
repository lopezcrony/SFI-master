const express = require('express')
const hbs = require('hbs')

const app = express()
const port = 3000

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { console.log(err); });

app.use(express.static('public'))

// --------------------------------------URL----------------------------------------------
app.get('/', (req, res) => {
  res.render('login')
});

app.get('/recover', (req, res) => {
  res.render('recovepass')
});

app.get('/roles', (req, res) => {
  res.render('roles')
});

app.get('/home', (req, res) => {
  res.render('home')
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard')
});

app.get('/company', (req, res) => {
  res.render('company')
});

app.get('/providers', (req, res) => {
  res.render('providers')
});

app.get('/payments', (req, res) => {
  res.render('payments')
});

app.get('/categories', (req, res) => {
  res.render('categories')
});

app.get('/users', (req, res) => {
  res.render('users')
});

app.get('/client', (req, res) => {
  res.render('client')
});

app.get('/categories', (req, res) => {
  res.render('categories')
});

app.get('/products', (req, res) => {
  res.render('products')
});
app.get('/compras', (req, res) => {
  res.render('compras')
});

app.get('/credits', (req, res) => {
  res.render('credits')
})
app.get('/entradas', (req, res) => {
  res.render('entradas')
})

app.get('/sales', (req, res) => {
  res.render('sales')
})

app.get('/refund', (req, res) => {
  res.render('refund')
})

app.get('/newSale', (req, res) => {
  res.render('newSale')
})

app.get('/inventory', (req, res) => {
  res.render('inventory')
});

app.get('*', (req, res) => {
  res.send('404| Paila mano')
})

// ---------------------------------------------------------------------------------------


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});