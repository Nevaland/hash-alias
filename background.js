var hashs = {
  "0xe206e3DCa498258f1B7EEc1c640B5AEE7BB88Fd0": {
    name: "TEST-ADDR",
    color: "red",
  },
  "0x46f26fe7447917c2abb8134719fd24dd90a2fc1248248fb1f6a56c85ef830a7d": {
    name: "TXN-HASH",
    color: "green",
  },
  "0xe206e3dca498258f1b7eec1c640b5aee7bb88fd0": {
    name: "OVER-TEST",
    color: "yellow",
  },
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ hashs });
});
