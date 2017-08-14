

const colorGroups = {
  "Pink": [ "SeaShell", "AntiqueWhite", "LavenderBlush", "MistyRose", "Pink", "LightPink", "HotPink", "PaleVioletRed", "Fuchsia", "Magenta","DeepPink", "MediumVioletRed", "DarkMagenta", "Purple"],
  "Purple": ["Lavender", "Thistle", "Plum", "Violet", "Orchid", "MediumOrchid", "DarkOrchid", "DarkViolet", "BlueViolet", "MediumPurple", "MediumSlateBlue", "SlateBlue", "DarkSlateBlue", "Indigo"],
  "Red": ["LightSalmon", "DarkSalmon", "Salmon", "LightCoral", "IndianRed", "Red", "Crimson", "FireBrick", "DarkRed", "Maroon", "Brown", "OrangeRed", "Tomato", "Coral"],
  "Yellow": ["DarkOrange", "Orange", "Gold", "Yellow", "LightYellow", "Linen", "LemonChiffon", "LightGoldenRodYellow", "Cornsilk", "PapayaWhip", "Moccasin", "PeachPuff", "PaleGoldenRod", "Khaki"],
  "Green1": ["FloralWhite", "Ivory", "Beige", "GreenYellow", "Chartreuse", "LawnGreen", "Lime", "LimeGreen", "PaleGreen", "LightGreen", "MediumSpringGreen", "SpringGreen", "MediumSeaGreen", "SeaGreen"],
  "Green2": ["ForestGreen", "Green", "DarkGreen", "YellowGreen", "DarkKhaki", "OldLace", "OliveDrab", "Olive", "DarkOliveGreen", "MediumAquaMarine", "DarkSeaGreen", "LightSeaGreen", "DarkCyan", "Teal"],
  "Cyan": ["MintCream", "Azure", "HoneyDew", "AliceBlue", "LightCyan", "PaleTurquoise", "Aquamarine", "Aqua", "Cyan", "Turquoise", "MediumTurquoise", "DarkTurquoise", "DeepSkyBlue", "DodgerBlue"],
  "Blue": ["CadetBlue", "LightSteelBlue", "LightBlue", "PowderBlue", "LightSkyBlue", "SkyBlue", "CornflowerBlue", "SteelBlue", "RoyalBlue", "Blue", "MediumBlue", "DarkBlue", "Navy", "MidnightBlue"],
  "Brown": ["BlanchedAlmond", "Bisque", "NavajoWhite", "Wheat", "BurlyWood", "Tan", "RosyBrown", "SandyBrown", "GoldenRod", "DarkGoldenRod", "Peru", "Chocolate", "SaddleBrown", "Sienna"],
  "Grey": ["White","WhiteSmoke", "GhostWhite", "Snow", "Gainsboro", "LightGray", "Silver", "DarkGray", "LightSlateGray", "SlateGray", "Gray", "DimGray", "DarkSlateGray", "Black"]
} // All 140 named CSS colors as per the W3C organized into general color groups

let isMouseDown;

createColorPalette();
setInitialCurrentColor("orange");
createPixelGrid(32,32);


function createColorPalette(paletteGroup){
  let divColorSelect = document.getElementById('divColorSelect');

  for (let groupName in colorGroups){
    let divColorGroup = document.createElement("div");

    for(let color of colorGroups[groupName]){
      let divColor = document.createElement('div');
      divColor.id = "div" + color;
      divColor.className += "palette-color-button";
      divColor.style.backgroundColor = color;
      divColor.setAttribute("title", color);
      divColorGroup.appendChild(divColor);
      divColor.addEventListener("click", handlePaletteColorSelect);
    }
    divColorSelect.appendChild(divColorGroup);
  }
}

function handlePaletteColorSelect(){
  let divCurrentColor = document.getElementById("divCurrentColor");
  let spanCurrentColor = document.getElementById("spanCurrentColor");

  divCurrentColor.style.backgroundColor = this.style.backgroundColor;
  spanCurrentColor.innerHTML = this.style.backgroundColor;
}

function setInitialCurrentColor(color){
  let divCurrentColor = document.getElementById("divCurrentColor");
  let spanCurrentColor = document.getElementById("spanCurrentColor");

  divCurrentColor.style.backgroundColor = color;
  spanCurrentColor.innerHTML = color;
}

function createPixelGrid(rows, cols){
  let divGrid = document.getElementById('divGrid');
  let i = 0;

  for(let r = 0; r < rows; r++){
    let divRow = document.createElement('div');
    divRow.className = "row";

    for(let c = 0; c < cols; c++){
      let cell = document.createElement('div');
      cell.id = "cell" + longerInt(i);
      cell.className += "cell";
      cell.addEventListener("click", handleCellClick);
      cell.addEventListener("mousedown", handleCellMouseDown);
      cell.addEventListener("mouseup", handleCellMouseUp);
      cell.addEventListener("mouseenter", handleCellMouseEnter);

      divRow.appendChild(cell);
      i++
    }
    divGrid.appendChild(divRow);
  }
}

function longerInt(i){
  let int = i.toString();

  while(int.length < 4){
    int = "0" + int;
  }
  return int;
}

function handleCellClick(){
  let divCurrentColor = document.getElementById("divCurrentColor");

  this.style.backgroundColor = divCurrentColor.style.backgroundColor
}

function handleCellMouseDown(){
  isMouseDown = true;

  let divCurrentColor = document.getElementById("divCurrentColor");

  this.style.backgroundColor = divCurrentColor.style.backgroundColor
}

function handleCellMouseUp(){
  isMouseDown = false;
}

function handleCellMouseEnter(){
  let divCurrentColor = document.getElementById("divCurrentColor")

  if (isMouseDown == true){
    this.style.backgroundColor = divCurrentColor.style.backgroundColor;
  }
}
