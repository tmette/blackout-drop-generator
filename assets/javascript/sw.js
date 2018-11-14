self.addEventListener('install', function(e) {
    console.log('[Service Worker] Install');
    var cacheName = 'drop-gen-pwa-v1';
    var appShellFiles = [
        '/',
        '../../index.html',
        '/index.js',
        '../css/main.css',
        '../images/icons/icon-72x72.png',
        '../images/icons/icon-96x96.png',
        '../images/icons/icon-128x128.png',
        '../images/icons/icon-144x144.png',
        '../images/icons/icon-152.152.png',
        '../images/icons/icon-192.192.png',
        '../images/icons/icon-384x384.png',
        '../images/icons/icon-512x512.png'
    ];
});