import { getMoods } from 'data/dataHandlers';

export default function handler(req, res) {
    return getMoods().then(d => res.status(200).json(d));
}
  