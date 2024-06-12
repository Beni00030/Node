



const ws = new WebSocket('ws://10.10.1.64:8080');
      

btn.addEventListener("mousedown" , () => {
    cardJSON.text = document.getElementById("text").value;
    
    ws.send("XD");
});

ws.ping("val")


ws.onmessage = async (event) => {      
    const msgDiv = document.createElement('div');
    const ctext = document.createElement('p');
    messageJSON = JSON.parse(event.data);
    msgDiv.id = "div_"+messageJSON.id;
    msgDiv.style.position = "absolute";
    msgDiv.style.top = messageJSON.y + "px";
    msgDiv.style.left = messageJSON.x + "px";
    ctext.innerText = messageJSON.text;
    msgDiv.classList.add("card");
    ctext.classList.add("Ctext");
    msgDiv.style.zIndex = 0;

    document.getElementById('body').appendChild(msgDiv);
    msgDiv.appendChild(ctext);

    





};
 