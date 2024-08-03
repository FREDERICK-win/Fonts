var alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    fonts = ['BlackOpsOne','BungeeInline','Dokdo','Eater','FasterOne','Frijole','GiveYouGlory','KumarOne','LibreBarcode','LibreBarcode','Monoton','Montez','Pacifico','Pattaya','Schoolbell','Shojumaru','Shrikhand','VT323','VastShadow','EuphoriaScript','FingerPaint','Wallpoet','Creepster','Nosifer','BungeeShade','Plaster','FascinateInline','Monofett','Ewert','Kenia'],
    scroll = {x:0,y:0}, // x/y of the background img
    destination = { x:getRandomDest(250), y:getRandomDest(250) },
    active = { x:true, y:true },
    count = 30, // amount of random character iterations
    time = 50; // ms between each iteration

setTimeout(setRandomText, 1000);
setInterval(incrementBackground, 25);
setInterval(setRandomText, 3000 + (count*time));

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function setRandomText() {
  for (i = 0;i < count;i++) {
    setTimeout(function() {
      $("h1").html('fonts');
      var randText = alph[getRandomInt(alph.length-1)]+
          alph[getRandomInt(alph.length-1)]+
          alph[getRandomInt(alph.length-1)];
      $("h1").html(randText.toUpperCase());
    }, i * time);
  }
  
  setTimeout(function(){ // need to wait for the random txt to stop because JS timing is weird
    $("h1").html('fonts');
    $("h1").attr('class', fonts[getRandomInt(fonts.length-1)]);
  }, count*time);
}

function incrementBackground() {
  if (scroll.x == destination.x) {
    destination.x = getRandomDest(300);
    active.y = !Boolean(Math.round(Math.random()));
  } else {
    if (active.x) {
      if (scroll.x > destination.x) scroll.x--;
      else scroll.x++; 
    }
  }
  
  if (scroll.y == destination.y) {
    destination.y = getRandomDest(300);
    active.x = !Boolean(Math.round(Math.random()));
  } else {
    if(active.y) {
      if (scroll.y > destination.y) scroll.y--;
      else scroll.y++;
    }
  }
  
  if (!active.x && !active.y) {
    active.x = !Boolean(Math.round(Math.random()));
    active.y = !Boolean(Math.round(Math.random()));
  }
  
  $("h1").css('backgroundPosition', scroll.x + 'px ' + scroll.y + 'px');
}

function getRandomDest(max) {
  return Math.floor(Math.random() * (max - max * -1)) + max * -1;
}