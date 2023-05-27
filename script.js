fetch('https://icanhazdadjoke.com/slack')
  .then(data => data.json())
  .then(jokesData => {
    const jokeText = jokesData.attachments[0].text;
    const jokeElement = document.getElementById('jokeElement');

    jokeElement.innerHTML = jokeText;
  })
  .catch(error => {
    console.error('Error:', error);
  });