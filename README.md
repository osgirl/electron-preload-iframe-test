
## To Use

```bash
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

## HTML From notification issue
The chalange is to get the HTML From notification in headless mode
when you setting show to be true in main.js, then pressing the Submit you get a notification, when set to show = false, we did not find a way to get the notificaiton event/text

  mainWindow = new BrowserWindow({width: 800, height: 600, show: true})

The issue is spellchecking only runs in the main frame, and not in the iframe.
You can easily see this by typing in both textareas.