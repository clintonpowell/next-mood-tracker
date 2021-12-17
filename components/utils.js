const utils = {
  getMood(entry, moods) {
    return moods.find(mood => mood.id === entry.mood);
  }
}

export default utils;