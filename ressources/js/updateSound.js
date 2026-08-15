var sounds_select = document.getElementById('sounds_select');

//UPDATE <OPTION> WITH VALUE IN STORAGE
chrome.storage.sync.get('sounds', function (data) {
  if (data.sounds) {
    sounds_select.value = data.sounds;
  }
});

//SWAP THE ENABLED RULESET, SAVE, THEN TELL THE BACKGROUND TO FLUSH LICHESS'S SOUND CACHE
sounds_select.onchange = async function () {
  const value = this.value;
  try {
    const enabled = await chrome.declarativeNetRequest.getEnabledRulesets();
    await chrome.declarativeNetRequest.updateEnabledRulesets({
      disableRulesetIds: enabled.filter((id) => id !== value),
      enableRulesetIds: [value],
    });
    await chrome.storage.sync.set({ sounds: value });

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab && /^https?:\/\/([a-z0-9-]+\.)?lichess1?\.org\//.test(tab.url || '')) {
      chrome.runtime.sendMessage({ sounds_init: value, tab: tab.id }).catch(() => {});
    }
  } catch (error) {
    console.error(error);
  }
};
