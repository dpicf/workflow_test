const fs = require('fs');

try {
    fs.readFileSync('text.txt', 'utf8')
} catch {
    throw new Error("ошибка открытия файла")
}