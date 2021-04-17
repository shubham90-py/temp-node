const os= require('os')
const user = os.userInfo()
console.log(user)


console.log(`The system uptime is  ${os.uptime()}seconds`);

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
    hostname:os.hostname(),
    arch:os.arch(),
    endianness:os.endianness(),
    homedir:os.homedir(),
    loadavg:os.loadavg(),
    networkinterfaces:os.networkInterfaces(),
    platform:os.platform(),
    release:os.release(),
    tmpdir:os.tmpdir(),
    type:os.type(),
    


}
console.log(currentOS)