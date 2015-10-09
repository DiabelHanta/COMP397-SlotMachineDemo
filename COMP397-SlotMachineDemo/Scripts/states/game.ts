module states {
    // Game class (NOTE: THIS BECAME A "CONTAINER" CLASS!)
    export class Game extends objects.Scene {
        //Private Instance Variables
        _levelLabel: objects.Label; //NOTE: THIS IS "COMPOSITION"
        _backButton: objects.Button;
        _nextButton: objects.Button;

        //constructor
        constructor() {
            super();
        }

        //Public Method
        public start(): void {
            // hello label
            this._levelLabel = new objects.Label("Game Play", "60px Consolas", "#000000", 320, 240);
            this.addChild(this._levelLabel); // add label to the stage

            // back button
            this._backButton = new objects.Button("BackButton", 220, 340);
            this._backButton.on("click", this._clickBackButton, this);

            // next button
            this._nextButton = new objects.Button("NextButton", 420, 340);
            this._backButton.on("click", this._clickNextButton, this);

            this.addChild(this._backButton);

            stage.addChild(this); //NOTE: Adds the entire scene onto the stage
        }

        public update(): void
        {
            
        }

        //Private Methods (Call only in this function)
        // Callback function / Event Handler for back Button Click
        private _clickBackButton(event: createjs.MouseEvent): void
        {
            changeState(config.MENU_STATE);
        }

        // Callback function / Event Handler for next Button Click
        private _clickNextButton(event: createjs.MouseEvent): void {
            changeState(config.OVER_STATE);
        }


    }
}