const shuffle = arr => {

  const _array_ =  arr.slice(0);

  for(let i = 0; i <= arr.lenght - 1; i++ ) {
    let randomIdx = Math.floor(Math.random() * (i + 1));
    let tmp = _array_[i];

    _array_[i] = _array_[randomIdx];
    _array_[randomIdx] = tmp;
  }

  return _array_;
};

const initializeDeck = () => {
  let id = 0;

  const cards = [
    "ino",
    "itachi",
    "jiraiya",
    "kakashi",
    "madara",
    "naruto",
    "pain",
    "sakura",
    "sasuke",
    "shikamaru",
  ].reduce((acc, type) => {
    acc.push({ id: id++, type })
    acc.push({ id: id++, type })
    return acc
  }, [])

  return shuffle(cards);
};

export default initializeDeck;
