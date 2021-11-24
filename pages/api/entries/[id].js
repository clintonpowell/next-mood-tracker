import { getEntryById } from 'data/dataHandlers';

export default function handler({ query: {id}}, res) {
    return getEntryById(parseInt(id))
        .then(d => res.status(200).json(d))
        .catch(err => res.status(404).json({ message: err}));
}
  