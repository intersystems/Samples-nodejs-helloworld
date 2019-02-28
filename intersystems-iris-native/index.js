var native = null;

if(process.platform == "win32" && process.arch == "x64") {
        // winx64
	native = require('./bin/winx64/irisnative.node');  
} else if (process.platform == "win32" && process.arch == "ia32") {
	native = require('./bin/winx86/irisnative.node');
} else if (process.platform == "darwin") {
    native = require('./bin/macx64/irisnative.node');
} else if (process.platform == "linux") {
    let distro = getLinuxDistro()
    console.log('platform = ' + process.platform + ': ' + distro)
    if (distro == 'ubuntu') {
        native = require('./bin/lnxubuntux64/irisnative.node');
    } else if (distro = 'fedora') {
        native = require('./bin/lnxrhx64/irisnative.node');
    } else if (distro == 'rhx64') {
        native = require('./bin/lnxrhx64/irisnative.node');
    } else {
            // test for AIX?
        native = require('./bin/ppcx64/irisnative.node');
    }
}

function getLinuxDistro() {
    const { execSync } = require('child_process');
    try {
        let distro = execSync('lsb_release -is',{encoding:'utf8',stdio:'pipe'});
        return distro.replace(/(\r\n\t|\n|\r\t)/gm,"").toLowerCase();
    } catch (e) {
        return getDistroFromFile();
    }
}

function getDistroFromFile() {
    const fs = require('fs')
    try {
        let osv = fs.readFileSync('/etc/os-release','utf8');
        let lines = osv.split('\n');
        let distro = lines.find((element) => { return element.substring(0,element.indexOf('=')) == 'ID' })
        return distro.substring(3);
    } catch (e) {
        return null;
    }
}

module.exports = native;