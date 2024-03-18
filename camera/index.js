import express from 'express';
import cors from 'cors';
import request from 'request';

const app = express();

// Use cors middleware to handle CORS-related issues
app.use(cors());

app.get('/camera-feed', (req, res) => {
  const cameraUrl = 'http://192.168.137.251:8081'; // Replace with your camera URL
  request(cameraUrl).pipe(res);
});

app.listen(8001, () => {
  console.log('Proxy server running on port 8001');
});