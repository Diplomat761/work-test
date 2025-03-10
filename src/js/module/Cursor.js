export default class Cursor {
    constructor(cursorElement) {
        this.cursor = cursorElement;
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => this.moveCursor(e));
        document.addEventListener('pointerdown', () => this.handlePointerDown());
        document.addEventListener('pointermove', (e) => this.handlePointerMove(e));
        document.addEventListener('pointerup', () => this.handlePointerUp());


        this.addLinkHoverEffects();
    }

    moveCursor(e) {
        const x = e.clientX;
        const y = e.clientY;
        this.cursor.style.left = `${x}px`;
        this.cursor.style.top = `${y}px`;
    }

    handlePointerDown() {
        this.isDragging = true;
        this.cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
    }

    handlePointerMove(e) {
        if (this.isDragging) {
            const x = e.clientX;
            const y = e.clientY;
            this.cursor.style.left = `${x}px`;
            this.cursor.style.top = `${y}px`;
        }
    }

    handlePointerUp() {
        this.isDragging = false;
        this.cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    }

    addLinkHoverEffects() {
        const links = document.querySelectorAll('a');

        links.forEach(link => {
            link.addEventListener('mouseover', () => {
                this.cursor.style.backgroundColor = "red";
                this.cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });

            link.addEventListener('mouseout', () => {
                
                this.cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                this.cursor.style.backgroundColor = "#0B68F0";
            });
        });
    }
}