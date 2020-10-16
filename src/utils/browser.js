/*global window*/
const ua = window.navigator.userAgent;

export const isMobile = /(iPhone|iPod|Android|ios|mobile)/i.test(ua);
export const isAndroid = /Android|Linux/.test(ua);
export const isIos = /\(i[^;]+;( U;)? CPU.+Mac OS X/gi.test(ua);
export const isWechat = /MicroMessenger/i.test(ua);
export const isQQ = /qq/i.test(ua); // 手机QQ
export const isQQBrowser = /mqqbrowseer/i.test(ua);

export const isTencentBrowser = isWechat || isQQ || isQQBrowser;
