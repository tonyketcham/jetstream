const fs = require('uxp').storage.localFileSystem;

/**
 * Opens file system, allows user to select repo to link
 */
async function getRespository() {
  return await fs.getFolder();
}

/**
 * Grabs the Tailwind config from the linked repo if there exists one
 * @param {Folder} folder repository folder
 */
async function getTailwindConfig(folder) {
  const entries = await folder.getEntries();
  let userConfig = entries.filter((entry) =>
    entry.name == 'tailwind.config.js' ? entry : null
  );

  return userConfig.length === 1 ? userConfig[0] : null;
}

/**
 * Mounts the repo's config file to the plugin
 */
async function mountConfig() {
  const directory = await getRespository();
  const config = await getTailwindConfig(directory);
  console.log(config.name);
}

module.exports = { mountConfig };
