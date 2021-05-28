
var express = require('express')
var http = require('http')

var app = express()




app.get('/chat',function(req, res){
  res.setHeader('Content-Type','text/html')
  res.sendFile( __dirname + '/html/index.html')
})


app.use('/fichier',express.static('html'))

app.get('/www.jeremy.best',function(req,res){
  res.redirect('http://jeremy.best')
  console.log('on visite ton site')
})

app.use(function(req,res){
  res.setHeader('Content-Type','text/html')
  res.send('<p>Désolé la page est introuvable erreur: <strong>404</strong></br>Vient ICI /chat</p>')
})

var server = http.createServer(app)
var io = require('socket.io')(server)


io.sockets.on('connection',function(socket){


  socket.on('nameuser',function(pseudo){
    socket.pseudo = pseudo
    console.log(socket.pseudo)
    socket.emit('messageServer', {user: "SERVEUR" , message: "Bienvenue :)"})
    socket.broadcast.emit('newUser', `${socket.pseudo} vient de se connecter`)
  })


  socket.emit('newUser',"test")


  socket.on('messageUser',function(messageUser){
    let user = messageUser.user
    let message = messageUser.message
    console.log(`user:${user} Message:${message}`)
    socket.broadcast.emit('messageServer',{user : messageUser.user ,message: message})
  })


})


server.listen(737)
