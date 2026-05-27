/**
 * Engine.js: ක්‍රීඩාවේ මූලික ක්‍රියාවලීන් පාලනය කරයි.
 */

class VoxelEngine {
    constructor() {
        this.isPaused = false;
        console.log("එන්ජිම සාර්ථකව ආරම්භ විය.");
    }

    /**
     * ක්‍රීඩාව තාවකාලිකව නැවැත්වීම හෝ නැවත ආරම්භ කිරීම.
     */
    togglePause() {
        this.isPaused = !this.isPaused;
        if (this.isPaused) {
            console.log("ක්‍රීඩාව නතර කරන ලදී.");
        } else {
            console.log("ක්‍රීඩාව නැවත ආරම්භ විය.");
        }
        return this.isPaused;
    }
}

export default VoxelEngine;