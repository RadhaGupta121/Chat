import logo from './logo.svg';
import './App.css';

function App() {
  document.body.style.backgroundColor="black";
  document.body.style.color="white";
  
   const SendMe=()=>{
    document.getElementById("person2").style.display="block";
     let msg=document.getElementById("mymsg").value;
     console.log(msg);
     let allmsg="";
     let alreadymsg=document.getElementById("person2").innerText;
     if(alreadymsg==="")
     allmsg=msg;
     else
     {
      var alreadydiv=document.getElementById("person2");
     var newdiv= alreadydiv.cloneNode(true);
     var newDivId = 'newDiv_' + Math.random().toString(36).substr(2, 9);
     console.log(newDivId);
     newdiv.setAttribute('id', newDivId);
     var container=document.body;
     container.appendChild(newdiv);
       allmsg=alreadymsg+"\n "+msg;
     }
    
     
     document.getElementById("person2").innerText=allmsg;
     document.getElementById("mymsg").value="";
   }
  return (
    <div className="App">
      <div id="person1" style={{backgroundColor:"pink", height:"100px", width:"500px" ,marginLeft:"12px",marginTop:"20px"}}>
        This is first person chat
        </div>
        <div id="person2" style={{display:"none" ,backgroundColor:"green", height:"50px", width:"500px",marginLeft:"700px", marginRight:"12px"}}>
        </div>

          <div id="msg" style={{marginTop:"400px"}}>
          <center><input id="mymsg" type="text" placeholder="write " style={{backgroundColor:"white", height:"30px", width:"600px"}}/>
           <button id="send" onClick={SendMe} style={{backgroundColor:"green",height:"30px",width:"70px"}}>Send</button> </center>
            
            </div>
    </div>
  );
}

export default App;
