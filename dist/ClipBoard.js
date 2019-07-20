"use strict";

class SystemClipboard {
  constructor() {
    this.clipboardPermissions = "denied";
    this.browserNavigator = window.navigator;
    this.checkClipboardPermissions();
  }

  checkClipboardPermissions() {
    // @ts-ignore
    let onfulfilled = permissionStatus => {
      // Will be 'granted', 'denied' or 'prompt':
      console.log(permissionStatus.state);
      this.clipboardPermissions = permissionStatus.state;
      // Listen for changes to the permission state
      permissionStatus.onchange = () => {
        console.log(permissionStatus.state);
        this.clipboardPermissions = permissionStatus.state;
      };
    };
    this.browserNavigator.permissions.query({
      name: "clipboard-read"
    }).then(onfulfilled);
  }
}

//# sourceMappingURL=ClipBoard.js.map
