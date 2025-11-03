			
// VARIABLES PUBLICAS.

// 📁 Imagen y genética
let KKKK = "";
let KKK = "";
let K = "";
let KK = "";
let GTM = "";
let GTH = "";
let Msg = "";
let Msg1 = "";
let hghg = "";
let VerFoto = "";
let Opf = "";
let Sexdor = "";
let Cruzados = "";
let ErrT = "";

// 🎨 Colores genéticos (usaremos strings para CSS)
let A1 = "";
let A2 = "";
let A3 = "";
let A4 = "";
let A5 = "";
let B1 = "";
let B2 = "";
let B3 = "";
let B4 = "";
let B5 = "";
let C1 = "";
let C2 = "";
let C3 = "";
let C4 = "";
let C5 = "";
let p1 = "";
let p2 = "";
let d2 = "";

// 🔢 Variables de control
let L = 0;
let II = 0;
let Num = 0;
let Contt = 0;
let MachoListo = 0;
let HembraLista = 0;


// 🧮 Arrays de datos
let Celda = new Array(1026).fill("");
let CuentaAves = new Array(1026).fill(0);
let ComparaCelda = new Array(1026).fill("");
let Consc = new Array(1026).fill(0);
let ComparaPatron = "";
let Ejemplares = 0;
let TEjemplares = 0;
let NEjemplar = new Array(1026).fill("");
let CEjemplar = new Array(1026).fill(0); 
let Qboton = 0; 


// 🧬 Variables del macho
let FTM = "";
let CabzM = "";
let PchsM = "";
let DorM = "";
let MCbz = new Array(5).fill("");
let MPchs = new Array(3).fill("");
let MCpos = new Array(5).fill("");

// 🧬 Variables de la hembra
let FTH = "";
let CabzH = "";
let PchsH = "";
let DorH = "";
let HCbz = new Array(5).fill("");
let HPchs = new Array(3).fill("");
let HCpos = new Array(5).fill("");

// ⚙️ Otros usos y cálculos
let Mn = "", Hk = "", lk = "", jh = "", sex = "", cons = "", gg = "", o = "";
let fa1 = "", faa = "", fh = "";
let fb2 = "", fb3 = "", fa2 = "", fa3 = "", fa33 = "", fa4 = "", fa5 = "", fa6 = "", fa7 = "", fa8 = "", fa10 = "";
let Fta = "";


let ij = 0;
let ProCiento = 0;

//       
    let machoCabeza = "";
    let machoPecho = "";
    let machoDorso = "";
    let hembraCabeza = "";
    let hembraPecho = "";
    let hembraDorso = "";

