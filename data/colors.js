const fs = require('fs');

const data = fs.readFileSync('./data/wikicolors.tsv', 'utf-8');

module.exports = data.trim().split('\n').map((str) => {
  const [hex, color, name] = str.split('|');
  const [h, s, v] = color.split('.').map(n => Number.parseInt(n, 10));
  return {
    hex,
    name,
    h,
    s,
    v,
  };
});
