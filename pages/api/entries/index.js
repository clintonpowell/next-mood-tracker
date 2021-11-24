import { getEntries } from 'data/dataHandlers';

export default function handler(req, res) {
    return getEntries().then(d => res.status(200).json(d));
}
  