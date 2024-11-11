var sounds_select = document.getElementById('sounds_select');

chrome.storage.sync.get('sounds', function (data) {
  sounds_select.value = data['sounds'];
});

sounds_select.onchange = async function (element) {
  let value = this.value;
  try {
    await chrome.declarativeNetRequest.getEnabledRulesets((rulesets) => {
      chrome.declarativeNetRequest.updateEnabledRulesets({
        disableRulesetIds: rulesets,
        enableRulesetIds: [value],
      });
    });
    await chrome.storage.sync.set({ sounds: value }, function () {});

    const tabs = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    const currentTab = tabs[0];

    chrome.runtime.sendMessage({
      sounds_init: value,
      tab: currentTab.id,
    });
  } catch (error) {
    console.log(error);
  }
};
