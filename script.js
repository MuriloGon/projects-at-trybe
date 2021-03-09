/* LocalSession Manager */
localStorage.colorSelected = 'rgb(0, 0, 0)';
console.log(localStorage);

function localDataChecker(key, value) {
  if (localStorage[key] === undefined) {
    localStorage.setItem(key, value);
    return localStorage.getItem(key);
  }

  localStorage.setItem(key, value);
  return localStorage.getItem(key);
}

/* Palette Component */
function addColorElement(parentElement, color) {
  const colorElement = document.createElement('div');
  colorElement.classList.add('color');
  colorElement.style.backgroundColor = color;

  parentElement.appendChild(colorElement);
}
function addAllPaletteColors(parentElement, n) {
  const ColorfullLen = Math.floor(n * 0.8);
  const BWLen = n - ColorfullLen;

  for (let i = 0; i <= BWLen; i += 1) {
    let color;
    color = 'hsl(0deg, ';
    color += '0%, ';
    color += `${(99 * i) / BWLen}%)`;
    addColorElement(parentElement, color);
  }

  for (let i = 1; i <= ColorfullLen; i += 1) {
    let color;
    color = `hsl(${Math.floor((360 * i) / n)}deg, `;
    color += `${'80%'}, `;
    color += `${'50%'})`;
    addColorElement(parentElement, color);
  }
}

// selectColor
function selectColor(parentComponent, colorSelectedElement) {
  const slctElement = colorSelectedElement;
  slctElement.style.backgroundColor = localStorage.colorSelected;

  parentComponent.addEventListener('click', (e) => {
    if (e.target.className === 'color') {
      const colorSected = e.target.style.backgroundColor;
      const stringSelected = 'selected';

      slctElement.style.backgroundColor = localDataChecker('colorSelected', colorSected);

      const selection = [...document.getElementsByClassName(stringSelected)];
      selection.forEach((el) => el.classList.remove(stringSelected));

      e.target.classList.add(stringSelected);
    }
  });
}

/* Function Callss */
// ColorPalette Component
const colorPallet = document.getElementById('color-palette');
const colorSelectedElement = document.getElementById('palette__color-selected');
addAllPaletteColors(colorPallet, 100);
selectColor(colorPallet, colorSelectedElement);
