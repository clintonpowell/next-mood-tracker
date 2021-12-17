import fs from 'fs';
import path from 'path';

const getPath = (fileName) => path.join(process.cwd(),'data/', fileName);
function getData(fileName) {
    return new Promise((res, rej) => {
        const data = JSON.parse(fs.readFileSync(getPath(fileName)));
        return res(data);
    });
}

export function getEntries(page=0, size=-1, sort='asc') {
    return getData('entries.json').then(d => d.data).then(d => {
        const latest = d[d.length-1] || null;
        if(sort === 'desc') {
            d.reverse()
        }
        if(size > 0) {
            return {
                latest,
                entries: d.slice(page*size, page*size + size),
                pageCount: Math.ceil(d.length / size)
            };
        }

        return {
            latest,
            entries: d,
            pageCount: 1
        };
    });
}

export function getMoods() {
    return getData('moods.json');
}

export function getEntryById(id) {
    return new Promise((res, rej) => {
        getData('entries.json').then(response => {
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