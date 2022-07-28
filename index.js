"use strict";

const { spawn } = require("child_process");
const path = require("path");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }
const path__default = /*#__PURE__*/_interopDefaultLegacy(path);

console.debug(path__default);

class fixAudioRender {
    /**
     * Base Plugin Details (Eventually implemented into a GUI in settings)
     */
     
    name = 'fixAudioRender';
    description = 'Sets Cider rendering device to the correct audio device';
    version = '1.0.0';
    author = 'DecibillyJoel';
    
    /**
     * Private variables for interaction in plugins
     */
     
    dutyCalls = true;
    env;
    
    /**
    * Runs on plugin load (Currently run on application start)
    */

    constructor(env) {
        this.env = env;
        this.debug('Loading Complete');
    }

    /**
     * Fixes Audio Render
     */
    callShell() {
        if (this.dutyCalls) {
            spawn("cmd.exe", ["/C", path__default["default"].join(this.env.dir, "fixAudioRender.bat")]);
            this.dutyCalls = false;
        }
    }
    
    /**
    * Runs on app ready
    */

    async onReady(win) {
        this.debug('Ready'); 
        //ipcMain.handle("plugin.frontendComm", (event: IpcMainEvent, message: any) => {
        //console.debug(`Frontend says: ${message}`)
        //const window = this.env.utils.getWindow()
        //window.webContents.send("plugin.backendComm", 'Hello from the backend!')
        // })
    }
    
    /**
    * Runs on renderer ready
    * @param win The current browser window
    */

    async onRendererReady(win) {}
    
    
    /**
    * Runs on app stop
    */

    onBeforeQuit() {
        this.debug('Stopped');
    }
    
    /**
     * Runs on playback State Change
     * @param attributes Music Attributes (attributes.status = current state)
     */
    
    onPlaybackStateDidChange(attributes) {
        this.callShell();
    };
    
    /**
     * Runs on song change
     * @param attributes Music Attributes
     */
     
    onNowPlayingItemDidChange(attributes) {
        this.callShell();
    };
    
    debug(text) {
        console.log(`[Plugin][${this.name}]`, text);
    }
}

module.exports = fixAudioRender;