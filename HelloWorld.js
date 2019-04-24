const irisnative = require('intersystems-iris-native')

var host = "localhost"
var port = 51773
var namespace = "USER"
var username = "SuperUser"
var password = "SYS"

const connection = irisnative.createConnection(
    {host:host, port:port, ns:namespace, user:username, pwd:password}
    )
const iris = connection.createIris()
console.log("Hello World! You have successfully connected to InterSystems IRIS via Node.js.")
