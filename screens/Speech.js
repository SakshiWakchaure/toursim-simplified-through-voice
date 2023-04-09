import React from 'react'


const Speech = () => {

  console.log(recognition)
  recognition.start()

  recognition.onresult=(event)=>{
  
    const command =event.results[0][0].transcript;
    //console.log(command);
    
    if(command.includes("navigate to") || command.includes("go to")){
      
       if(command.includes("homepage") || command.includes("indexpage")){
    //    // navigate.push("/HomeScreen")
    //     // navigation.navigate("/HomeScreen")
    //      navigate.push("/HomeScreen")
            //navigation.push()
            console.log(command);
       }
      else if(command.includes("Discover") || command.includes("Discover page")){
    //    navigate.push("/Discover")
      }
      else if(command.includes("Map") || command.includes("Map page")){
    //    navigate.push("/Map")
      }
      else if(command.includes("Contact") || command.includes("Contact page")){
    //    navigate.push("/Contact")
      }
      else if(command.includes("Sign up") || command.includes("Sign up page")){
    //    navigate.push("/New")
      }
   }
  }

  recognition.onend=()=>{
    recognition.start()

  }


  return (
    <div>
      
    </div>
  )
}

export default Speech
