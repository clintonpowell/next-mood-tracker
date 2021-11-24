import { createEntry } from 'data/dataHandlers';

export default function handler(req, res) {
    if(req.method === 'POST') {
        return createEntry(req.body).then(d => res.status(200).json(d));
    }
    res.status(501).end();
}