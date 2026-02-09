document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("enableToggle");
  const statusText = document.getElementById("statusText");
  const convertBtn = document.getElementById("convertBtn");
  const revertBtn = document.getElementById("revertBtn");
  const intensity = document.getElementById("intensity");

  // Load saved state
  chrome.storage.local.get(["enabled", "intensity"], (data) => {
    toggle.checked = data.enabled || false;
    intensity.value = data.intensity || 2;
    updateStatus(toggle.checked);
  });

  toggle.addEventListener("change", () => {
    const enabled = toggle.checked;
    chrome.storage.local.set({ enabled });
    updateStatus(enabled);
  });

  intensity.addEventListener("input", () => {
    chrome.storage.local.set({ intensity: parseInt(intensity.value) });
  });

  convertBtn.addEventListener("click", () => {
    const level = parseInt(intensity.value);
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "convert",
          intensity: level,
        });
      }
    });
  });

  revertBtn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "revert" });
      }
    });
  });

  function updateStatus(enabled) {
    statusText.textContent = enabled ? "ON" : "OFF";
    statusText.classList.toggle("active", enabled);
  }
});
