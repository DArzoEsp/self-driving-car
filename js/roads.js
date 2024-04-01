class Road {
    constructor(x, width, laneCount = 3) {
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

        this.left = x-width/2;
        this.right = x+width/2;

        const infinity = 1000000;                   // renders road infinitly top and bottom with this var
        this.top = -infinity;
        this.bottom = infinity;
    }

    getLaneCenter(laneIndex) {
        const laneWidth = this.width/this.laneCount
        return this.left + laneWidth / 2 + laneIndex * laneWidth
    }   

    draw(context) {                                 // draws the road with context which is the canvas or road
        context.lineWidth = 5;
        context.strokeStyle = "white";

        for (let i = 0; i <= this.laneCount; i++) {
            const x = lerp(
                this.left,
                this.right,
                i/this.laneCount
            );
            if(i > 0 && i < this.laneCount) {   // this says as long as it is not index 0 or 3 then make dashes
                context.setLineDash([20, 20])   // 20 pixels wide and 20 pixels in between
            } else {
                context.setLineDash([])         // otherwise let them be solid lines
            }
            context.beginPath();                    
            context.moveTo(x, this.top);
            context.lineTo(x, this.bottom);
            context.stroke();
        }
    }
}