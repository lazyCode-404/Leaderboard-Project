import './style.css';
import { addScore, displayScoreList } from './listcore.js';

const form = document.querySelector('form');
const refresh = document.getElementById('refresh');

refresh.addEventListener('click', () => {
  displayScoreList();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.elements.user.value;
  const userscore = form.elements.score.value;
  if (name !== '' && userscore !== '') {
    const data = {
      user: name,
      score: userscore,
    };
    addScore(data);
    form.reset();
  }
});
