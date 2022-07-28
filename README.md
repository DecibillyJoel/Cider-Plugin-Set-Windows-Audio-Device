# Cider-Plugin-Set-Windows-Audio-Device
Sets the audio device of Cider on launch

# Dependencies
This plugin requires [SoundVolumeView](https://www.nirsoft.net/utils/sound_volume_view.html) to be downloaded and accessible via your system PATH. 

# Setup
 1) Clone or download the files into a folder in your Cider plugins path (%APPDATA%\Cider\plugins\)
 2) Right click fixAudioRender.bat and select edit
 3) Replace "VB-Audio VoiceMeeter AUX VAIO\Device\VoiceMeeter Aux Input\Render" with the "command-line friendly ID" of your playback device (this can be found by opening the SoundVolumeView GUI, double-clicking the desired playback device, and copying the ID from the pop-up window)
 4) Quit Cider and relaunch it. Congratulations! Cider will now use the desired playback device anytime it launches.
 5) The .bat can be manually launched from any location at any time if needed instead of relaunching Cider.
