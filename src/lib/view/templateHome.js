export const home = () => {
  const wall = `
  <h1>WELCOME</h1>`;
  const containerHome = document.createElement('div');
  containerHome.innerHTML = wall;
  return wall;
};
