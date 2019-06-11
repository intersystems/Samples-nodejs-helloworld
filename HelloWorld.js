/*
PURPOSE: Makes a connection to an instance of InterSystems IRIS Data Platform.
This example also stores data natively into your instance of InterSystems IRIS.
*/

const irisnative = require('intersystems-iris-native')

function main()
{
    // Credentials to connect to InterSystems IRIS database
    var ip = "localhost"
    var port = 51773
    var namespace = "USER"
    var username = "SuperUser"
    var password = "SYS"

    // Create connection to InterSystems IRIS
    const connection = irisnative.createConnection({host: ip, port: port, ns: namespace, user: username, pwd: password})
    console.log("Hello World! You have successfully connected to InterSystems IRIS.")

    // Create an InterSystems IRIS native object
    const irisNative = connection.createIris()

    // Store data natively into a global using the InterSystems IRIS native object
    irisNative.set(8888, "^testglobal", "1");
    globalValue = irisNative.get("^testglobal", "1");
    console.log("The value of ^testglobal(1) is " + globalValue);
}

main()