const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

export const recognition = new SpeechRecognition();

// recognition.start();

// recognition.onresult=(event)=>{
//      console.log(event);
//      };

// recognition.onend=() =>{
//   recognition.start();
// };