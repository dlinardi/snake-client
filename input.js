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
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'z') {
    connection.write('Say: lolol')
  }
  if (key === 'q') {
    connection.write('Say: ayyyy')
  }
};

module.exports = {
  setupInput
}