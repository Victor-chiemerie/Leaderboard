const postScore = async (name, score) => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vi6QIxyEs6VinAHHebFM/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: { 'Content-type': 'application/json' },
    });
  return res.json();
};

export default postScore;