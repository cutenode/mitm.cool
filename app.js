const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT ? process.env.PORT : '8080'

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.use(express.static('static'))

const year = new Date().getFullYear()
// Data to render in index view. Currently hard-coded,
// may want to replace with data in a JSON file or a DB.
const data = {
  'title': 'mitm.cool',
  'subtitle': 'connect to that petulant wifi already',
  'description': 'A tiny website that doesn\'t use HTTPS, with the express purpose of letting gated public WiFi MITM the request so you can sign in. I\'m paying $50/year for the domain so I hope you use it.',
  'disclaimer': `I think it\'s horrible that MITMing user requests is a legitimate strategy in ${year} but here we are. Please help build solutions to end this ridiculous situation if you care enough about it ✨`
}


app.get('/', (req, res) => {
  console.log('rendering index')
  res.render('index', data)
})

app.listen(port, () => console.log(`The app is now listening on port ${port}!`))
