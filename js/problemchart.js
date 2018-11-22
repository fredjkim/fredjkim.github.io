const chart = document.querySelector('.chart');
const totalBars = document.querySelectorAll('.bar').length;
const percentDivs = document.querySelectorAll('.bar-percent');

//Automatically adjust bar's height based on its percentage with 'grid-row-start' property
percentDivs.forEach(percentDiv => {
  const barPercent = Math.floor(percentDiv.textContent.replace('%', ''));

  percentDiv.parentNode.style.setProperty('grid-row-start', 100 - `${barPercent}`);
});

//Automatically set 'grid-template-columns' value depending on no. of bars
chart.style.setProperty('grid-template-columns', `repeat(${totalBars}, 1fr)`);
