const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort("COM3", { baudRate: 9600})

const parser = new Readline()
port.pipe(parser)

parser.on('data', onData);
port.write('ROBOT POWER ON\n')
var msg ="";
function onData(data) {
    console.log(data);
    msg=data;
}

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    //var jsont =JSON.parse(msg)
    var helloj = {"nom":msg}
      res.write(msg); //write a response to the client
  
 

  res.end(); //end the response
}).listen(80);
 const options = {
  hostname: 'localhost',
  port: 80,
  path: '/api',
  method: 'GET'
}

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(msg)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()
// //> ROBOT ONLINE

