const os = require('os');
console.log(`操作系统相关的行末标志: ${os.EOL}`); // \n 在 POSIX 系统上 \r\n 在 Windows系统上

console.log(os.arch(), process.arch); //可能的值有: 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', 'x64'。

console.log(os.platform(), process.platform); // 可能的值有:'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', 'win32'

console.log(os.cpus());

console.log(os.loadavg()); // 包含1, 5, 15分钟平均负载. windows 上始终是0

console.log(os.networkInterfaces()); //赋予的网络地址

console.log(os.release()); // 操作系统的发行版

console.log(os.totalmem()); // 所有系统内存的字节数

console.log(os.uptime());

console.log(os.userInfo());