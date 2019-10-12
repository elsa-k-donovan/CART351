window.onload = function(){

  // step 1 access the canvas element && the graphics context....
  let canvas = document.getElementById('testCanvas');
  let context = canvas.getContext('2d');

  let textN = new myTextNode(context,canvas);

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioContext = new AudioContext();

    navigator.mediaDevices.getUserMedia({audio: true})
    .then(
      //stream is what is returned
      (stream) =>
    {
      //returns a MediaStreamAudioSourceNode.
      const microphoneIn = audioContext.createMediaStreamSource(stream);
      const filter = audioContext.createBiquadFilter();
      const analyser = audioContext.createAnalyser();
      // microphone -> filter ->  analyzer->destination
        microphoneIn.connect(filter);
      //use the analyzer object to get some properties ....
      filter.connect(analyser);

      //we do not need a destination (out)
      //analyser.connect(audioContext.destination);
      analyser.fftSize = 32;
      let frequencyData = new Uint8Array(analyser.frequencyBinCount);

      //call loop ...
       requestAnimationFrame (callBackLoop);

       /****our looping callback function */
       function callBackLoop(){
        context.clearRect(0, 0, canvas.width, canvas.height);
         analyser.getByteFrequencyData(frequencyData);
         let average =0;
         let sum=0;
         for(let i = 0; i<frequencyData.length; i++){
           sum+=frequencyData[i];
         }
         average = sum/frequencyData.length;
         console.log(average);
         textN.render();
         textN.update(average);

         requestAnimationFrame(callBackLoop);

       }
  })

.catch(function(err) {
/* handle the error */
console.log("ERR NO SOUND?");
});
}
