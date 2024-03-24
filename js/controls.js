class Controls {
    constructor(left, right, forward, reverse) {
        this.left = false;
        this.right = false;
        this.forward = false;
        this.reverse = false;

        this.#addKeyboardListeners();
    } 

    #addKeyboardListeners() {                   // private function for this class listens for certain keys
        document.onkeydown = (e) => {           // listens for arrows up down left and right
            switch(e.key) {                     // listens for w a s and d
                case 'ArrowLeft':
                    this.left = true;
                    break;
                case 'ArrowRight':
                    this.right = true;
                    break;
                case 'ArrowUp':
                    this.forward = true;
                    break;
                case 'ArrowDown':
                    this.reverse = true;
                    break;
                case 'a':
                    this.left = true;
                    break;
                case 'd':
                    this.right = true;
                    break;
                case 'w':
                    this.forward = true;
                    break;
                case 's':
                    this.reverse = true;
                    break;
            }
        } 

        document.onkeyup = (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    this.left = false;
                    break;
                case 'ArrowRight':
                    this.right = false;
                    break;
                case 'ArrowUp':
                    this.forward = false;
                    break;
                case 'ArrowDown':
                    this.reverse = false;
                    break;
                case 'a':
                    this.left = false;
                    break;
                case 'd':
                    this.right = false;
                    break;
                case 'w':
                    this.forward = false;
                    break;
                case 's':
                    this.reverse = false;
                    break; 
            }
        }
    } 
}