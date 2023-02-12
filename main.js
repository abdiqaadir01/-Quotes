function GENERATE() {
  let quaters={
    "abdiqaadir":'"hubsiimo hal siistaa"',
    "hamse":'"kafiirso intaaadan falin"',
    "awal":'"tuko intaan lsgugu tukan"'
  }  

  let authors=Object.keys(quaters);
  let author=authors[Math.floor(Math.random()* authors.length)];
  let quete=quaters[author];

  document.getElementById('quate').innerHTML=quete;
  document.getElementById('author').innerHTML=author;
}