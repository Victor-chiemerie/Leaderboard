// import _ from 'lodash';
import './style.css';

const record = [
  {
    name: 'bobby',
    score: 100,
  },
  {
    name: 'paul',
    score: 200,
  },
  {
    name: 'richard',
    score: 50,
  },
  {
    name: 'chidebere',
    score: 85,
  },
  {
    name: 'kwa',
    score: 12,
  },
  {
    name: 'Mv',
    score: 112,
  },
  {
    name: 'stancee',
    score: 108,
  },
];

const list = document.querySelector('ul');

const printRecord = () => {
  let innertext = '';

  record.forEach((player) => {
    innertext += `
        <li>${player.name}: ${player.score}</li>
        `;
  });

  list.innerHTML = innertext;
};

printRecord();