const net = require('net');
const { IP, PORT, PLAYER_NAME } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => console.log('Successfully connected to the game server.'));

  conn.on('connect', () => {
    conn.write(PLAYER_NAME);
  });

  conn.on('data', (data) => console.log(data));

  return conn;
}

module.exports = {
  connect
};