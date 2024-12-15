import { app, BrowserWindow, Menu, ipcMain, globalShortcut } from "electron";
import path from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const isDev = process.argv.includes("--dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: true,
    },
    resizable: false,
    frame: false,
    icon: __dirname + '/assets/icon.png'
  });

  if (isDev) {
    mainWindow.loadURL("http://localhost:5173"); // O icone n ficou bom
  } else {
    mainWindow.loadFile(path.join(__dirname, "dist/index.html"));
  }

  Menu.setApplicationMenu(null);

  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", () => {
  createWindow();

  globalShortcut.register("Escape", () => { // Parou de funcionar
    if (mainWindow) {
      mainWindow.hide(); // Está fechando ao inves de minimizar
    }
  });
});

app.on("will-quit", () => {
  globalShortcut.unregisterAll();
});

app.on("window-all-closed", () => {
  app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on("execute", (event, data) => {
  const dataFormatted = JSON.parse(data);
  exec(dataFormatted.command, (error, stdout) => {
    if (error) {
      event.reply("result", error.message);
      return;
    }
    const result = {
      ...dataFormatted,
      output: stdout,
    };
    event.reply("result", JSON.stringify(result));
  });
});
