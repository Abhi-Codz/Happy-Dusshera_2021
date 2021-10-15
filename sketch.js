// Naming variables
var ravana, ravanaImage;
var bow, bowImage;
var song;
var fireWorks;
var greetingspot;
var greetfirework, greetfireworkImage;

function preload()
{
    ravanaImage = loadImage('Images/ravana.png');
    bowImage = loadAnimation('Images/Dusshera_bow0.png', 'Images/Dusshera_bow1.png', 'Images/Dusshera_bow2.png', 'Images/Dusshera_bow3.png', 'Images/Dusshera_bow4.png', 'Images/Dusshera_bow5.png', 'Images/Dusshera_bow6.png', 'Images/Dusshera_bow7.png', 'Images/Dusshera_bow8.png');
    greetfireworkImage = loadAnimation('Images/fireworks_dusshera0.PNG', 'Images/fireworks_dusshera1.PNG', 'Images/fireworks_dusshera2.PNG', 'Images/fireworks_dusshera3.PNG');
    // song = loadSound('y2mate.com - Happy New Year 2020  Happy New Year Songs 2020  Top Happy New Year Songs Playlist 2020-[AudioTrimmer.com].mp3');
    fireWorks = createImg('Images/fireworks_gif.gif');
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

    fill('aquamarine');
    textSize(20);
    text('BY- Abhinav Mishra || Abhi_Codz', 200, 45);

    fill('red');
    textSize(33);
    text('HAPPY DUSSHERA TO ALL!', 60, 580);


    drawSprites();
}