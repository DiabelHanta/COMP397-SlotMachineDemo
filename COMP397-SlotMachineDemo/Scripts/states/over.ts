module states
{
    // Over class (NOTE: THIS BECAME A "CONTAINER" CLASS!)
    export class Over extends objects.Scene
    {
        //Private Instance Variables
        _levelLabel: objects.Label; //NOTE: THIS IS "COMPOSITION"
        _backButton: objects.Button;

        //constructor
        constructor() {
            super();
        }

        //Public Method
        public start(): void {
            // hello label
            this._levelLabel = new objects.Label("Game Over", "60px Consolas", "#000000", 320, 240);
            this.addChild(this._levelLabel); // add label to the stage

            // back button
            this._backButton = new objects.Button("BackButton", 220, 340);
            this._backButton.on("click", this._clickBackButton, this);

            this.addChild(this._backButton);

            stage.addChild(this); //NOTE: Adds the entire scene onto the stage
        }

        public update(): void
        {
            this._levelLabel.rotation += 5;
        }

        //Private Methods (Call only in this function)
        // Callback function / Event Handler for back Button Click
        private _clickBackButton(event: createjs.MouseEvent): void {
            changeState(config.PLAY_STATE);
        }
    }
}