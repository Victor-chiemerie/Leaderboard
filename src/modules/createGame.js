const create = async () => {
  const get = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      body: JSON.stringify({ name: 'bobby game' }),
      headers: { 'Content-type': 'application/json' },
    });
  const response = await get.json();
  return response;
};
create();