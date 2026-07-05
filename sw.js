/* Qujat Service Worker — веб-push хабарламалары */
self.addEventListener('push', function(e){
  var d = {title: 'Qujat', body: ''};
  try { d = e.data.json(); } catch (err) { if (e.data) d.body = e.data.text(); }
  e.waitUntil(self.registration.showNotification(d.title || 'Qujat', {
    body: d.body || '',
    icon: '/qujat-logo.png',
    badge: '/qujat-logo.png',
    tag: 'qujat-tax',
    renotify: true
  }));
});

self.addEventListener('notificationclick', function(e){
  e.notification.close();
  e.waitUntil(clients.openWindow('https://app.qujat.digital/app.html'));
});
