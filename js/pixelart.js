

let colorGroups = {
  "Pink": ["Pink", "LightPink", "HotPink", "DeepPink", "PaleVioletRed", "MediumVioletRed"],
  "Purple": ["Lavender", "Thistle", "Plum", "Orchid", "Violet", "Fuchsia", "Magenta", "MediumOrchid", "DarkOrchid", "DarkViolet", "BlueViolet", "DarkMagenta", "Purple", "MediumPurple", "MediumSlateBlue", "SlateBlue", "DarkSlateBlue", "Indigo"],
  "Red": ["LightSalmon", "Salmon", "DarkSalmon", "LightCoral", "IndianRed", "Crimson", "Red", "FireBrick", "DarkRed"],
  "Orange": ["Orange", "DarkOrange", "Coral", "Tomato", "OrangeRed"],
  "Yellow": ["Gold", "Yellow", "LightYellow", "LemonChiffon", "LightGoldenRodYellow", "PapayaWhip", "Moccasin", "PeachPuff", "PaleGoldenRod", "Khaki", "DarkKhaki"],
  "Green": ["GreenYellow", "Chartreuse", "LawnGreen", "Lime", "LimeGreen", "PaleGreen", "LightGreen", "MediumSpringGreen", "SpringGreen", "MediumSeaGreen", "SeaGreen", "ForestGreen", "Green", "DarkGreen", "YellowGreen", "OliveDrab", "DarkOliveGreen", "MediumAquaMarine", "DarkSeaGreen", "LightSeaGreen", "DarkCyan", "Teal"],
  "Cyan": ["Aqua", "Cyan", "LightCyan", "PaleTurquoise", "Aquamarine", "Turquoise", "MediumTurquoise", "DarkTurquoise"],
  "Blue": ["CadetBlue", "SteelBlue", "LightSteelBlue", "LightBlue", "PowderBlue", "LightSkyBlue", "SkyBlue", "CornflowerBlue", "DeepSkyBlue", "DodgerBlue", "RoyalBlue", "Blue", "MediumBlue", "DarkBlue", "Navy", "MidnightBlue"],
  "Brown": ["Cornsilk", "BlanchedAlmond", "Bisque", "NavajoWhite", "Wheat", "BurlyWood", "Tan", "RosyBrown", "SandyBrown", "GoldenRod", "DarkGoldenRod", "Peru", "Chocolate", "Olive", "SaddleBrown", "Sienna", "Brown", "Maroon"],
  "White": ["White", "Snow", "HoneyDew", "MintCream", "Azure", "AliceBlue", "GhostWhite", "WhiteSmoke", "SeaShell", "Beige", "OldLace", "FloralWhite", "Ivory", "AntiqueWhite", "Linen", "LavenderBlush", "MistyRose"],
  "Grey": ["Gainsboro", "LightGray", "Silver", "DarkGray", "DimGray", "Gray", "LightSlateGray", "SlateGray", "DarkSlateGray", "Black"]
}

createPixelGrid(24,24);
createColorPalette();

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
      divRow.appendChild(cell);
      cell.addEventListener("click", handleCellClick);
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

function createColorPalette(paletteGroup){
  let divColorSelect = document.getElementById('divColorSelect');

  for (let groupName in colorGroups){
    let divColorGroup = document.createElement("div");
    let h4GroupName = document.createElement("h4");

    //h4GroupName.innerText = groupName;
    //divColorGroup.appendChild(h4GroupName);

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

function handleCellClick(){
  let divCurrentColor = document.getElementById("divCurrentColor");

  this.style.backgroundColor = divCurrentColor.style.backgroundColor
}
