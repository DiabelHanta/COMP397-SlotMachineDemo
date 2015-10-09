module states
{
    // Menu class (NOTE: THIS BECAME A "CONTAINER" CLASS!)
    export class Menu extends objects.Scene
    {
        //Private Instance Variables
        _helloLabel: objects.Label; //NOTE: THIS IS "COMPOSITION"
        _startButton: objects.Button;

        //constructor
        constructor()
        {
            super();
        }

        //Public Method
        public start(): void
        {
            // hello label
            this._helloLabel = new objects.Label("Game Start", "60px Consolas", "#000000", 320, 240);
            this.addChild(this._helloLabel); // add label to the stage

            // start button
            this._startButton = new objects.Button("StartButton", 320, 340);
            this._startButton.on("click", this._clickStartButton, this);


            this.addChild(this._startButton);

            stage.addChild(this); //NOTE: Adds the entire scene onto the stage
        }

        public update(): void
        {
        }

        //Private Methods (Call only in this function)
        // Callback function / Event Handler for Start Button Click
        private _clickStartButton(event: createjs.MouseEvent): void
        {
            changeState(config.PLAY_STATE);
        }
    }
}