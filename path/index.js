const path = require('path');
// 要想在任何操作系统上处理 Windows 文件路径时获得一致的结果，可以使用 path.win32
console.log(path.win32.basename('C:\\temp\\myfile1.html'));
// 要想在任何操作系统上处理 POSIX 文件路径时获得一致的结果，可以使用 path.posix
console.log(path.posix.basename('/tmp/myfile2.html'));

/* path.basename(path[, ext]) */
path.basename('/foo/bar/baz/asdf/quux.html'); // 返回: 'quux.html'
path.basename('/foo/bar/baz/asdf/quux.html', '.html'); // 返回: 'quux'

path.delimiter; //提供平台特定的路径分隔符  Windows 上是; POSIX 上是:
process.env.PATH;
console.log(process.env.PATH.split(path.delimiter));

/* 目录名 或者 扩展名 */
path.dirname('/foo/bar/baz/asdf/quux'); // 返回: '/foo/bar/baz/asdf'
path.extname('index.html'); // 返回: '.html'
path.extname('index.coffee.md'); // 返回: '.md'
path.extname('index.'); // 返回: '.'
path.extname('index'); // 返回: ''
path.extname('.index'); // 返回: ''

console.log(path.parse('/home/user/dir/file.txt'));
// 返回:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
// 与path.normalize对应

// 在 POSIX 上：
path.isAbsolute('/foo/bar'); // true
path.isAbsolute('/baz/..');  // true
path.isAbsolute('qux/');     // false
path.isAbsolute('.');        // false
// 在 Windows 上：
path.isAbsolute('//server');    // true
path.isAbsolute('\\\\server');  // true
path.isAbsolute('C:/foo/..');   // true
path.isAbsolute('C:\\foo\\..'); // true
path.isAbsolute('bar\\baz');    // false
path.isAbsolute('bar/baz');     // false
path.isAbsolute('.');           // false

path.join('/foo', 'bar', 'baz/asdfddd', 'quux', '..'); // ..表示上一级目录 返回: '/foo/bar/baz/asdf'

path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'); // 返回: '../../impl/bbb'
path.resolve('/foo/bar', './baz'); // 返回: '/foo/bar/baz'
path.resolve('/foo/bar', '/tmp/file/'); // 返回: '/tmp/file'
path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// 如果当前工作目录为 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'