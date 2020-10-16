/*global window*/
const ua = window.navigator.userAgent;

export default {
  isMobile: /(iPhone|iPod|Android|ios|mobile)/i.test(ua),
  isAndroid: /Android|Linux/.test(ua),
  isIos: /\(i[^;]+;( U;)? CPU.+Mac OS X/gi.test(ua),
  isWechat: /MicroMessenger/i.test(ua),
  isQQ: /qq/i.test(ua), // 手机QQ
  isQQBrowser: /mqqbrowseer/i.test(ua)
};
