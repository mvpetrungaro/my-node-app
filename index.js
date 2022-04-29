import FileHandler from './file-handler.js';
import http from 'http';

const fh = new FileHandler();

http.createServer(async (req, res) => {
    
    if (req.url == '/read') {
        
        let content = await fh.read('store.dat');

        res.write(content); 
    } else if (req.url.startsWith('/write')) {

        let content = req.url.substring(req.url.indexOf('/', '/write'.length - 1) + 1);

        await fh.write('store.dat', content);

        res.write('Store alterado');
    } else {

        res.write('Nothing here...');
    }

    res.statusCode = 200;
    res.end();
}).listen(8080);