function isMobileDevice() {
  if(typeof navigator === "undefined") return;
  
  const mobileKeywords = [
    'Mobi', 'Android', 'iPhone', 'iPad', 'BlackBerry',
    'Windows Phone', 'webOS', 'Mobile Safari', 'Opera Mini'
  ];

  return mobileKeywords.some(keyword => navigator.userAgent.includes(keyword));
}

export {
  isMobileDevice
}