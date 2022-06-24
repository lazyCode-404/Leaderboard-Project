const listscore = [
  { name: 'Tamara', score: 100 },
  { name: 'Mirriam', score: 100 },
  { name: 'Mwansa', score: 100 },
  { name: 'Kutemba', score: 100 },
  { name: 'Bwalya', score: 100 },
];

const displayScores = () => {
  const scoreBoardContainer = document.querySelector('#scores');
  scoreBoardContainer.innerHTML = '';
  listscore.forEach((user) => {
    scoreBoardContainer.innerHTML += `<li>
        <p>${user.name}: ${user.score}</p>
        </li>`;
  });
};

exports.displayScores = displayScores;