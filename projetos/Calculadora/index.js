function calcularArea() {
    const b = parseFloat(document.getElementById('b').value);
    const a = parseFloat(document.getElementById('a').value);
    const h = parseFloat(document.getElementById('h').value);

    const areaBase = (a * b + b * h + b * h + b * h);

    console.log("Área da superfície do prisma:", areaBase.toFixed(2), "m²");

    document.getElementById('resultado').value = areaBase.toFixed(2) + " metro quadrado";
  }

 function calcularVolume() {
    const base = parseFloat(document.getElementById('base_prisma').value);
    const altura = parseFloat(document.getElementById('alt2').value);
    const alturaPrisma = parseFloat(document.getElementById('altura_prisma').value);

    const areaBase = (base * altura) / 2;

    const volume = areaBase * alturaPrisma;

    document.getElementById('resultado_prisma').value = volume.toFixed(2) + " unidades cúbicas";
   document.getElementById('resultado_baseprisma').value = areaBase.toFixed(2) + " unidades cúbicas";
  }