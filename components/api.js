export async function createEntry(entry) {
  return await fetch('/api/entries/create', { method: 'POST', body: JSON.stringify(entry), headers: {'Content-type': 'application/json'}})
    .then(d => d.json());
}

export async function getEntries(page=0, size=5, sort='asc') {
  return await fetch(`/api/entries?page=${page}&size=${size}&sort=${sort}`)
  .then(d => d.json());
}