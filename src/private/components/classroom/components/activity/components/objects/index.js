const girl = {
  name: 'Mujer',
  sourcePath: require('./girl/girl_OBJ.obj'),
  resources: [
    require('./girl/FACE Base Color apha.png'),
    require('./girl/girl_OBJ.mtl'),
    require('./girl/top color.png'),
    require('./girl/top normal.png'),
    require('./girl/COLORS.jpg'),
    require('./girl/bot color.jpg'),
    require('./girl/BOdy Skin Base Color.png')
  ]
};

const bird = {
  name: 'Pájaro',
  sourcePath: require('./falcon/halcon2.obj'),
  resources: [
    require('./falcon/halcon.mtl')
  ]
};

const dog = {
  name: 'Perro',
  sourcePath: require('./dog/Doguinho.obj'),
  resources: [
    require('./dog/Doguinho.mtl'),
    require('./dog/Doguinho_low_poly_doguinho_uv_Height.png'),
    require('./dog/Doguinho_low_poly_doguinho_uv_Normal.png'),
    require('./dog/Doguinho_low_poly_doguinho_uv_BaseColor.png'),
    require("./dog/Doguinho_low_poly_doguinho_uv_Metallic.png"),
    require("./dog/Doguinho_low_poly_doguinho_uv_Roughness.png")
  ]
}

export {
  girl,
  bird,
  dog
}



