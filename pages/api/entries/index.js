import { getEntries } from 'data/dataHandlers';

export default function handler(req, res) {
    const {page, size, sort} = req.query;
    return getEntries(page, size, sort).then(d => res.status(200).json(d));
}
  