// PROCEDIMIENTOS.
function procesarSeleccionM(bloque) {
  // Para la Cabeza
  if (bloque !== "macho" || !machoCabeza) return;

  switch (machoCabeza) {
    case "Roja(/Pura)":
      CabzM = "RX";
      MCbz[1] = "R"; MCbz[2] = "R"; MCbz[3] = "r"; MCbz[4] = "r";
      break;
    case "Roja(/Negro)":
      CabzM = "RX";
      MCbz[1] = "R"; MCbz[2] = "N"; MCbz[3] = "r"; MCbz[4] = "r";
      break;
    case "Roja(/Naranja)":
      CabzM = "RX";
      MCbz[1] = "R"; MCbz[2] = "R"; MCbz[3] = "r"; MCbz[4] = "m";
      break;
    case "Roja(/Amarillo)":
      CabzM = "RX";
      MCbz[1] = "R"; MCbz[2] = "R"; MCbz[3] = "r"; MCbz[4] = "a";
      break;
    case "Roja(/Negro/Naranja)":
      CabzM = "RX";
      MCbz[1] = "R"; MCbz[2] = "N"; MCbz[3] = "r"; MCbz[4] = "m";
      break;
    case "Roja(/Negro/Amarillo)":
      CabzM = "RX";
      MCbz[1] = "R"; MCbz[2] = "N"; MCbz[3] = "r"; MCbz[4] = "a";
      break;
    case "Negra(Pura)":
      CabzM = "NX";
      MCbz[1] = "N"; MCbz[2] = "N"; MCbz[3] = "r"; MCbz[4] = "r";
      break;
    case "Negra(/Naranja)":
      CabzM = "NX";
      MCbz[1] = "N"; MCbz[2] = "N"; MCbz[3] = "m"; MCbz[4] = "m";
      break;
    case "Negra(/Amarillo)":
      CabzM = "NX";
      MCbz[1] = "N"; MCbz[2] = "N"; MCbz[3] = "a"; MCbz[4] = "a";
      break;
    case "Negra(/Rojo/Naranja)":
      CabzM = "NX";
      MCbz[1] = "N"; MCbz[2] = "N"; MCbz[3] = "r"; MCbz[4] = "m";
      break;
    case "Negra(/Rojo/Amarillo)":
      CabzM = "NX";
      MCbz[1] = "N"; MCbz[2] = "N"; MCbz[3] = "r"; MCbz[4] = "a";
      break;
    case "Naranja(Pura)":
      CabzM = "MX";
      MCbz[1] = "R"; MCbz[2] = "R"; MCbz[3] = "m"; MCbz[4] = "m";
      break;
    case "Naranja(/Amarillo)":
      CabzM = "MX";
      MCbz[1] = "R"; MCbz[2] = "R"; MCbz[3] = "m"; MCbz[4] = "a";
      break;
    case "Naranja(/Negro)":
      CabzM = "MX";
      MCbz[1] = "R"; MCbz[2] = "N"; MCbz[3] = "m"; MCbz[4] = "m";
      break;
    case "Naranja(/Negro/Amarillo)":
      CabzM = "MX";
      MCbz[1] = "R"; MCbz[2] = "N"; MCbz[3] = "m"; MCbz[4] = "a";
      break;
    case "Amarilla":
      CabzM = "AX";
      MCbz[1] = "R"; MCbz[2] = "R"; MCbz[3] = "a"; MCbz[4] = "a";
      break;
    case "Amarilla(/Negro)":
      CabzM = "AX";
      MCbz[1] = "R"; MCbz[2] = "N"; MCbz[3] = "a"; MCbz[4] = "a";
      break;
  }
      if (PchsM !== "" && DorM !== "") {
        GTM = MCbz[1] + MCbz[2] + MCbz[3] + MCbz[4] + MPchs[1] + MPchs[2] + MCpos[1] + MCpos[2] + MCpos[3] + MCpos[4];
        FTM = CabzM + PchsM + DorM;
        MachoListo= 1;
        const sustituciones = {
          "MXMFd": "RXMFd", "MXMFdd": "RXMFdd", "MXBFd": "RXBFd", "MXBFdd": "RXBFdd",
          "MXMFW": "RXMFW", "MXBFW": "RXBFW", "AXMFW": "RXMFW", "AXBFW": "RXBFW",
          "AXMFd": "RXMFd", "AXMFdd": "RXMFdd", "AXBFdd": "RXBFdd"
        };
        if (sustituciones[FTM]) FTM = sustituciones[FTM];

        A1 = "WhiteSmoke"; A2 = "WhiteSmoke"; A3 = "WhiteSmoke"; A4 = "WhiteSmoke"; A5 = "WhiteSmoke";

        if (MCbz[2] === "N" && MCbz[1] !== "N") A1 = "Black";
        Msg = MCbz[3];

        if (MCbz[3] === "m") A1 = "Orange";
        if (MCbz[3] === "a") A1 = "Yellow";
        if (MCbz[4] === "m") A2 = "Orange";
        if (MCbz[4] === "a") A2 = "Yellow";

        if (MPchs[1] !== MPchs[2]) {
          if (MPchs[1] === "T") A3 = "Pink";
          if (MPchs[1] === "A") A3 = "Blue";

          if (MPchs[2] === "T") A4 = "Pink";
          if (MPchs[2] === "A") A4 = "Blue";
          if (MPchs[2] === "b") A4 = "White";
        }

        if (MCpos[1] !== MCpos[2] && MCpos[2] === "F") A5 = "Blue";

        if ((PchsM === "T" && DorM === "VZ") || (PchsM === "B" && DorM === "VZ")) {
          ErrT = "Error";
          Msg1 = "Error ejemplar Seleccionado";
          alert(Msg1);
          ErrT = "TT";
        }

      }
      // Para el Pecho
      if (bloque === "macho" && machoPecho) {
        switch (machoPecho) {
          case "Malva(Puro)": PchsM = "M"; MPchs[1] = "M"; MPchs[2] = "M"; break;
          case "Malva(/Blanco)": PchsM = "M"; MPchs[1] = "M"; MPchs[2] = "b"; break;
          case "Malva(/Lila)": PchsM = "M"; MPchs[1] = "M"; MPchs[2] = "T"; break;
          case "Malva(/Azul,/Blanco)": PchsM = "M"; MPchs[1] = "A"; MPchs[2] = "b"; break;
          case "Malva(/Lila,/Azul)": PchsM = "M"; MPchs[1] = "A"; MPchs[2] = "T"; break;
          case "Malva(/Azul)": PchsM = "M"; MPchs[1] = "M"; MPchs[2] = "A"; break;
          case "Lila(Puro)": PchsM = "T"; MPchs[1] = "T"; MPchs[2] = "T"; break;
          case "Lila(/Blanco)": PchsM = "T"; MPchs[1] = "T"; MPchs[2] = "b"; break;
          case "Azul(Puro)": PchsM = "A"; MPchs[1] = "A"; MPchs[2] = "A"; break;
          case "Blanco": PchsM = "B"; MPchs[1] = "b"; MPchs[2] = "b"; break;
        }

        if (CabzM !== "" && DorM !== "") {
          GTM = MCbz[1] + MCbz[2] + MCbz[3] + MCbz[4] + MPchs[1] + MPchs[2] + MCpos[1] + MCpos[2] + MCpos[3] + MCpos[4];
          FTM = CabzM + PchsM + DorM;
          MachoListo= 1;
          const sustituciones = {
            "MXMFd": "RXMFd", "MXMFdd": "RXMFdd", "MXBFd": "RXBFd", "MXBFdd": "RXBFdd",
            "MXMFW": "RXMFW", "MXBFW": "RXBFW", "AXMFW": "RXMFW", "AXBFW": "RXBFW",
            "AXMFd": "RXMFd", "AXMFdd": "RXMFdd", "AXBFdd": "RXBFdd"
          };
          if (sustituciones[FTM]) FTM = sustituciones[FTM];

          A1 = "WhiteSmoke"; A2 = "WhiteSmoke"; A3 = "WhiteSmoke"; A4 = "WhiteSmoke"; A5 = "WhiteSmoke";

          if (MCbz[2] === "N" && MCbz[1] !== "N") A1 = "Black";
          Msg = MCbz[3];

          if (MCbz[3] === "m") A1 = "Orange";
          if (MCbz[3] === "a") A1 = "Yellow";
          if (MCbz[4] === "m") A2 = "Orange";
          if (MCbz[4] === "a") A2 = "Yellow";

          if (MPchs[1] !== MPchs[2]) {
            if (MPchs[1] === "T") A3 = "Pink";
            if (MPchs[1] === "A") A3 = "Blue";

            if (MPchs[2] === "T") A4 = "Pink";
            if (MPchs[2] === "A") A4 = "Blue";
            if (MPchs[2] === "b") A4 = "White";
          }

          if (MCpos[1] !== MCpos[2] && MCpos[2] === "F") A5 = "Blue";

          if ((PchsM === "T" && DorM === "VZ") || (PchsM === "B" && DorM === "VZ")) {
            ErrT = "Error";
            Msg1 = "Error ejemplar Seleccionado";
            alert(Msg1);
            ErrT = "TT";
          }
        }
      }
      // Para el Dorso
      if (bloque === "macho" && machoDorso) {
        switch (machoDorso) {
          case "Verde(Puro)": DorM = "VW"; MCpos[1] = "V"; MCpos[2] = "V"; MCpos[3] = "W"; MCpos[4] = "W"; break;
          case "Verde(/Azul)": DorM = "VW"; MCpos[1] = "V"; MCpos[2] = "F"; MCpos[3] = "W"; MCpos[4] = "W"; break;
          case "Azul(Puro)": DorM = "FW"; MCpos[1] = "F"; MCpos[2] = "F"; MCpos[3] = "W"; MCpos[4] = "W"; break;
          case "Amarillo Pastel": DorM = "Vd"; MCpos[1] = "V"; MCpos[2] = "V"; MCpos[3] = "d"; MCpos[4] = "W"; break;
          case "Amarillo Pastel(/Azul)": DorM = "Vd"; MCpos[1] = "V"; MCpos[2] = "F"; MCpos[3] = "Z"; MCpos[4] = "W"; break;
          case "Amarillo doble dilución (Puro)": DorM = "Vdd"; MCpos[1] = "V"; MCpos[2] = "V"; MCpos[3] = "d"; MCpos[4] = "d"; break;
          case "Amarillo doble dilución (/Azul)": DorM = "Vdd"; MCpos[1] = "V"; MCpos[2] = "F"; MCpos[3] = "d"; MCpos[4] = "d"; break;
          case "Pastel Azul": DorM = "Fd"; MCpos[1] = "F"; MCpos[2] = "F"; MCpos[3] = "d"; MCpos[4] = "W"; break;
          case "Simple Factor Azul": DorM = "Fd"; MCpos[1] = "F"; MCpos[2] = "F"; MCpos[3] = "d"; MCpos[4] = "W"; break;
          case "Dilución Azul": DorM = "Fdd"; MCpos[1] = "F"; MCpos[2] = "F"; MCpos[3] = "d"; MCpos[4] = "d"; break;
          case "Pastel Verde": DorM = "VZ"; MCpos[1] = "V"; MCpos[2] = "V"; MCpos[3] = "Z"; MCpos[4] = "W"; break;
          case "Pastel Verde(/Azul)": DorM = "VZ"; MCpos[1] = "V"; MCpos[2] = "F"; MCpos[3] = "Z"; MCpos[4] = "W"; break;
        }

        if (CabzM !== "" && PchsM !== "") {
          GTM = MCbz[1] + MCbz[2] + MCbz[3] + MCbz[4] + MPchs[1] + MPchs[2] + MCpos[1] + MCpos[2] + MCpos[3] + MCpos[4];
          FTM = CabzM + PchsM + DorM;
          MachoListo= 1;
          const sustituciones = {
            "MXMFd": "RXMFd", "MXMFdd": "RXMFdd", "MXBFd": "RXBFd", "MXBFdd": "RXBFdd",
            "MXMFW": "RXMFW", "MXBFW": "RXBFW", "AXMFW": "RXMFW", "AXBFW": "RXBFW",
            "AXMFd": "RXMFd", "AXMFdd": "RXMFdd", "AXBFdd": "RXBFdd"
          };
          if (sustituciones[FTM]) FTM = sustituciones[FTM];

          A1 = "WhiteSmoke"; A2 = "WhiteSmoke"; A3 = "WhiteSmoke"; A4 = "WhiteSmoke"; A5 = "WhiteSmoke";

          if (MCbz[2] === "N" && MCbz[1] !== "N") A1 = "Black";
          Msg = MCbz[3];

          if (MCbz[3] === "m") A1 = "Orange";
          if (MCbz[3] === "a") A1 = "Yellow";
          if (MCbz[4] === "m") A2 = "Orange";
          if (MCbz[4] === "a") A2 = "Yellow";

          if (MPchs[1] !== MPchs[2]) {
            if (MPchs[1] === "T") A3 = "Pink";
            if (MPchs[1] === "A") A3 = "Blue";

            if (MPchs[2] === "T") A4 = "Pink";
            if (MPchs[2] === "A") A4 = "Blue";
            if (MPchs[2] === "b") A4 = "White";
          }

          if (MCpos[1] !== MCpos[2] && MCpos[2] === "F") A5 = "Blue";

          if ((PchsM === "T" && DorM === "VZ") || (PchsM === "B" && DorM === "VZ")) {
            ErrT = "Error";
            Msg1 = "Error ejemplar Seleccionado";
            alert(Msg1);
            ErrT = "TT";
          }
        }
      
        // 🖥️ Mostrar datos en pantalla
      // document.getElementById("genotipoMacho").textContent = GTM;
      // document.getElementById("fenotipoMacho").textContent = FTM;
      // document.getElementById("colorA1txt").textContent = A1;
      // document.getElementById("colorA2txt").textContent = A2;
      // document.getElementById("colorA3txt").textContent = A3;
      // document.getElementById("colorA4txt").textContent = A4;
      // document.getElementById("colorA5txt").textContent = A5;
      // document.getElementById("mensajeGenetico").textContent = Msg1 || Msg;

      if (ErrT !== "Error") {
        // Construir ruta de imagen
        const rutaBase = "imagenes/";
        const extension = ".jpg";
        const nombreArchivo = FTM + extension;
        const rutaFinal = rutaBase + nombreArchivo;

        console.log("Imagen generada:", rutaFinal);

        // Limpiar imagen anterior y crear nueva
        const contenedor = document.getElementById("imagenMachoContenedor");
        if (contenedor) {
          contenedor.innerHTML = ""; // Limpia cualquier imagen previa

          const nuevaImagen = document.createElement("img");
          nuevaImagen.src = rutaFinal;
          nuevaImagen.alt = "Ejemplar Macho";
          nuevaImagen.style = "display: block; margin: 0 auto; max-width: 100%; height: auto;";

          contenedor.appendChild(nuevaImagen);

          // Crear contenedor de colores genéticos
          const coloresGeneticos = document.createElement("div");
          coloresGeneticos.id = "coloresGeneticos";
          coloresGeneticos.style.display = "flex";
          coloresGeneticos.style.justifyContent = "center";
          coloresGeneticos.style.flexWrap = "wrap";
          coloresGeneticos.style.gap = "6px";
          coloresGeneticos.style.marginTop = "8px";

          // Crear y agregar cada círculo
          [A1, A2, A3, A4, A5].forEach((color, index) => {
            const circulo = document.createElement("div");
            circulo.className = "color-box";
            circulo.style.width = "15px";
            circulo.style.height = "15px";
            circulo.style.borderRadius = "50%";
            circulo.style.border = "1px solid #000";
            circulo.style.backgroundColor = color;
            coloresGeneticos.appendChild(circulo);
          });

          // Insertar debajo de la imagen
          contenedor.appendChild(coloresGeneticos);

        }

        // Aplicar colores visuales
        document.getElementById("colorA1").style.backgroundColor = A1;
        document.getElementById("colorA2").style.backgroundColor = A2;
        document.getElementById("colorA3").style.backgroundColor = A3;
        document.getElementById("colorA4").style.backgroundColor = A4;
        document.getElementById("colorA5").style.backgroundColor = A5;
      }
    }
  } 
  


