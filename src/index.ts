import '@/styles/index.scss';

let word = 'JavaScript';

const $divHello = document.getElementById('hello') as HTMLDivElement;
$divHello.textContent = `Hello ${word}!!`;

const $button = document.querySelector('button') as HTMLButtonElement;

$button.addEventListener('click', (e) => {
  e.preventDefault();

  if (word === 'JavaScript') {
    word = 'TypeScript';
    $divHello.textContent = `Hello ${word}!!`;
  } else {
    word = 'JavaScript';
    $divHello.textContent = `Hello ${word}!!`;
  }
});
