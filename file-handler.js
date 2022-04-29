import { promises as fs } from 'fs';

export default class FileHandler {

    async read(filename) {
        return fs.readFile(filename, 'utf-8');
    }

    async write(filename, content) {
        return fs.writeFile(filename, content);
    }
}