function procesarSeleccionH(bloque) {

  // Para la Selección de Cabeza de Hembras

  if (bloque !== "hembra" || !hembraCabeza) return;

  switch (hembraCabeza) {
    case "Roja(Pura)":
      CabzH = "RY";
      HCbz[1] = "R";
      HCbz[2] = "Y";
      HCbz[3] = "r";
      HCbz[4] = "r";
      break;
    case "Roja(/Negro)":
      CabzH = "RY";
      HCbz[1] = "R";
      HCbz[2] = "N";
      HCbz[3] = "r";
      HCbz[4] = "r";
      break;
    case "Roja(/Naranja)":
      CabzH = "RY";
      HCbz[1] = "R";
      HCbz[2] = "Y";
      HCbz[3] = "r";
      HCbz[4] = "m";
      break;
    case "Roja(/Amarillo)":
      CabzH = "RY";
      HCbz[1] = "R";
      HCbz[2] = "Y";
      HCbz[3] = "r";
      HCbz[4] = "a";
      break;
    case "Negra(Pura)":
      CabzH = "NY";
      HCbz[1] = "N";
      HCbz[2] = "Y";
      HCbz[3] = "r";
      HCbz[4] = "r";
      break;
    case "Negra(/Naranja)":
      CabzH = "NY";
      HCbz[1] = "N";
      HCbz[2] = "Y";
      HCbz[3] = "m";
      HCbz[4] = "m";
      break;
    case "Negra(/Amarillo)":
      CabzH = "NY";
      HCbz[1] = "N";
      HCbz[2] = "Y";
      HCbz[3] = "a";
      HCbz[4] = "a";
      break;
    case "Negra(/Naranja,/Amarillo)":
      CabzH = "NY";
      HCbz[1] = "N";
      HCbz[2] = "Y";
      HCbz[3] = "m";
      HCbz[4] = "a";
      break;
    case "Negra(/Rojo,/Amarillo)":
      CabzH = "NY";
      HCbz[1] = "N";
      HCbz[2] = "Y";
      HCbz[3] = "r";
      HCbz[4] = "a";
      break;
    case "Negra(/Rojo,/Naranja)":
      CabzH = "NY";
      HCbz[1] = "N";
      HCbz[2] = "Y";
      HCbz[3] = "r";
      HCbz[4] = "m";
      break;
    case "Naranja(Pura)":
      CabzH = "MY";
      HCbz[1] = "R";
      HCbz[2] = "Y";
      HCbz[3] = "m";
      HCbz[4] = "m";
      break;
    case "Naranja(/Amarillo)":
      CabzH = "MY";
      HCbz[1] = "R";
      HCbz[2] = "Y";
      HCbz[3] = "m";
      HCbz[4] = "a";
      break;
    case "Amarilla":
      CabzH = "AY";
      HCbz[1] = "R";
      HCbz[2] = "Y";
      HCbz[3] = "a";
      HCbz[4] = "a";
      break;
  }

  if (PchsH !== "" && DorH !== "") {
    GTH = HCbz[1] + HCbz[2] + HCbz[3] + HCbz[4] + HPchs[1] + HPchs[2] + HCpos[1] + HCpos[2] + HCpos[3] + HCpos[4];
    FTH = CabzH + PchsH + DorH;
    HembraLista = 1;


    const sustituciones = {
      "MYMFd": "RYMFd", "MYMFdd": "RYMFdd", "MYBFd": "RYBFd", "MYBFdd": "RYBFdd",
      "MYMFW": "RYMFW", "MYBFW": "RYBFW", "AYMFW": "RYMFW", "AYBFW": "RYBFW",
      "AYMFd": "RYMFd", "AYBFd": "RYBFd"
    };
    if (sustituciones[FTM]) FTM = sustituciones[FTM];



    // Para los portadores y sus colores
    B1 = "whitesmoke";
    B2 = "whitesmoke";
    B3 = "whitesmoke";
    B4 = "whitesmoke";
    B5 = "whitesmoke";

    if (HCbz[2] === "N" && HCbz[1] !== "N") {
      B1 = "black";
    }

    switch (HCbz[3]) {
      case "m": B1 = "orange"; break;
      case "a": B1 = "yellow"; break;
    }

    switch (HCbz[4]) {
      case "m": B2 = "orange"; break;
      case "a": B2 = "yellow"; break;
    }

    if (HPchs[1] !== HPchs[2]) {
      switch (HPchs[1]) {
        case "T": B3 = "pink"; break;
        case "A": B3 = "blue"; break;
      }

      switch (HPchs[2]) {
        case "T": B4 = "pink"; break;
        case "A": B4 = "blue"; break;
        case "b": B4 = "white"; break;
      }
    }
  }

  if (HCpos[1] !== HCpos[2]) {
    if (HCpos[2] === "F") {
      B5 = "blue";
    }
  }

  // Selección Pecho de hembras

  if (bloque === "hembra" && hembraPecho) {
    switch (hembraPecho) {
      case "Malva(Puro)":
        PchsH = "M";
        HPchs[1] = "M";
        HPchs[2] = "M";
        break;
      case "Malva(/Blanco)":
        PchsH = "M";
        HPchs[1] = "M";
        HPchs[2] = "b";
        break;
      case "Malva(/Lila)":
        PchsH = "M";
        HPchs[1] = "M";
        HPchs[2] = "T";
        break;
      case "Malva(/Azul,/Blanco)":
        PchsH = "M";
        HPchs[1] = "A";
        HPchs[2] = "b";
        break;
      case "Malva(/Lila,/Azul)":
        PchsH = "M";
        HPchs[1] = "A";
        HPchs[2] = "T";
        break;
      case "Malva(/Azul)":
        PchsH = "M";
        HPchs[1] = "M";
        HPchs[2] = "A";
        break;
      case "Lila(Puro)":
        PchsH = "T";
        HPchs[1] = "T";
        HPchs[2] = "T";
        break;
      case "Lila(/Blanco)":
        PchsH = "T";
        HPchs[1] = "T";
        HPchs[2] = "b";
        break;
      case "Azul(Puro)":
        PchsH = "A";
        HPchs[1] = "A";
        HPchs[2] = "A";
        break;
      case "Blanco":
        PchsH = "B";
        HPchs[1] = "b";
        HPchs[2] = "b";
        break;
    }
  }
  if (CabzH !== "" && DorH !== "") {
    GTH = HCbz[1] + HCbz[2] + HCbz[3] + HCbz[4] + HPchs[1] + HPchs[2] + HCpos[1] + HCpos[2] + HCpos[3] + HCpos[4];
    FTH = CabzH + PchsH + DorH;
    HembraLista = 1;

    const sustituciones = {
      "MYMFd": "RYMFd", "MYMFdd": "RYMFdd", "MYBFd": "RYBFd", "MYBFdd": "RYBFdd",
      "MYMFW": "RYMFW", "MYBFW": "RYBFW", "AYMFW": "RYMFW", "AYBFW": "RYBFW",
      "AYMFd": "RYMFd", "AYBFd": "RYBFd"
    };
    if (sustituciones[FTM]) FTM = sustituciones[FTM];


    // Para los portadores y sus colores
    B1 = "whitesmoke";
    B2 = "whitesmoke";
    B3 = "whitesmoke";
    B4 = "whitesmoke";
    B5 = "whitesmoke";

    if (HCbz[2] === "N" && HCbz[1] !== "N") {
      B1 = "black";
    }

    switch (HCbz[3]) {
      case "m": B1 = "orange"; break;
      case "a": B1 = "yellow"; break;
    }

    switch (HCbz[4]) {
      case "m": B2 = "orange"; break;
      case "a": B2 = "yellow"; break;
    }

    if (HPchs[1] !== HPchs[2]) {
      switch (HPchs[1]) {
        case "T": B3 = "pink"; break;
        case "A": B3 = "blue"; break;
      }

      switch (HPchs[2]) {
        case "T": B4 = "pink"; break;
        case "A": B4 = "blue"; break;
        case "b": B4 = "white"; break;
      }
    }

    if (HCpos[1] !== HCpos[2]) {
      if (HCpos[2] === "F") {
        B5 = "blue";
      }
    }
  }

  // Selección Dorso de Hembras

  if (bloque === "hembra" && hembraDorso) {
    switch (hembraDorso) {
      case "Verde(Puro)":
        DorH = "VW";
        HCpos[1] = "V";
        HCpos[2] = "V";
        HCpos[3] = "W";
        HCpos[4] = "W";
        break;
      case "Verde(/Azul)":
        DorH = "VW";
        HCpos[1] = "V";
        HCpos[2] = "F";
        HCpos[3] = "W";
        HCpos[4] = "W";
        break;
      case "Azul(Puro)":
        DorH = "FW";
        HCpos[1] = "F";
        HCpos[2] = "F";
        HCpos[3] = "W";
        HCpos[4] = "W";
        break;
      case "Amarillo":
        DorH = "Vd";
        HCpos[1] = "V";
        HCpos[2] = "V";
        HCpos[3] = "d";
        HCpos[4] = "W";
        break;
      case "Amarillo(/Azul)":
        DorH = "Vd";
        HCpos[1] = "V";
        HCpos[2] = "F";
        HCpos[3] = "d";
        HCpos[4] = "W";
        break;
      case "Dilución Azul":
        DorH = "Fd";
        HCpos[1] = "F";
        HCpos[2] = "F";
        HCpos[3] = "d";
        HCpos[4] = "W";
        break;
    }

    if (CabzH !== "" && PchsH !== "") {
      GTH = HCbz[1] + HCbz[2] + HCbz[3] + HCbz[4] + HPchs[1] + HPchs[2] + HCpos[1] + HCpos[2] + HCpos[3] + HCpos[4];
      FTH = CabzH + PchsH + DorH;
      HembraLista = 1;

      const sustituciones = {
        "MYMFd": "RYMFd", "MYMFdd": "RYMFdd", "MYBFd": "RYBFd", "MYBFdd": "RYBFdd",
        "MYMFW": "RYMFW", "MYBFW": "RYBFW", "AYMFW": "RYMFW", "AYBFW": "RYBFW",
        "AYMFd": "RYMFd", "AYBFd": "RYBFd"
      };
      if (sustituciones[FTM]) FTM = sustituciones[FTM];




      // Para los portadores y sus colores
      B1 = "whitesmoke";
      B2 = "whitesmoke";
      B3 = "whitesmoke";
      B4 = "whitesmoke";
      B5 = "whitesmoke";

      if (HCbz[2] === "N" && HCbz[1] !== "N") {
        B1 = "black";
      }

      switch (HCbz[3]) {
        case "m": B1 = "orange"; break;
        case "a": B1 = "yellow"; break;
      }

      switch (HCbz[4]) {
        case "m": B2 = "orange"; break;
        case "a": B2 = "yellow"; break;
      }

      if (HPchs[1] !== HPchs[2]) {
        switch (HPchs[1]) {
          case "T": B3 = "pink"; break;
          case "A": B3 = "blue"; break;
        }

        switch (HPchs[2]) {
          case "T": B4 = "pink"; break;
          case "A": B4 = "blue"; break;
          case "b": B4 = "white"; break;
        }
      }

      if (HCpos[1] !== HCpos[2]) {
        if (HCpos[2] === "F") {
          B5 = "blue";
        }
      }
    }

    // 🖥️ Mostrar datos en pantalla
    // document.getElementById("genotipoMacho").textContent = GTM;
    //  document.getElementById("fenotipoMacho").textContent = FTM;
    // document.getElementById("colorA1txt").textContent = B1; 
    // document.getElementById("colorA3txt").textContent = B3;
   // document.getElementById("colorA4txt").textContent = B4;
   // document.getElementById("colorA5txt").textContent = B5;
   // document.getElementById("mensajeGenetico").textContent = Msg1 || Msg;

    if (ErrT !== "Error") {
      // Construir ruta de imagen
      const rutaBase = "imagenes/";
      const extension = ".jpg";
      const nombreArchivo = FTH + extension;
      const rutaFinal = rutaBase + nombreArchivo;

      console.log("Imagen generada:", rutaFinal);

      // Limpiar imagen anterior y crear nueva
      const contenedor = document.getElementById("imagenHembraContenedor");
      if (contenedor) {
        contenedor.innerHTML = ""; // Limpia cualquier imagen previa

        const nuevaImagen = document.createElement("img");
        nuevaImagen.src = rutaFinal;
        nuevaImagen.alt = "Ejemplar Hembra";
        nuevaImagen.style = "display: block; margin: 0 auto; max-width: 100%; height: auto;";

        contenedor.appendChild(nuevaImagen);

        // Crear contenedor de colores genéticos
        const coloresGeneticos = document.createElement("div");
        coloresGeneticos.id = "coloresGeneticos";
        coloresGeneticos.style.display = "flex";
        coloresGeneticos.style.justifyContent = "center";
        coloresGeneticos.style.flexWrap = "wrap";
        coloresGeneticos.style.gap = "6px";
        coloresGeneticos.style.marginTop = "8px";

        // Crear y agregar cada círculo
        [B1, B2, B3, B4, B5].forEach((color, index) => {
          const circulo = document.createElement("div");
          circulo.className = "color-box";
          circulo.style.width = "15px";
          circulo.style.height = "15px";
          circulo.style.borderRadius = "50%";
          circulo.style.border = "1px solid #000";
          circulo.style.backgroundColor = color;
          coloresGeneticos.appendChild(circulo);
        });

        // Insertar debajo de la imagen
        contenedor.appendChild(coloresGeneticos);

      }

      // Aplicar colores visuales
      document.getElementById("colorB1").style.backgroundColor = B1;
      document.getElementById("colorB2").style.backgroundColor = B2;
      document.getElementById("colorB3").style.backgroundColor = B3;
      document.getElementById("colorB4").style.backgroundColor = B4;
      document.getElementById("colorB5").style.backgroundColor = B5;

    }
  }
}
//  ********************************************************************************************
// Funcion para el cruzamiento de la pareja y obtencion de las crias.
// *********************************************************************************************
function procesarDescendencia() {
  if (MachoListo === 1 && HembraLista === 1) {

    console.log( " Macho y Hembra  :::::  ", MachoListo ,HembraLista);

    // Declaración de arrays
    const A = Array(33).fill("");
    const B = Array(33).fill("");
    const C = Array(33).fill("");
    const D = Array(33).fill("");
    const Ee = Array(33).fill("");
    const F = Array(33).fill("");
    const G = Array(33).fill("");
    const H = Array(33).fill("");
    const I = Array(33).fill("");
    const J = Array(33).fill("");
  
    // Macho - Primer alelo
    for (let i = 1; i <= 16; i++) A[i] = MCbz[1];
    for (let i = 1; i <= 8; i++) B[i] = MCbz[3];
    for (let i = 9; i <= 16; i++) B[i] = MCbz[4];
    for (let i = 1; i <= 4; i++) C[i] = MPchs[1];
    for (let i = 5; i <= 8; i++) C[i] = MPchs[2];
    for (let i = 9; i <= 12; i++) C[i] = MPchs[1];
    for (let i = 13; i <= 16; i++) C[i] = MPchs[2];
  
       // Para D
        D[1] = MCpos[1]
        D[2] = MCpos[1]
        D[3] = MCpos[2]
        D[4] = MCpos[2]
        D[5] = MCpos[1]
        D[6] = MCpos[1]
        D[7] = MCpos[2]
        D[8] = MCpos[2]
        D[9] = MCpos[1]
        D[10] = MCpos[1]
        D[11] = MCpos[2]
        D[12] = MCpos[2]
        D[13] = MCpos[1]
        D[14] = MCpos[1]
        D[15] = MCpos[2]
        D[16] = MCpos[2]
         // Para Ee
        Ee[1]= MCpos[3]
        Ee[2]= MCpos[4]
        Ee[3]= MCpos[3]
        Ee[4]= MCpos[4]
        Ee[5]= MCpos[3]
        Ee[6]= MCpos[4]
        Ee[7]= MCpos[3]
        Ee[8]= MCpos[4]
        Ee[9]= MCpos[3]
        Ee[10] = MCpos[4]
        Ee[11] = MCpos[3]
        Ee[12] = MCpos[4]
        Ee[13] = MCpos[3]
        Ee[14] = MCpos[4]
        Ee[15] = MCpos[3]
        Ee[16] = MCpos[4]

    
    // Macho - Segundo alelo
    for (let i = 17; i <= 32; i++) A[i] = MCbz[2];
    for (let i = 17; i <= 24; i++) B[i] = MCbz[3];
    for (let i = 25; i <= 32; i++) B[i] = MCbz[4];
    for (let i = 17; i <= 20; i++) C[i] = MPchs[1];
    for (let i = 21; i <= 24; i++) C[i] = MPchs[2];
    for (let i = 25; i <= 28; i++) C[i] = MPchs[1];
    for (let i = 29; i <= 32; i++) C[i] = MPchs[2];

        //  Para D
        D[17] = MCpos[1]
        D[18] = MCpos[1]
        D[19] = MCpos[2]
        D[20] = MCpos[2]
        D[21] = MCpos[1]
        D[22] = MCpos[1]
        D[23] = MCpos[2]
        D[24] = MCpos[2]
        D[25] = MCpos[1]
        D[26] = MCpos[1]
        D[27] = MCpos[2]
        D[28] = MCpos[2]
        D[29] = MCpos[1]
        D[30] = MCpos[1]
        D[31] = MCpos[2]
        D[32] = MCpos[2]
        //' Para Ee
        Ee[17] = MCpos[3]
        Ee[18] = MCpos[4]
        Ee[19] = MCpos[3]
        Ee[20] = MCpos[4]
        Ee[21] = MCpos[3]
        Ee[22] = MCpos[4]
        Ee[23] = MCpos[3]
        Ee[24] = MCpos[4]
        Ee[25] = MCpos[3]
        Ee[26] = MCpos[4]
        Ee[27] = MCpos[3]
        Ee[28] = MCpos[4]
        Ee[29] = MCpos[3]
        Ee[30] = MCpos[4]
        Ee[31] = MCpos[3]
        Ee[32] = MCpos[4]
  
    
  
    // Hembra - Primer alelo
    for (let i = 1; i <= 16; i++) F[i] = HCbz[1];
    for (let i = 1; i <= 8; i++) G[i] = HCbz[3];
    for (let i = 9; i <= 16; i++) G[i] = HCbz[4];
    for (let i = 1; i <= 4; i++) H[i] = HPchs[1];
    for (let i = 5; i <= 8; i++) H[i] = HPchs[2];
    for (let i = 9; i <= 12; i++) H[i] = HPchs[1];
    for (let i = 13; i <= 16; i++) H[i] = HPchs[2];

      // Para I
        I[1] = HCpos[1]
        I[2] = HCpos[1]
        I[3] = HCpos[2]
        I[4] = HCpos[2]
        I[5] = HCpos[1]
        I[6] = HCpos[1]
        I[7] = HCpos[2]
        I[8] = HCpos[2]
        I[9] = HCpos[1]
        I[10] = HCpos[1]
        I[11] = HCpos[2]
        I[12] = HCpos[2]
        I[13] = HCpos[1]
        I[14] = HCpos[1]
        I[15] = HCpos[2]
        I[16] = HCpos[2]
         //  Para J
        J[1] = HCpos[3]
        J[2] = HCpos[4]
        J[3] = HCpos[3]
        J[4] = HCpos[4]
        J[5] = HCpos[3]
        J[6] = HCpos[4]
        J[7] = HCpos[3]
        J[8] = HCpos[4]
        J[9] = HCpos[3]
        J[10] = HCpos[4]
        J[11] = HCpos[3]
        J[12] = HCpos[4]
        J[13] = HCpos[3]
        J[14] = HCpos[4]
        J[15] = HCpos[3]
        J[16] = HCpos[4]

    // Hembra - Segundo alelo
    for (let i = 17; i <= 32; i++) F[i] = HCbz[2];
    for (let i = 17; i <= 24; i++) G[i] = HCbz[3];
    for (let i = 25; i <= 32; i++) G[i] = HCbz[4];
    for (let i = 17; i <= 20; i++) H[i] = HPchs[1];
    for (let i = 21; i <= 24; i++) H[i] = HPchs[2];
    for (let i = 25; i <= 28; i++) H[i] = HPchs[1];
    for (let i = 29; i <= 32; i++) H[i] = HPchs[2];

      //' Para I
        I[17] = HCpos[1]
        I[18] = HCpos[1]
        I[19] = HCpos[2]
        I[20] = HCpos[2]
        I[21] = HCpos[1]
        I[22] = HCpos[1]
        I[23] = HCpos[2]
        I[24] = HCpos[2]
        I[25] = HCpos[1]
        I[26] = HCpos[1]
        I[27] = HCpos[2]
        I[28] = HCpos[2]
        I[29] = HCpos[1]
        I[30] = HCpos[1]
        I[31] = HCpos[2]
        I[32] = HCpos[2]
       // ' Para E
        J[17] = HCpos[3]
        J[18] = HCpos[4]
        J[19] = HCpos[3]
        J[20] = HCpos[4]
        J[21] = HCpos[3]
        J[22] = HCpos[4]
        J[23] = HCpos[3]
        J[24] = HCpos[4]
        J[25] = HCpos[3]
        J[26] = HCpos[4]
        J[27] = HCpos[3]
        J[28] = HCpos[4]
        J[29] = HCpos[3]
        J[30] = HCpos[4]
        J[31] = HCpos[3]
        J[32] = HCpos[4]
        
        Ejemplares = 0;
   
  console.log( "Macho >>>  GTM - FTM ",GTM,FTM," Hembra >>>  GTM - FTM",GTH,FTH);
  
    //  Proceso de Cruzamiento de Aves.*****************************

    // const Celda = [];
    //const ComparaCelda = [];
   
    let tt= " :: "
    let Num = 1;
  
  
    for (let L = 1; L <= 32; L++) {
      for ( II = 1; II <= 32; II++) {
        let Mn = 0;
       
        // Pechos Malvas
        if (C[L] !== "M" || C[L] !== "T" || C[L] !== "A") {
          if (H[II] === "M") {
            Hk = H[II] + C[L];
            Mn = 1;
          } else if (C[L] === "M") {
            Hk = C[L] + H[II];
            Mn = 1;
          } else {
            Hk = C[L] + H[II];
            Mn = 1;
          } 
          
          // Pechos Rosa
        if (H[II] === "T" && C[L] === "b") {
          Hk = H[II] + C[L];
          Mn = 1;
        } else {
          Hk = C[L] + H[II];
          Mn = 1;
        }
  
        if (H[II] === "A" && C[L] !== "M") {
          Hk = H[II] + C[L];
          Mn = 1;
        }
  
        if (Mn !== 1) {
          Hk = C[L] + H[II];
        }
        } else {
          Hk = C[L] + H[II];
        }
  
       
        // Cabeza Roja/Negra las dos primeras letras
        if ( F[II] === "R" ) {
          lk = F[II] + A[L];
        } else { 
          lk =  A[L] + F[II]; 
        }

        if ( I[II] === "V" ) {
          jh =  I[II] + D[L];
        } else { 
          jh =  D[L] + I[II]; 
        }
               
        if (Ee[L] === "L") Ee[L] = "W";
  
        sex = lk.charAt(2); // Mid(lk, 2, 1)

            // Hembras con d
        if (MCpos[3] === "W" && MCpos[4] === "W" && sex === "Y") {
          if (Ee[L] === "d" || J[II] === "d") {
            Ee[L] = "W";
            J[II] = "W";
          }
        }
  
        // Machos cruzando con Hembras con d
        if (HCpos[3] === "d" && HCpos[4] === "W" && sex !== "Y") {
          if (MCpos[3] === "W" && MCpos[4] === "W") {
            Ee[L] = "d";
            J[II] = "W";
          }
        }
  
        if (MCpos[3] === "d" && MCpos[4] === "d") {
          if (HCpos[3] === "d" && HCpos[4] === "W" && sex !== "Y") {
            Ee[L] = "d";
            J[II] = "d";
          }
        }
  
        // Pasteles con Hembras con gen D
        if (MCpos[3] === "d" && MCpos[4] === "W") {
          if (HCpos[3] === "d" && HCpos[4] === "W" && sex === "Y" && Ee[L] === "d" && J[II] === "d") {
            Ee[L] = "W";
            J[II] = "W";
          }
  
          if (HCpos[3] === "d" && HCpos[4] === "W" && sex !== "Y" && Ee[L] === "W" && J[II] === "W") {
            Ee[L] = "d";
            J[II] = "d";
          }
        }
  
        // Ajuste final para todas las piezas
        if (Ee[L] === "W" && J[II] === "d") {
          Ee[L] = "d";
          J[II] = "W";
        }
  
        if (H[II] === "M") {
          Hk = H[II] + C[L];
        }
        // Variables del Machos > A(L) , B(L) , C(L) , D(L) , Ee(L)
        // Variables de la Hembra >  F (II), G(II), H(II), I(II), J(II)
        // FORMACION DEL CODIGO GENETICO DE LA NUEVA AVE.
         Celda[Num] = lk + B[L] + G[II] + Hk + jh + Ee[L] + J[II]   
         console.log(" El contenido de Num hasta 1024 - Celda [Num] :  >>>>  ", Num, Celda[Num]);
         Num++;
         
      }
    }
         //Termina el proceso de Cruzamiento Filas y Columnas.



        // Comienza el Proceso de Comparacion para detectar cantidad correspondiente
        // de cada ejemplar en la Matriz de Decendientes.
        //Para inicializar una Variable auxiliar al proceso.
    
    for (let L = 1; L <= 1024; L++) {
      ComparaCelda[L] = Celda[L];
         console.log(" BD del cruzamiento , Orden - Ejemplar en Celda []:", L,Celda[L]);

           }
    
    // const CuentaAves = Array(1025).fill(0);
    // const Consc = Array(1025).fill(0);
    // const PorCiento = Array(1025).fill(0);

    const Kt = -1;
    let cons = 0;
  
    // Comparación de patrones, filtro de ejemplares repetidos,base para mostrar imagenes.
    for (let L = 1; L <= 1024; L++) {
      CuentaAves[L] = 0
      let ComparaPatron = ComparaCelda[L];
      if (ComparaPatron !== Kt) {
        for (II = 1; II <= 1024; II++) {
          if (ComparaCelda[II] !== Kt) {
            if (ComparaPatron === ComparaCelda[II]) {
              CuentaAves[L] = CuentaAves[L]+1;
              console.log(" Que tiene  el contador L - CuentaAves - Celda [L] :  ", L, CuentaAves[L], Celda[L]);
              ComparaCelda[II] = Kt;
            }
          }
        }
          Ejemplares= Ejemplares+1;
          TEjemplares = Ejemplares;
          NEjemplar[Ejemplares]= ComparaPatron;
          CEjemplar[Ejemplares]= CuentaAves[L];   
      }
    }
  
     let te = 0;
     for (te = 1; te <= Ejemplares ; te++ ){
     console.log(" Total de Ejemplares a mostrar :  ", TEjemplares,NEjemplar[te],CEjemplar[te] ); }

    // Asignación de índices únicos
    cons = 0;
   
    for (let L = 1; L <= 1024; L++) {
      if (CuentaAves[L] > 0) {

        // console.log("  ver si no esta vacio   ", L, CuentaAves[L]);
        cons = cons + 1;
        Consc[L] = cons;
      }

    }
      
     // Fin del proceso de comparacion de CeldasAves.

    

    // Estadística del cruzamiento
    

       
      //const ij = 1024;
      // II = 1025;
      
        
        //   }
  
  
       II = 1;
      let L = 1;
          // Comienzo del Proceso de Calculo para Sacar el Prociento.
      const PorCiento = Array(1025).fill(0);
      let fa33 = "", rrt = "";
  

   for (II = 1; II <= 1024; II++) {
         
          // console.log("Entro al while ",L, CuentaAves[L],II,CuentaAves[II] );

         if (CuentaAves[II] !== 0) {
             PorCiento[II] = (CuentaAves[II] / 1024) * 100;

             console.log("Es esto  Celda [II] : >> ", Celda[II]);

        
        let fa1 = Celda[II].charAt(0);
        let faa = Celda[II].charAt(1);
        console.log( "Sexo  de Celda [II] : >> ", faa);

        let fh = faa;
        if (faa !== "Y") faa = "X";
            // Fin del Sexo.
        let fb2 = Celda[II].charAt(2);
        let fb3 = Celda[II].charAt(3);
        let fa2 = Celda[II].charAt(4);
        let fa7 = Celda[II].charAt(5);
        let fa3 = Celda[II].charAt(6);
        let fa8 = Celda[II].charAt(6);
        let fa4 = Celda[II].charAt(7);
        let fa5 = Celda[II].charAt(8);
        let fa6 = Celda[II].charAt(9);
        let fa10 = Celda[II].charAt(4);
  
        // rrt = fa1 + faa + fb2 + fb3 + fa2 + fa3 + fa33 + fa4 + fa5 + fa6 + fa7 + fa8 + fa10;

          console.log("Caracteres extraidos: ", Celda[II], fa1 , faa , fb2 , fb3 , fa2 , fa3 , fa33 , fa4 , fa5 , fa6 , fa7 , fa8 , fa10);
          console.log(" Que tiene  CuentaAves[II]  y Num  : ", CuentaAves[II], Num);
        // Cabezas amarillas
        if (fb2 === "a" && fb3 === "a") fa1 = "A";
        if (fb2 === "m" && fb3 === "m") fa1 = "M";
  
        // Pecho genético
        if (fa5 !== "d" && fa6 !== "d") {
          fa3 = fa3+ fa5;
        } else if (fa5 === "d" && fa6 !== "d") {
          fa3 = fa3+ fa5;
        } else if (fa6 === "d" && fa5 !== "d") {
          fa3 = fa3+ fa6;
        } else {
          fa3 += fa5 + fa6;
        }
  
        if (fa5 === "d" && fa6 === "d" && fa8 === "V" && faa === "Y") {
          fa3 = "Vd";
        }
  
        // Ajustes de cabeza
        if ((fa2 === "A" && fa7 === "b") || (fa2 === "b" && fa7 === "A") ||
            (fa2 === "A" && fa7 === "T") || (fa2 === "T" && fa7 === "A")) {
          fa2 = "M";
        }
  
        // Como concatenar en JS
        // El ejemplar 
         Fta = fa1 + faa + fa2 + fa3;

         console.log("Se forma Fta: ",II,Fta);

        // Reemplazo de códigos genéticos
        const reemplazos = {
          "AYMFd": "RYMFd", "AYBFd": "RYBFd", "AXMFdd": "RXMFdd", "AXBFdd": "RXBFdd",
          "AXMFd": "RXMFd", "AXBFd": "RXBFd", "AXMFW": "RXMFW", "AXBFW": "RXBFW",
          "AYMFW": "RYMFW", "AYBFW": "RYBFW", "MXBFd": "RXBFd", "MXMFd": "RXMFd",
          "MYMFd": "RYMFd", "MYBFd": "RYBFd", "MXBFW": "RXBFW", "MXMFW": "RXMFW",
          "MYMFW": "RYMFW", "MYBFW": "RYBFW"
        };
        if (reemplazos[Fta]) Fta = reemplazos[Fta];
  
        console.log("Reemplazo que dejo a FTA en : >> ",Fta);
        
       //  DEFINICION DE LOS COLORES QUE PORTA.
       // Cabezas
       if (fh === "N" && fa1 !== "N") p1 = "black";
       if (fb2 === "m") p1 = "orange";
       if (fb2 === "a") p1= "yellow";
       if (fb3 === "m") p2 = "orange";
       if (fb3 === "a") p2 = "yellow";
  
         // Pechos
        if (fa10 !== fa7) {
        if (fa10 === "T") p3 = "pink";
        if (fa10 === "A") p3 = "blue";
  
        if (fa7 === "T") p4 = "pink";
        if (fa7 === "A") p4 = "blue";
        if (fa7 === "b") p4 = "white";
        }
  
        // Dorso
        if (fa4 !== fa8 && fa4 === "F") {
        d5 = "blue";
        }
      }

     // console.log("Que tiene II > ", II);
    //  console.log("Que tiene Fta", Fta);   

      
    } 
  }  

  //  blanquear la imagen despues del cruzamiento 
             mostrarImagenTT();
             ij = 0;
  //console.log("Que tiene Fta", Fta);
  //console.log("Que tiene II > ", II);
  //return{II};

  
}

