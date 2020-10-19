const express = require('express');
const app = express();
Stream = require('node-rtsp-stream');
  stream1 = new Stream({
  name: 'Cam1',
 // streamUrl: 'rtsp://username:password@ip_address:port/cam/realmonitor?channel=1&subtype=0',
  //streamUrl:'rtsp://78.159.192.163/live/ch00_0',
  streamUrl:'rtsp://116.197.222.158/live/ch00_0',
  //streamUrl:'rtsp://tester:AsDfJkL-1234@clawcam.thddns.net:9773/cam/realmonitor?channel=1&subtype=0',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-r': 25,// options with required values specify the value after the key
    '-q:v':32
    //'-s':'1280x720'
  }
});

console.log("Server Start on port: 8000")
app.listen(process.env.PORT||8000);