window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d'); //or 3d

    // Resizing


    canvas.height = 500;
    canvas.width = 500;

    //variables
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e); //needed to draw dots
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath(); //to reset the path to prevent lines from sticking together
    }

    function draw(e) {
        if(!painting) {
            return;
        }

        // ctx.strokeStyle = "red";
        ctx.lineWidth = 10;
        ctx.lineCap = 'round'; //makes line round

        ctx.lineTo(e.clientX, e.clientY);
        
        ctx.stroke();

        //To prevent pixelating, makes the path smoother
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);

    }



    //EventListeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener("mousemove", draw);



    //position x, y, height, width
    // ctx.fillRect(100, 50, 200, 500)

    /*
    ctx.strokeStyle = "red"; //color must be defined on line 12 before code on line 13
    ctx.lineWidth = 5;
    ctx.strokeRect(100, 50, 200, 500)

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.strokeRect(200, 200, 200, 500);

    */

    /*
    ctx.beginPath(); 
    ctx.moveTo(100, 100); //starting position
    ctx.lineTo(200, 100);
    ctx.lineTo(200, 150);
    ctx.closePath(); //connects the remaining path
    ctx.stroke();
    */

});

//To keep it size
//NOTE: This get rid of the drawing when window is resize!
// function displayWindowSize() {
//     canvas.height = 500;
//     canvas.width = 500;
// }
// window.addEventListener("resize", displayWindowSize, false);
//function for displayWindowSize(): https://www.tutorialrepublic.com/faq/how-to-capture-browser-window-resize-event-in-javascript.php