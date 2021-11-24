import fs from 'fs';
import path from 'path';

const getPath = (fileName) => path.join(process.cwd(),'data/', fileName);
function getData(fileName, delay) {
    return new Promise((res, rej) => {
        const data = JSON.parse(fs.readFileSync(getPath(fileName)));
        if(!delay) {
            return res(data);
        }
        
        setTimeout(() => {
            res(data)
        }, 10 + Math.random()*20);
    });
}

export function getEntries(ops = {delay: true}) {
    return getData('entries.json', ops.delay).then(d => d.data);
}

export function getMoods(ops = {delay: true}) {
    return getData('moods.json', ops.delay);
}

export function getEntryById(id, ops = {delay: true}) {
    return new Promise((res, rej) => {
        getData('entries.json', ops.delay).then(response => {
            const entry = response.data.find(e => e.id === id);
            if(entry) {
                return res(entry);
            }

            return rej('Entry not found');
        })
    });
}

export function createEntry(entry, ops = {delay: true}) {
    return new Promise((res, rej) => {
        getData('entries.json', ops.delay).then(response => {
            entry.id = response.currentIndex + 1;
            entry.date = new Date().toISOString();
            const data = JSON.stringify({ currentIndex: entry.id, data: response.data.concat(entry) });
            fs.writeFileSync(getPath('entries.json'), data);
            res(entry);
        });
    });
}