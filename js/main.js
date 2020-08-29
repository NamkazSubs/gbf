function change(name) {

    if(name == 'gran')
    {
        document.getElementById('character-change').src  ='image/gran.png'
    }
    if(name == 'djeta')
    {
        document.getElementById('character-change').src  ='image/djeta.png'
    }
    if(name == 'lyria')
    {
        document.getElementById('character-change').src  ='image/lrya.png'
    }
    else{
        document.getElementById('character-change').src  ='image/chara/'+name+'.png'
    }

}