//*******************************************************************************
//     PROCESO PARA MOVER LAS FOTOS A LA DERECHA 
//*******************************************************************************


     //               Ejemplares = Ejemplares+1;   CANTIDAD EJEMPLARES
    //     NEjemplar[Ejemplares] = ComparaPatron;  GENOTIPOS
    //     CEjemplar[Ejemplares] = CuentaAves[L];  CANTIDAD POR GENOTIPO 


function BtonDerecha() {
  
     // Para correr las fotos hacia la derecha 
     
     if (Qboton === 2) {  if (II > 0 ) {II = II-1} }
     Qboton = 1;
     let te = 0;
     for (te = 1; te <= Ejemplares; te++ ){
         console.log(" Total de Ejemplares a mostrar :  ", te,NEjemplar[te],CEjemplar[te]);}
         console.log("Al principio Ejemplares, II y ij :>  ", Ejemplares,II,ij);    

       if (II === 1025) {II = 0;} 

      // if (ij === 0){} else{II = II+1;}    
              
       //console.log("Que tiene II , ij p trabajar > ", II,ij);



          II = II+1;
       
       if (II > TEjemplares) {
           console.log("<<<<  Ejemplares mostrados >>>> ",);
           II = 0;
          } else {             

               console.log("Que tiene II  p mostrar > ", II);

                  let L = 1; 
           const PorCiento = Array(1025).fill(0);
            
        // Comienzo del Proceso de Calculo para Sacar el Prociento. 

    //while ( II < TEjemplares+1)    {

            PorCiento[II] = (CEjemplar[II]/ 1024) * 100;

             // Sexdor = Celda[II]  Codigo de la Descendencia 
            console.log("Que tiene CEjemplar[II] : > ", CEjemplar[II]);

            fa1 = NEjemplar[II].charAt(0);
            //  Para poner el sexo 
             faa = NEjemplar[II].charAt(1);
             fh = faa;
             if (faa !== "Y") faa = "X";
                  // Fin del Sexo.
            fb2 = NEjemplar[II].charAt(2);
            fb3 = NEjemplar[II].charAt(3);
            fa2 = NEjemplar[II].charAt(4);
            fa7 = NEjemplar[II].charAt(5);
            fa3 = NEjemplar[II].charAt(6);
            fa8 = NEjemplar[II].charAt(6);
            fa4 = NEjemplar[II].charAt(7);
            fa5 = NEjemplar[II].charAt(8);
            fa6 = NEjemplar[II].charAt(9);
            fa10 =NEjemplar[II].charAt(4);
  
             
             let rrt = fa1 + faa + fb2 + fb3 + fa2 + fa3 + fa4 + fa5 + fa6 + fa7 + fa8 + fa10;

             //console.log("Caracteres q tiene Celda : ", NEjemplar[II]);
            // console.log("Caracteres extraidos: ",fa1 ,faa ,fb2 ,fb3 ,fa2 ,fa3 ,fa4 ,fa5 ,fa6 ,fa7 ,fa8 ,fa10);
            // console.log("Caracteres formados: rrt ", rrt);

                 // Cabezas amarillas
            if (fb2 === "a" && fb3 === "a") fa1 = "A";
            if (fb2 === "m" && fb3 === "m") fa1 = "M";
  
               // Tratamiento al Dorso. 

               if (fa5 === "Z" && faa === "Y") {  fa5 = "d";  } 

            if (fa5 !== "d" && fa6 !== "d") {
                 fa3 = fa3+ fa5;
            } else if (fa5 === "d" && fa6 !== "d") {
                        fa3 = fa3+ fa5;
                    } else if (fa6 === "d" && fa5 !== "d") {
                                  fa3 = fa3+ fa6;
                            } else { fa3 += fa5 + fa6; }
  
            if (fa5 === "d" && fa6 === "d" && fa8 === "V" && faa === "Y") { fa3 = "Vd";  }
  
               // Ajustes de cabeza
            if ((fa2 === "A" && fa7 === "b") || (fa2 === "b" && fa7 === "A") ||
                (fa2 === "A" && fa7 === "T") || (fa2 === "T" && fa7 === "A")) { fa2 = "M"; }
  
                 // Como concatenar en JS
                 // El ejemplar 
                  Fta = fa1 + faa + fa2 + fa3;
           
                  console.log("Que se forma en Fta: ",Fta,fa1 + faa + fa2 + fa3);

                // Reemplazo de códigos genéticos
                   const reemplazos = {
                   "AYMFd": "RYMFd", "AYBFd": "RYBFd", "AXMFdd": "RXMFdd", "AXBFdd": "RXBFdd",
                   "AXMFd": "RXMFd", "AXBFd": "RXBFd", "AXMFW": "RXMFW", "AXBFW": "RXBFW",
                   "AYMFW": "RYMFW", "AYBFW": "RYBFW", "MXBFd": "RXBFd", "MXMFd": "RXMFd",
                   "MYMFd": "RYMFd", "MYBFd": "RYBFd", "MXBFW": "RXBFW", "MXMFW": "RXMFW",
                   "MYMFW": "RYMFW", "MYBFW": "RYBFW"
                  };
                  if (reemplazos[Fta]) Fta = reemplazos[Fta];

                  fa33= fa3.charAt(0);
                  //console.log("Se tiene Fta y fa33 la letra del Dorso  ",Fta,fa33 );

                  // Para formar variables p condiciones de salida. Coge solo la "W" del Dorso.
                       Sexdor= faa+fa33;


                 // Para hembras Amarrillas no dan clasicos.

                if ((DorH === "Fd" && Sexdor === "XW") || (DorH === "Vd" && Sexdor === "XW" )) {
                            VerFoto = "NO";
                } 
                
                if (( fa3 === "Fd" && faa === "X" ) || (fa3 === "VZ" && faa === "X" ))  {
                   if (fa2 !== "M") { VerFoto = "NO";} }
                  
                   if (VerFoto !== "NO") {   }


                //  DEFINICION DE LOS COLORES PARA LA CABEZA.

                     if (fh === "N" && fa1 !== "N") C1 = "black";
                     if (fb2 === "m") C1 = "orange";
                     if (fb2 === "a") C1 = "yellow";
                     if (fb3 === "m") C2 = "orange";
                     if (fb3 === "a") C2 = "yellow";
  
                     // Pechos
                      if (fa10 !== fa7) {
                      if (fa10 === "T") C3 = "pink";
                      if (fa10 === "A") C3 = "blue";
                      if (fa7 === "T") C4 = "pink";
                      if (fa7 === "A") C4 = "blue";
                      if (fa7 === "b") C4 = "white";
                     }
  
                     // Dorso
                      if (fa4 !== fa8 && fa4 === "F") {
                         C5 = "blue";
                      }
        
                      //console.log( "Colores q porta ejemplar >>>>> ", C1, C2, C3, C4, C5 );

                        /*  VERIFICAR SIEMPRE PRIMERO SI EL FICHERO EXISTE PARA ALERTAR  */

                       //console.log("Que tiene II > ", II);
                       //console.log("Que tiene Fta", Fta);  
                         ij = II;
                       //console.log("Que tiene ij > ", ij); 
                      // console.log("Veces que pasa por el while : > ", ij); 
         
                       //console.log("II  saliendo antes de incrementar  > ", II);

       

     // *********  PARA MOSTRAR LA IMAGEN Y PORTADORES DE LA DESENDENCIA OBTENIDA.  *******
     //  **********************************************************************************

      if (ErrT !== "Error") {
        // Construir ruta de imagen
        const rutaBase = "imagenes/";
        const extension = ".jpg";
        const nombreArchivo = Fta + extension;
        const rutaFinal = rutaBase + nombreArchivo;

        console.log("Imagen generada para MOSTRAR :", rutaFinal);

        // Limpiar imagen anterior y crear nueva
        const contenedor = document.getElementById("imagenDescendenciaContenedor");

        if (contenedor) {
           contenedor.innerHTML = ""; // Limpia cualquier imagen previa

            // Estilo vertical para asegurar que los elementos se apilen
           contenedor.style.display = "flex";
           contenedor.style.flexDirection = "column";
           contenedor.style.alignItems = "center";

           const nuevaImagen = document.createElement("img");
           nuevaImagen.src = rutaFinal;
           nuevaImagen.alt = "Ejemplar Hembra";
           nuevaImagen.style = "display: block; margin: 0 auto; max-width: 100%; height: auto;";

           contenedor.appendChild(nuevaImagen);

           // Crear contenedor de colores genéticos
           const coloresGeneticos = document.createElement("div");
           coloresGeneticos.id = "coloresGeneticos";
           coloresGeneticos.style.display = "flex";
           coloresGeneticos.style.justifyContent = "center";
           coloresGeneticos.style.flexWrap = "wrap";
           coloresGeneticos.style.gap = "6px";
           coloresGeneticos.style.marginTop = "8px";

           // Crear y agregar cada círculo con ID único
          [C1, C2, C3, C4, C5].forEach((color, index) => {
           const circulo = document.createElement("div");
           circulo.className = "color-box";
           circulo.id = `colorB${index + 1}`; // ← ID para acceso posterior
           circulo.style.width = "15px";
           circulo.style.height = "15px";
           circulo.style.borderRadius = "50%";
           circulo.style.border = "1px solid #000";
           circulo.style.backgroundColor = color;
            coloresGeneticos.appendChild(circulo);
          });

          // Insertar debajo de la imagen
          contenedor.appendChild(coloresGeneticos);
       }

        // Aplicar colores visuales

        console.log( "Colores del Portador a mostrar >>>>> ", C1, C2, C3, C4, C5 );
        document.getElementById("colorC1").style.backgroundColor = C1;
        document.getElementById("colorC2").style.backgroundColor = C2;
        document.getElementById("colorC3").style.backgroundColor = C3;
        document.getElementById("colorC4").style.backgroundColor = C4;
        document.getElementById("colorC5").style.backgroundColor = C5;
        //return{};
      } 
     
     }
     
     //II = II+1;
       console.log("Que tiene II cuando termino proceso: > ", II);
      //  return{};
       
          
}
   




