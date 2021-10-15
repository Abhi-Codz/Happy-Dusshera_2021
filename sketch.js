// Naming variables
var ravana, ravanaImage;
var bow, bowImage;
var song;
var fireWorks;
var greetingspot;
var greetfirework, greetfireworkImage;

function preload()
{
    ravanaImage = loadImage('ravana.png');
    bowImage = loadAnimation('Dusshera_bow0.png', 'Dusshera_bow1.png', 'Dusshera_bow2.png', 'Dusshera_bow3.png', 'Dusshera_bow4.png', 'Dusshera_bow5.png', 'Dusshera_bow6.png', 'Dusshera_bow7.png', 'Dusshera_bow8.png');
    greetfireworkImage = loadAnimation('fireworks_dusshera.png', 'fireworks_dusshera0.PNG', 'fireworks_dusshera1.PNG', 'fireworks_dusshera2.PNG', 'fireworks_dusshera3.PNG');
    // song = loadSound('y2mate.com - Happy New Year 2020  Happy New Year Songs 2020  Top Happy New Year Songs Playlist 2020-[AudioTrimmer.com].mp3');
    fireWorks = createImg('fireworks_gif.gif');
}


function setup()
{
    let canvas = createCanvas(560, 600);

    // song.loop();
    
    // Creating sprites
    greetingspot = createSprite(280, 300, 500, 500);
    greetingspot.shapeColor = 'gold';

    greetfirework = createSprite(280, 200);
    greetfirework.addAnimation("fire", greetfireworkImage);
    greetfirework.scale = 0.3;

    let greetfirework1 = createSprite(195, 400);
    greetfirework1.addAnimation("fire", greetfireworkImage);
    greetfirework1.scale = 0.3;

    bow = createSprite(195, 325);
    bow.addAnimation("arrow", bowImage);
    bow.scale = 0.3;

    ravana = createSprite(280, 200);
    ravana.addImage(ravanaImage);
    ravana.scale = 0.3;




    // NewYear = createSprite(280, 295);
    // NewYear.addAnimation("animation", NewYearImage);
}


function draw()
{
    background('#0B0024');
    fireWorks.position(176, 446);
    fireWorks.size(0, 0);

    fill('turquoise');
    textSize(20);
    text('BY- Abhinav Mishra || Abhi_Codz', 200, 50);

    fill('red');
    textSize(33);
    text('HAPPY DUSSHERA TO ALL!', 60, 580);

    drawSprites();
}