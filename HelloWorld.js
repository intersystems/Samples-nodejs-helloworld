/*
* PURPOSE: Makes a connection to an instance of InterSystems IRIS Data Platform.
*/

const irisnative = require('intersystems-iris-native')

function main()
{
    // Retrieve connection information from configuration file
    var ip = "localhost"
    var port = 51773
    var namespace = "USER"
    var username = "SuperUser"
    var password = "SYS"

    // Create connection to InterSystems IRIS
    const connection = irisnative.createConnection({host: ip, port: port, ns: namespace, user: username, pwd: password})
    
    // Create InterSystems IRIS native object
    const irisNative = connection.createIris()
    console.log("Hello World! You have successfully connected to InterSystems IRIS via Node.js.")

    // Store data natively into a global
    irisNative.set(8888, "^testglobal", "1");
    globalValue = irisNative.get("^testglobal", "1");
    console.log("The value of ^testglobal(1) is " + globalValue);
}

main()