/***********************************************
* PROCESO PARA MOVER LAS FOTOS A LA IZQUIERDA
************************************************/
function BtonIzquierda() {
  
  // Para correr las fotos hacia la derecha 

    
  
      Qboton = 2;
    if (II === 1025) {II = 0;} 
    console.log("Que tiene II , ij p trabajar > ", II,ij);

    if (II === 0 &&  ij > 0 ) {II = ij} 
    console.log("Que tiene II , ij p trabajar > ", II,ij);
 
          
    if (II === 0 && ij ===0) { console.log("<<<<  Ejemplares mostrados >>>> ",); } 
    
      if ( II > 1 ) { II = II-1; 

             // ij = II;

            console.log("Que tiene II  p trabajar > ", II);

               let L = 1; 
            const PorCiento = Array(1025).fill(0);
         
     // Comienzo del Proceso de Calculo para Sacar el Prociento. 

 //while ( II < TEjemplares+1)    {

         PorCiento[II] = (CEjemplar[II]/ 1024) * 100;

          // Sexdor = Celda[II]  Codigo de la Descendencia 
         console.log("Que tiene CEjemplar[II] : > ", CEjemplar[II]);

         fa1 = NEjemplar[II].charAt(0);
         //  Para poner el sexo 
          faa = NEjemplar[II].charAt(1);
          fh = faa;
          if (faa !== "Y") faa = "X";
               // Fin del Sexo.
         fb2 = NEjemplar[II].charAt(2);
         fb3 = NEjemplar[II].charAt(3);
         fa2 = NEjemplar[II].charAt(4);
         fa7 = NEjemplar[II].charAt(5);
         fa3 = NEjemplar[II].charAt(6);
         fa8 = NEjemplar[II].charAt(6);
         fa4 = NEjemplar[II].charAt(7);
         fa5 = NEjemplar[II].charAt(8);
         fa6 = NEjemplar[II].charAt(9);
         fa10 =NEjemplar[II].charAt(4);

          
          let rrt = fa1 + faa + fb2 + fb3 + fa2 + fa3 + fa4 + fa5 + fa6 + fa7 + fa8 + fa10;

          console.log("Caracteres q tiene Celda : ", NEjemplar[II]);
          console.log("Caracteres extraidos: ",fa1 ,faa ,fb2 ,fb3 ,fa2 ,fa3 ,fa4 ,fa5 ,fa6 ,fa7 ,fa8 ,fa10);
          console.log("Caracteres formados: rrt ", rrt);

              // Cabezas amarillas
         if (fb2 === "a" && fb3 === "a") fa1 = "A";
         if (fb2 === "m" && fb3 === "m") fa1 = "M";

            // Tratamiento al Dorso. 

            if (fa5 === "Z" && faa === "Y") {  fa5 = "d";  } 

         if (fa5 !== "d" && fa6 !== "d") {
              fa3 = fa3+ fa5;
         } else if (fa5 === "d" && fa6 !== "d") {
                     fa3 = fa3+ fa5;
                 } else if (fa6 === "d" && fa5 !== "d") {
                               fa3 = fa3+ fa6;
                         } else { fa3 += fa5 + fa6; }

         if (fa5 === "d" && fa6 === "d" && fa8 === "V" && faa === "Y") { fa3 = "Vd";  }

            // Ajustes de cabeza
         if ((fa2 === "A" && fa7 === "b") || (fa2 === "b" && fa7 === "A") ||
             (fa2 === "A" && fa7 === "T") || (fa2 === "T" && fa7 === "A")) { fa2 = "M"; }

              // Como concatenar en JS
              // El ejemplar 
               Fta = fa1 + faa + fa2 + fa3;
        
               console.log("Que se forma en Fta: ",Fta,fa1 + faa + fa2 + fa3);

             // Reemplazo de códigos genéticos
                const reemplazos = {
                "AYMFd": "RYMFd", "AYBFd": "RYBFd", "AXMFdd": "RXMFdd", "AXBFdd": "RXBFdd",
                "AXMFd": "RXMFd", "AXBFd": "RXBFd", "AXMFW": "RXMFW", "AXBFW": "RXBFW",
                "AYMFW": "RYMFW", "AYBFW": "RYBFW", "MXBFd": "RXBFd", "MXMFd": "RXMFd",
                "MYMFd": "RYMFd", "MYBFd": "RYBFd", "MXBFW": "RXBFW", "MXMFW": "RXMFW",
                "MYMFW": "RYMFW", "MYBFW": "RYBFW"
               };
               if (reemplazos[Fta]) Fta = reemplazos[Fta];

               fa33= fa3.charAt(0);
               console.log("Se tiene Fta y fa33 la letra del Dorso  ",Fta,fa33 );

               // Para formar variables p condiciones de salida. Coge solo la "W" del Dorso.
                    Sexdor= faa+fa33;


              // Para hembras Amarrillas no dan clasicos.

             if ((DorH === "Fd" && Sexdor === "XW") || (DorH === "Vd" && Sexdor === "XW" )) {
                         VerFoto = "NO";
             } 
             
             if (( fa3 === "Fd" && faa === "X" ) || (fa3 === "VZ" && faa === "X" ))  {
                if (fa2 !== "M") { VerFoto = "NO";} }
               
                if (VerFoto !== "NO") {   }


             //  DEFINICION DE LOS COLORES PARA LA CABEZA.

                  if (fh === "N" && fa1 !== "N") C1 = "black";
                  if (fb2 === "m") C1 = "orange";
                  if (fb2 === "a") C1 = "yellow";
                  if (fb3 === "m") C2 = "orange";
                  if (fb3 === "a") C2 = "yellow";

                  // Pechos
                   if (fa10 !== fa7) {
                   if (fa10 === "T") C3 = "pink";
                   if (fa10 === "A") C3 = "blue";
                   if (fa7 === "T") C4 = "pink";
                   if (fa7 === "A") C4 = "blue";
                   if (fa7 === "b") C4 = "white";
                  }

                  // Dorso
                   if (fa4 !== fa8 && fa4 === "F") {
                      C5 = "blue";
                   }
     
                   console.log( "Colores q porta ejemplar >>>>> ", C1, C2, C3, C4, C5 );

                     /*  VERIFICAR SIEMPRE PRIMERO SI EL FICHERO EXISTE PARA ALERTAR  */

                    console.log("Que tiene II > ", II);
                    console.log("Que tiene Fta", Fta);  
                      ij = II;
                    console.log("Que tiene ij > ", ij); 
                    console.log("Veces que pasa por el while : > ", ij); 
      
                    console.log("II  saliendo antes de incrementar  > ", II);

    

  // *********  PARA MOSTRAR LA IMAGEN Y PORTADORES DE LA DESENDENCIA OBTENIDA.  *******
  //  **********************************************************************************

   if (ErrT !== "Error") {
     // Construir ruta de imagen
     const rutaBase = "imagenes/";
     const extension = ".jpg";
     const nombreArchivo = Fta + extension;
     const rutaFinal = rutaBase + nombreArchivo;

     console.log("Imagen generada para MOSTRAR :", rutaFinal);

     // Limpiar imagen anterior y crear nueva
     const contenedor = document.getElementById("imagenDescendenciaContenedor");

     if (contenedor) {
        contenedor.innerHTML = ""; // Limpia cualquier imagen previa

         // Estilo vertical para asegurar que los elementos se apilen
        contenedor.style.display = "flex";
        contenedor.style.flexDirection = "column";
        contenedor.style.alignItems = "center";

        const nuevaImagen = document.createElement("img");
        nuevaImagen.src = rutaFinal;
        nuevaImagen.alt = "Ejemplar Hembra";
        nuevaImagen.style = "display: block; margin: 0 auto; max-width: 100%; height: auto;";

        contenedor.appendChild(nuevaImagen);

        // Crear contenedor de colores genéticos
        const coloresGeneticos = document.createElement("div");
        coloresGeneticos.id = "coloresGeneticos";
        coloresGeneticos.style.display = "flex";
        coloresGeneticos.style.justifyContent = "center";
        coloresGeneticos.style.flexWrap = "wrap";
        coloresGeneticos.style.gap = "6px";
        coloresGeneticos.style.marginTop = "8px";

        // Crear y agregar cada círculo con ID único
       [C1, C2, C3, C4, C5].forEach((color, index) => {
        const circulo = document.createElement("div");
        circulo.className = "color-box";
        circulo.id = `colorB${index + 1}`; // ← ID para acceso posterior
        circulo.style.width = "15px";
        circulo.style.height = "15px";
        circulo.style.borderRadius = "50%";
        circulo.style.border = "1px solid #000";
        circulo.style.backgroundColor = color;
         coloresGeneticos.appendChild(circulo);
       });

       // Insertar debajo de la imagen
       contenedor.appendChild(coloresGeneticos);
    }

     // Aplicar colores visuales

     console.log( "Colores del Portador a mostrar >>>>> ", C1, C2, C3, C4, C5 );
     document.getElementById("colorC1").style.backgroundColor = C1;
     document.getElementById("colorC2").style.backgroundColor = C2;
     document.getElementById("colorC3").style.backgroundColor = C3;
     document.getElementById("colorC4").style.backgroundColor = C4;
     document.getElementById("colorC5").style.backgroundColor = C5;
     //return{};
   } 
  
  }
  
  //II = II+1;
    console.log("Que tiene II cuando termino proceso: > ", II);
   //  return{};
    
       
}



