const getScore = async () => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vi6QIxyEs6VinAHHebFM/scores/',
    {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    });
  return res.json();
};

export default getScore;