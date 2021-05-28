let socket = io("http://localhost:737")

var pseudo = ""
while(pseudo === ""){
  pseudo = prompt("Votre pseudo ?")
  socket.emit('nameuser' , pseudo)
}

let textDOM = document.getElementById('textDOM')
let envoye = document.getElementById('envoye')

textDOM.addEventListener('change',function(event){

  let text = event.target.value
  envoye.addEventListener('click' ,function(){
      if(text !== ""){
        socket.emit('messageUser',{user: pseudo , message: text})
        let html = `<p id="textMy"> <span id="userMy">${pseudo}</span><span id="messageMy">${text}</span></p>`
        messageDiv.insertAdjacentHTML('afterbegin', html)
      }
      setTimeout(function () {//Vide le champ
        text = ""
        textDOM.value = ""
        textDOM.focus()
      }, 10);

    })
})


let messageDiv = document.getElementById('boiteMessage')

socket.on('messageServer',function(messageServer){
  let html = `<p id="textServer"> <span id="userServer">${messageServer.user}</span><span id="messageServer">${messageServer.message}</span></p>`
  messageDiv.insertAdjacentHTML('afterbegin', html)

socket.on('newUser',function(newUser){
  let html = `<p id="NewUser">${newUser}</p>`
  messageDiv.insertAdjacentHTML('afterbegin', html)
})

})
