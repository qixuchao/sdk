import { each } from '../../../utils/index';

let doClick;
let onClose;
/**
 * 由于广点通不支持重新加载广告配置，需要在第一次执行时将配置全部载入。
 * 后面可以通过window.TencentGDT.NATIVE.loadAd(data.consumerSlotId);
 * 再次加载广告。同时增加一个广告位容器和广告位对应的功能
 */
class GdtManager {
  constructor(config) {
    window.TencentGDT = window.TencentGDT || [];
    this.config = config;
    this.slotMap = {};
    this.init();
  }
  init() {
    if (window.M$P_M_C && window.M$P_M_C.slotBiddings) {
      each(window.M$P_M_C.slotBiddings, item => {
        each(item.slotBidding, consumer => {
          if (consumer.consumer.consumerType === 'gdt') {
            this.slotMap[consumer.consumer.consumerSlotId] = {
              consumerSlotId: consumer.consumer.consumerSlotId,
              appid: this.config.gdtAppId,
              status: 0,
              fns: [], // 存放callback 存在顺序不一致情况，但不影响，符合执行要求，先插入先执行
              next: [] // 存在并发请求，用于频控处理，每次取3个，处理广告返回长度的next，然后再执行一次next方法 此逻辑循环
            };
          }
        });
      });
      each(this.slotMap, this.initSlot);
    }
  }
  proxyComplete = consumerSlotId => {
    return res => {
      let slot = this.slotMap[consumerSlotId];
      let fn;
      // 获取广告位对应的广告素材
      let materialData = [];
      try {
        materialData = window.GDT.getPosData(consumerSlotId).data;
      } catch (e) {}

      if (slot && slot.status === 1 && slot.fns) {
        if (Array.isArray(res)) {
          res.forEach((ad, index) => {
            let currentSlot = slot.fns.shift();
            if (currentSlot) {
              window.TencentGDT.NATIVE.renderAd(ad, currentSlot.container);
              currentSlot.complete(
                true,
                materialData[index] && materialData[index]
              );
              fn = slot.next.shift();
            } else {
              return false;
            }
          });
        } else {
          let currentSlot = slot.fns.shift();
          currentSlot.complete(false);
        }
      }
      if (!fn) {
        fn = slot.next.shift();
      }

      fn && fn();
    };
  };

  initSlot = slot => {
    // 广告初始化
    window.TencentGDT.push({
      placement_id: slot.consumerSlotId, // {String} - 广告位id - 必填
      app_id: slot.appid, // {String} - appid - 必填
      type: 'native', // 原生模板：native、激励视频：rewardVideo
      // banner：banner广告 interstitial：插屏广告 。 banner、插屏广告必须填写display_type，具体值见各个广告文档说明。
      // display_type: 'banner',
      // containerid: this.id,
      count: 3, // {Number} - 拉取广告的数量，默认是3，最高支持10 - 选填
      onComplete: this.proxyComplete(slot.consumerSlotId)
    });
  };
  bindSlot(consumerSlotId, container, complete) {
    const slot = this.slotMap[consumerSlotId];
    if (slot) {
      slot.status = 1;

      slot.fns.push({
        container,
        complete
      });
      if (window.jsInited && window.GDT && window.GDT.load) {
        this.loadAd(consumerSlotId);
      } else {
        slot.next.push(() => {
          this.loadAd(consumerSlotId);
        });
      }
    } else {
      console.error(`广点通消耗方id不存在${consumerSlotId}`);
    }
  }
  bindEvent(Union) {
    if (doClick) {
      return;
    }
    doClick = TencentGDT.TN.doClick;
    onClose = TencentGDT.TN.adClose;
    const getUnionInstance = traceid => {
      var container = document.querySelector('div[id*="' + traceid + '"]');

      return Union.unionInstances[container.parentNode.id];
    };

    TencentGDT.TN.doClick = function (event, traceid) {
      const union = getUnionInstance(traceid);
      if (union) {
        union.onClick();
        doClick.apply(this, arguments);
      }
    };

    TencentGDT.TN.adClose = function (event, traceid) {
      const union = getUnionInstance(event.traceid);
      if (union) {
        union.onClose();
        onClose.apply(this, arguments);
      }
    };
  }
  loadAd(consumerSlotId) {
    window.TencentGDT.NATIVE && window.TencentGDT.NATIVE.loadAd(consumerSlotId);
  }
}

let gdtManager;
export default config => {
  if (!gdtManager) {
    gdtManager = new GdtManager(config);
  }
  return gdtManager;
};
