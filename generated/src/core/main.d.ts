import * as p5 from '../../index'

declare module '../../index' {
    interface p5InstanceExtensions {
    /**
     *   Called directly before setup(), the preload() 
     *   function is used to handle asynchronous loading of 
     *   external files in a blocking way. If a preload 
     *   function is defined, setup() will wait until any 
     *   load calls within have finished. Nothing besides 
     *   load calls (loadImage, loadJSON, loadFont, 
     *   loadStrings, etc.) should be inside the preload 
     *   function. If asynchronous loading is preferred, 
     *   the load methods can instead be called in setup() 
     *   or anywhere else with the use of a callback 
     *   parameter.  By default the text "loading..." will 
     *   be displayed. To make your own loading page, 
     *   include an HTML element with id "p5_loading" in 
     *   your page. More information here.
     *
     */
    preload(): void;

    /**
     *   The setup() function is called once when the 
     *   program starts. It's used to define initial 
     *   environment properties such as screen size and 
     *   background color and to load media such as images 
     *   and fonts as the program starts. There can only be 
     *   one setup() function for each program and it 
     *   shouldn't be called again after its initial 
     *   execution.  Note: Variables declared within 
     *   setup() are not accessible within other functions, 
     *   including draw().
     *
     */
    setup(): void;

    /**
     *   Called directly after setup(), the draw() function 
     *   continuously executes the lines of code contained 
     *   inside its block until the program is stopped or 
     *   noLoop() is called. Note if noLoop() is called in 
     *   setup(), draw() will still be executed once before 
     *   stopping. draw() is called automatically and 
     *   should never be called explicitly.  It should 
     *   always be controlled with noLoop(), redraw() and 
     *   loop(). After noLoop() stops the code in draw() 
     *   from executing, redraw() causes the code inside 
     *   draw() to execute once, and loop() will cause the 
     *   code inside draw() to resume executing 
     *   continuously. 
     * 
     *  
     *   The number of times draw() executes in each second 
     *   may be controlled with the frameRate() function. 
     * 
     *  
     *   There can only be one draw() function for each 
     *   sketch, and draw() must exist if you want the code 
     *   to run continuously, or to process events such as 
     *   mousePressed(). Sometimes, you might have an empty 
     *   call to draw() in your program, as shown in the 
     *   above example. 
     * 
     *  
     *   It is important to note that the drawing 
     *   coordinate system will be reset at the beginning 
     *   of each draw() call. If any transformations are 
     *   performed within draw() (ex: scale, rotate, 
     *   translate), their effects will be undone at the 
     *   beginning of draw(), so transformations will not 
     *   accumulate over time. On the other hand, styling 
     *   applied (ex: fill, stroke, etc) will remain in 
     *   effect.
     *
     */
    draw(): void;

    /**
     *   Removes the entire p5 sketch. This will remove the 
     *   canvas and any elements created by p5.js. It will 
     *   also stop the draw loop and unbind any properties 
     *   or methods from the window global scope. It will 
     *   leave a variable p5 in case you wanted to create a 
     *   new p5 sketch. If you like, you can set p5 = null 
     *   to erase it. While all functions and variables and 
     *   objects created by the p5 library will be removed, 
     *   any other global variables created by your code 
     *   will remain.
     *
     */
    remove(): void;
  }
}
