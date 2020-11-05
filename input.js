const { MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MOVE_UP_KEY, MESSAGE_BINDS } = require('./constants');


// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;

  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);
  // stdin.on('data', key => {
  //   if (key === 'w') console.log('up');
  // });

  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    connection.write('Move: up');
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write('Move: left');
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write('Move: down');
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  }

  for (const k in MESSAGE_BINDS) {
    if (key === k) {
      connection.write(MESSAGE_BINDS[k]);
    }
  }
};

module.exports = {
  setupInput
}