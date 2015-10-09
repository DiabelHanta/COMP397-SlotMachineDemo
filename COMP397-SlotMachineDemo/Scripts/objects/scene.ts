module objects
{
    export class Scene extends createjs.Container
    {
        // Constructor
        constructor()
        {
            super(); //super class
        }

        //Public Methods
        public start(): void
        {

        }

        public update(): void
        {
            
        }
        //NOTE: DON"T DO THIS!
        //Adding general objects into game
        //public add(createjs.DisplayObject): void
        //{
        //    this.addChild();
        //}
    }
}