/***************************************************************************
* Funcion para mostrar ave en el circulo de Descendencia despues del cruce.
***************************************************************************/
function mostrarImagenTT() {
  const contenedor = document.getElementById("imagenDescendenciaContenedor");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  contenedor.style.display = "flex";
  contenedor.style.flexDirection = "column";
  contenedor.style.alignItems = "center";

  const imagenBase = document.createElement("img");
  imagenBase.src = "imagenes/TT.jpg";
  imagenBase.alt = "Ejemplar base";
  imagenBase.style.display = "block";
  imagenBase.style.margin = "0 auto";
  imagenBase.style.maxWidth = "100%";
  imagenBase.style.height = "auto";

  contenedor.appendChild(imagenBase);
}





  //*************************************************************************************
  // COMIENZA LA REFERENCIA AL DOM PARA LA SELECCION DE LAS CARACTERISTICAS DEL EJEMPLAR. 
  // *************************************************************************************

       document.addEventListener("DOMContentLoaded", function () {
         const opciones = {
           macho: {
            cabeza: ["Roja(/Pura)", "Roja(/Negro)", "Roja(/Naranja)", "Roja(/Negro/Naranja)", "Negra(Pura)", "Naranja(/Negro)"],
            pecho: ["Malva(Puro)", "Malva(/Blanco)", "Malva(/Lila)", "Lila(Puro)", "Lila(/Blanco)", "Blanco"],
            dorso: ["Verde(Puro)", "Verde(/Azul)", "Azul(Puro)", "Amarillo Pastel", "Amarillo Pastel(/Azul)", "Amarillo doble dilución (Puro)", "Amarillo doble dilución (/Azul)", "Pastel Azul", "Simple Factor Azul", "Dilución Azul", "Pastel Verde", "Pastel Verde(/Azul)"]
                 },
           hembra: {
               cabeza: ["Roja(Pura)", "Roja(/Naranja)", "Negra(Pura)", "Naranja(Pura)"],
               pecho: ["Malva(Puro)", "Malva(/Blanco)", "Malva(/Lila)", "Lila(Puro)", "Lila(/Blanco)", "Blanco"],
               dorso: ["Verde(Puro)", "Verde(/Azul)", "Azul(Puro)", "Amarillo", "Amarillo(/Azul)", "Dilución Azul"]
                   }
          };

    document.querySelectorAll('select').forEach(select => {
      const bloque = select.dataset.bloque;
      const parte = select.dataset.parte;
      const lista = opciones[bloque][parte];

      lista.forEach(opcion => {
        const opt = document.createElement('option');
        opt.textContent = opcion;
        opt.value = opcion;
        select.appendChild(opt);
      });

      select.addEventListener('change', function () {
        const valor = this.value;
        console.log(`Seleccionado: ${bloque} ${parte} → ${valor}`); // ✅ Verificación

        if (bloque === "macho") {
          if (parte === "cabeza") machoCabeza = valor;
          if (parte === "pecho") machoPecho = valor;
          if (parte === "dorso") machoDorso = valor;
          procesarSeleccionM(bloque); // ✅ Llamada al procedimiento del macho
          if (MachoListo === 1 &&  HembraLista === 1) {
          procesarDescendencia(bloque); // Llamada al procedimiento para el cruzamiento de las aves
          
          } 
        } else if (bloque === "hembra") {
          if (parte === "cabeza") hembraCabeza = valor;
          if (parte === "pecho") hembraPecho = valor;
          if (parte === "dorso") hembraDorso = valor;
          procesarSeleccionH(bloque); // ✅ Llamada al procedimiento de la hembra
          if (MachoListo === 1 &&  HembraLista === 1 ) {
           procesarDescendencia(bloque); // Llamada al procedimiento para el cruzamiento de las aves
        } 
        }

       /* CONEXCION CON LOS BOTONES

         document.getElementById("btnDerecha").addEventListener("click", () => {
          
          console.log("Valores MACHO Y HEMBRA >>>>>", MachoListo,HembraLista );
          // BtonDerecha() 
        
          let te = 0;
          for (te = 1; te <= Ejemplares; te++ ){
              console.log(" Total de Ejemplares a mostrar :  ", te,NEjemplar[te],CEjemplar[te]);}
     
              console.log("Al principio Ejemplares, II y ij :>  ", Ejemplares,II,ij);    
        
        
        
           });

         document.getElementById("btnIzquierda").addEventListener("click", () => {
          
          console.log(" Valores MACHO Y HEMBRA >>>>>", MachoListo,HembraLista );
          BtonIzquierda() });
        
         */
      
       // PARA MOSTRAR EL PRIMER EJEMPLAR AL CARGAR LA PAGINA
         // window.addEventListener("DOMContentLoaded", () => {
         //  actualizarEjemplar(); } )
         // const id = bloque + parte.charAt(0).toUpperCase() + parte.slice(1);
         // const span = document.getElementById(id);
         /// if (span) span.textContent = valor;
          
       });    
    });
 // CONEXCION CON LOS BOTONES

 document.getElementById("btnDerecha").addEventListener("click", () => {
          
  console.log("Valores MACHO Y HEMBRA >>>>>", MachoListo,HembraLista );
  BtonDerecha() });
  
 document.getElementById("btnIzquierda").addEventListener("click", () => {
  
  console.log(" Valores MACHO Y HEMBRA >>>>>", MachoListo,HembraLista );
  BtonIzquierda() });

 





  });

  
