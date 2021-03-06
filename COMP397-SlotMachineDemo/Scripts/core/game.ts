﻿/// <reference path="../config/config.ts" />

/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />

/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/scene.ts" />

/// <reference path="../states/over.ts" />
/// <reference path="../states/game.ts" />
/// <reference path="../states/menu.ts" />


// GLOBAL GAME FRAMEWORK VARIABLES
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var state: number;
var currentState: objects.Scene; // alias for our current state

// Game Objects
var menu: states.Menu;
var game: states.Game;
var over: states.Over;

// Manifest of all our assets (NOTE: manifest is an array)
var manifest =
[
        { id: "BackButton", src: "../../assets/images/BackButton.png" },
        { id: "NextButton", src: "../../assets/images/NextButton.png" },
        { id: "StartButton", src: "../../assets/images/StartButton.png" }
]

//Preloading following objects/files
function preload(): void
{
    //Loading assets
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);

    assets.loadManifest
    ([
        {
            id: "myImage", src: "path/to/myImage.jpg"
        }
    ]);
}

function init():void {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats(); // sets up our stats counting

    state = config.MENU_STATE;
    changeState(state);
}

// Main Game Loop
function gameLoop(event: createjs.Event): void
{
    stats.begin(); // start counting

    
    currentState.update(); // Calling states' update method
    stage.update(); // redraw/refresh stage every frame

    stats.end(); // stop counting
}

// Setup Game Stats
function setupStats(): void
{
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// state machine prep
function changeState(state): void
{
    // Launch various scenes

    switch (state)
    {
        case config.MENU_STATE:
            // show the menu scene
            stage.removeAllChildren(); 
            menu = new states.Menu();
            currentState = menu;
            break;
        case config.PLAY_STATE:
            // show the play scene
            stage.removeAllChildren(); 
            game = new states.Game();
            currentState = game;
            break;
        case config.OVER_STATE:
            // show the game over scene
            stage.removeAllChildren(); 
            over = new states.Over();
            currentState = over;
            break;
    }
    //State Function
    currentState.start();
    console.log(currentState.numChildren); //NOTE: Number of children in current state
    //console.log(stage.numChildren); //NOTE: See how many children are shown in console
}
 