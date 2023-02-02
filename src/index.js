import updateList from './modules/updateList';
import getScore from './modules/getScore';
import postScore from './modules/postScore';
import './style.css';


const list = document.querySelector('ul');
const name = document.querySelector('#name');
  const score = document.querySelector('#score');
  const addBtn = document.getElementById('Add-score-btn');
  const refresh = document.getElementById('refresh');

const updateScore = async () => {
  const fetchAPI = await getScore();
  const updatedList = fetchAPI.result;
  updatedList.sort((a, b) => b.score - a.score);
  updateList(updatedList);
};

refresh.addEventListener('click', async () => {
  list.innerHTML = '';
  await updateScore();
});

addBtn.addEventListener('click', async (e) => {
  console.log('clicked')
  e.preventDefault();
  const playerName = name.value;
  const playerScore = score.value;
  await postScore( playerName, playerScore );
  await updateScore();

  name.value = '';
  score.value = '';
});
