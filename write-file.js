import fs from 'fs';

export default class FileWriter {
    write(filename, content) {
        fs.writeFile(filename, content, () => console.log('escrevi'));
    }
}