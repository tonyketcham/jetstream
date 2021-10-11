# Jetstream 🍃

This is an Adobe XD plugin for Tailwind 2, keen on importing Tailwind config to your XD workspace.

At the moment, it only supports pulling the Tailwind colorspace and either generating a set of swatches or generating color assets for your project - albeit very useful in its current state.

The goal for this project would be the ability to link your project's Tailwind config file to pull in your declared color assets/palette.

Perhaps a future application of the plugin could enable an isomorphic system for better development handoff.

## 🛠️ Functions
### Generate color assets
![image](https://user-images.githubusercontent.com/43280336/111012036-22921f00-8361-11eb-9cbc-47f59a063bae.png)
### Generate swatches
![image](https://user-images.githubusercontent.com/43280336/111012005-02626000-8361-11eb-8836-7d0a69b09b88.png)

## 📥 Installation & Use (& Contributing)
Since this is not yet published on the XD plugin marketplace, you must set this plugin up in the development state.
1. In XD, go to `File > Plugins > Development > Show Develop Folder`
2. Open your terminal in the given directory XD opens.
3. `git clone https://github.com/tonyketcham/jetstream.git`
4. `cd jetstream`
5. `yarn`
6. Then hit `SHIFT + CTRL + R` in XD to refresh your plugins list. Jetstream should appear.
7. Now use it! You can create color assets or a set of swatches.


![image](https://user-images.githubusercontent.com/43280336/111011959-ce873a80-8360-11eb-864b-bcf0240d6fb8.png)


## Adobe XD Plugins
Based on the starter project to be available to developers who first create an XD plugin instance in [Adobe I/O Console](https://console.adobe.io/plugins).

## License

Apache 2.0
