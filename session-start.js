const {BrowserWindow, app} = require('electron');
const path = require('path');
const url = require('url');
// For Google Pixel 2(XL)

// require bare extensions.
/* import http from "node:http";
import { fileURLToPath } from 'node:url';
import serveStatic from 'serve-static';
const { shell } = require('electron')

const httpServer = http.createServer();
const serve = serveStatic(
  fileURLToPath(new URL('./static/', import.meta.url)), {
    fallthrough: false,
  }
);

const bareServer = createBareServer('/bare/');

httpServer.on('request', (req, res) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    serve(req, res, (err) => {
      res.writeHead(err?.statusCode || 500, {
        'Content-Type': 'text/plain',
      });
      res.end(err?.stack);
    });
  }
});

httpServer.on('upgrade', (req, socket, head) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

httpServer.on('listening', () => {
  console.log('HTTP server listening through proxy');
  console.log('Environment started!');
});

httpServer.listen({
  port: process.env.PORT || 6969,
});
*/ 

//start electron via windows mode (get it?)
function createWindowManagerEnvironment() {
  win = new BrowserWindow({
    autoHideMenuBar: true,
    fullscreen: false,
    kiosk: true,
    maxWidth: 411, //maximum width and height sizing
    maxHeight: 731,
    title: "Park 9.50.2_G510-20241102 (Emulator)",
    frame: false,
    x: 0,
    y: 0,
    webPreferences: { 
      experimentalFeatures: false,
      nodeIntegration: true,
      sandbox: true, // Enable this for the emulator
    }
  })

  win.setPosition(0, 0);
  win.center();
  win.setResizable(false)
  win.maximize()

  win.loadURL(url.format({
    pathname: path.join(__dirname, './static/index.html'),
    protocol: 'file:',
    slashes: true
  }));
  
  console.log("Park Runtime For Google Pixel 2(XL) has started: please wait...");


}
app.on('ready', createWindowManagerEnvironment);