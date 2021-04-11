import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";

let classifier;
const url = "https://teachablemachine.withgoogle.com/models/RrGhF9eh_/"
export default function App() {
  const videoRef = useRef();
  
  const [result, setResult] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [input,setInput] = useState(0)
  useEffect(() => {
    startWebcam()

    classifier = ml5.imageClassifier(url+"model.json", () => {
      console.log("Load Model success")
    });
    console.log(classifier)


  }, []);
  useEffect(() => {
    if (classifier) {
      if(input === 0){
        classifier.classify(videoRef.current, (error, results) => {
          if (error) {
            console.error(error);
            return;
          }
          setResult(results);
        }); 
      }else if(input === 1){
        stopWebcam()
      }
     
    }
  }, [result,input])
  const startWebcam = () =>{
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(stream => videoRef.current.srcObject = stream)
        .catch(console.log);
  }
  const stopWebcam = () =>{
    const stream =  videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track =>tracks.stop());
  }

  return (
    <div style={{display: 'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'center'}}>
      <div className="flex" >
        <button type="button" className="btn btn-outline-success" onClick={() => setInput(0)}>WebCam</button>
        <button type="button" className="btn btn-outline-warning" onClick={() => {setInput(1);setResult([])}}>File</button>
      </div>
      {input === 0 ? <video
        ref={videoRef}
        width={window.innerWidth}
        height={window.innerHeight*.75}
        autoPlay
      ></video> 
      :input === 1 ? <input type='file' accept="image/jpeg"/>
      : <></>}
      
      {classifier && result && result !== undefined ? 
      <div >
        <h1 >Result</h1>
        {result.map((item, ind) => <p key={ind}>{item.label} 

        <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width:(item.confidence*100).toFixed(2)}} aria-valuenow={(item.confidence*100).toFixed(2) } aria-valuemin="0" aria-valuemax="100">{(item.confidence*100).toFixed(2) }%</div>
        </div>
        </p>)}
      </div>
      
      :<>Loading...</> }
      
    </div>
  )
}
