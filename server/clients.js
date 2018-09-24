// module which store the clients connected through socket

const clients = new Map();

exports.setClient = function setClient(key, value) {
  clients.set(key, value);
};

exports.getClient = function getClient(key) {
  return clients.get(key);
};

exports.deleteClient = function deleteClient(key) {
  clients.delete(key);
};

exports.getEntries = function getEntries() {
  return clients.entries();
};
exports.forEachClient = function forEachClient(callback) {
  for (const [key, value] of clients.entries()) {
    callback(key, value);
  }
};

exports.printClients = function printClients() {
  console.log(clients);
};
