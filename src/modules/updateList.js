const updateList = (result) => {
    const list = document.querySelector('ul');
    let innertext = '';
    result.forEach((element) => {
      const { user, score } = element;
      innertext += `
      <li>${user}: ${score}</li>
      `;
    });
    list.innerHTML = innertext;
  };
  
  export default updateList;