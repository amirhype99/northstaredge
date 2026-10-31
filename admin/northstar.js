/**
 * Northstar Panel - Bilingual & UI Tweaks
 * External Script for edgetunnel
 */
(function () {
  "use strict";

  var STORAGE_LANG = "ns-lang";
  var lang = localStorage.getItem(STORAGE_LANG) === "fa" ? "fa" : "en";

  // 1. Inject Required CSS
  function injectCSS() {
    if (document.getElementById("northstar-css")) return;
    var style = document.createElement("style");
    style.id = "northstar-css";
    style.innerHTML = `
      /* RTL Support & Persian Font */
      html[dir="rtl"] body { font-family: Tahoma, "Vazirmatn", "Segoe UI", system-ui, sans-serif; }
      html[dir="rtl"] .input-wrapper { flex-direction: row-reverse; }
      html[dir="rtl"] .label-with-hint { flex-direction: row-reverse; }
      
      /* Language Button Styles */
      .ns-lang-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        white-space: nowrap;
      }
      
      /* Bottom social link specific styling */
      .ns-lang-btn-bottom {
        background: transparent;
        border: none;
        color: var(--text-color, #333);
        cursor: pointer;
        padding: 0 10px;
        font-size: 14px;
        transition: color 0.3s;
      }
      html.dark-mode .ns-lang-btn-bottom { color: var(--text-color, #fff); }
      .ns-lang-btn-bottom:hover { color: #0d6efd; }
      
      /* Top header specific spacing */
      .header-buttons .ns-lang-btn { margin-right: 8px; margin-left: 8px; }
      html[dir="rtl"] .header-buttons .ns-lang-btn { margin-right: 8px; margin-left: 8px; }
    `;
    document.head.appendChild(style);
  }

  // 2. Translation Dictionary
  var DICT = {
    "edgetunnel": { en: "Northstar", fa: "نورت استار" },
    "加载中...": { en: "Loading...", fa: "در حال بارگذاری..." },
    "设置页面": { en: "Settings", fa: "تنظیمات" },
    "重置配置": { en: "Reset", fa: "بازنشانی" },
    "退出登录": { en: "Logout", fa: "خروج" },
    "我是小白！我想简单点！": { en: "Simple Mode", fa: "حالت ساده" },
    "我是高手！我就要折腾！": { en: "Advanced Mode", fa: "حالت پیشرفته" },
    "关闭": { en: "Close", fa: "بستن" },
    "取消": { en: "Cancel", fa: "لغو" },
    "保存": { en: "Save", fa: "ذخیره" },
    "确定": { en: "Confirm", fa: "تایید" },
    "复制": { en: "Copy", fa: "کپی" },
    "复制节点": { en: "Copy Node", fa: "کپی نود" },
    "复制订阅": { en: "Copy Sub", fa: "کپی اشتراک" },
    "二维码": { en: "QR Code", fa: "کد QR" },
    "验证中...": { en: "Verifying...", fa: "در حال بررسی..." },
    "未知": { en: "Unknown", fa: "نامشخص" },
    "🌍 当前网络信息": { en: "🌍 Current Network", fa: "🌍 اطلاعات شبکه" },
    "国内测试": { en: "CN Test", fa: "تست داخل" },
    "国外测试": { en: "Global Test", fa: "تست خارج" },
    "墙外测试": { en: "Outside Test", fa: "تست خارج از دیوار" },
    "漏网之鱼": { en: "Escapee", fa: "فراری" },
    "加载失败": { en: "Load Failed", fa: "خطا در بارگذاری" },
    "翻墙未开启": { en: "Proxy Off", fa: "پروکسی خاموش" },
    "获取节点链接": { en: "Node Links", fa: "لینک‌های نود" },
    "节点链接格式": { en: "Node Format", fa: "قالب نود" },
    "自适应订阅": { en: "Adaptive Sub", fa: "اشتراک خودکار" },
    "优选订阅生成": { en: "Generate Sub", fa: "تولید اشتراک" },
    "优选订阅模式": { en: "Sub Mode", fa: "حالت اشتراک" },
    "随机优选数量": { en: "Random Count", fa: "تعداد تصادفی" },
    "指定优选端口": { en: "Target Port", fa: "پورت هدف" },
    "详细配置信息": { en: "Detailed Config", fa: "پیکربندی دقیق" },
    "订阅名称": { en: "Sub Name", fa: "نام اشتراک" },
    "节点协议": { en: "Protocol", fa: "پروتکل" },
    "传输协议": { en: "Transport", fa: "ترنسپورت" },
    "指纹伪装": { en: "Fingerprint", fa: "اثر انگشت" },
    "跳过证书验证": { en: "Skip Cert", fa: "ردیابی گواهی" },
    "Cloudflare CDN 访问设置": { en: "CDN Access", fa: "تنظیمات CDN" },
    "反代模式": { en: "Proxy Mode", fa: "حالت پروکسی" },
    "订阅转换配置": { en: "Sub Conversion", fa: "تبدیل اشتراک" },
    "消息通知设置": { en: "Notifications", fa: "اعلان‌ها" },
    "查看操作日志": { en: "Operation Logs", fa: "گزارش عملیات" },
    "全部": { en: "All", fa: "همه" },
    "启用": { en: "Enable", fa: "فعال" },
    "开始优选": { en: "Start", fa: "شروع" }
  };

  var SKIP = { SCRIPT:1, STYLE:1, NOSCRIPT:1, CODE:1, PRE:1, TEXTAREA:1, KBD:1, SVG:1, PATH:1 };

  // 3. Translation Logic
  function translateTextNode(node) {
    var p = node.parentNode;
    if (!p || SKIP[p.nodeName]) return;
    var raw = node.nodeValue;
    if (!raw || !raw.trim()) return;
    var trimmed = raw.trim();

    if (DICT[trimmed] && DICT[trimmed][lang]) {
      node.nodeValue = raw.replace(trimmed, DICT[trimmed][lang]);
      return;
    }
    
    var keys = Object.keys(DICT).sort(function (a, b) { return b.length - a.length; });
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (key.length > 2 && trimmed.indexOf(key) !== -1 && DICT[key][lang]) {
        node.nodeValue = raw.replace(trimmed, trimmed.split(key).join(DICT[key][lang]));
        return;
      }
    }
  }

  function translateTree(root) {
    if (!root) return;
    if (root.nodeType === 3) { translateTextNode(root); return; }
    if (root.nodeType !== 1 || SKIP[root.nodeName]) return;
    
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false), n;
    while ((n = w.nextNode())) translateTextNode(n);

    root.querySelectorAll("[placeholder],[title],[aria-label]").forEach(function (el) {
      ["placeholder", "title", "aria-label"].forEach(function (a) {
        var v = el.getAttribute(a);
        if (v && DICT[v.trim()] && DICT[v.trim()][lang]) {
          el.setAttribute(a, DICT[v.trim()][lang]);
        }
      });
    });
  }

  // 4. Apply Language State
  function applyLang(l) {
    lang = l;
    localStorage.setItem(STORAGE_LANG, l);
    var html = document.documentElement;
    html.lang = l;
    html.dir = l === "fa" ? "rtl" : "ltr";

    var h1 = document.querySelector("body > h1");
    if (h1) {
      h1.textContent = l === "fa" ? "نورت استار پنل" : "Northstar Panel";
    }

    // Update both top and bottom buttons
    var langBtns = document.querySelectorAll('.ns-lang-btn');
    langBtns.forEach(function(btn) {
      btn.innerHTML = l === "fa" ? "🌐 FA" : "🌐 EN";
    });

    translateTree(document.body);
  }

  function toggleLang() {
    applyLang(lang === "fa" ? "en" : "fa");
  }

  // 5. Inject Buttons into UI
  function injectButtons() {
    // Top header button
    var headerBtns = document.querySelector(".header-buttons");
    if (headerBtns && !headerBtns.querySelector(".ns-lang-btn")) {
      var topBtn = document.createElement("button");
      topBtn.type = "button";
      topBtn.className = "btn btn-primary ns-lang-btn";
      topBtn.onclick = toggleLang;
      headerBtns.appendChild(topBtn);
    }

    // Bottom social link (next to theme toggle)
    var socialLinks = document.querySelector(".social-links");
    if (socialLinks && !socialLinks.querySelector(".ns-lang-btn-bottom")) {
      var bottomBtn = document.createElement("button");
      bottomBtn.type = "button";
      bottomBtn.className = "social-link ns-lang-btn-bottom ns-lang-btn";
      bottomBtn.onclick = toggleLang;
      
      var themeToggle = document.getElementById("themeToggle");
      if (themeToggle) {
        socialLinks.insertBefore(bottomBtn, themeToggle);
      } else {
        socialLinks.appendChild(bottomBtn);
      }
    }
  }

  // 6. Watch for dynamic changes
  function startObserver() {
    if (!window.MutationObserver) return;
    new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        m.addedNodes.forEach(function (n) {
          if (n.nodeType === 1) translateTree(n);
          else if (n.nodeType === 3 && n.parentNode) translateTextNode(n);
        });
      });
    }).observe(document.body, { childList: true, subtree: true });
  }

  // 7. Initialize
  function boot() {
    injectCSS();
    injectButtons();
    startObserver();
    applyLang(lang);
    
    // Ensure title stays branded even when dynamic configs load
    setInterval(function() {
      var currentTitle = document.title;
      if (lang === "en" && currentTitle.includes("设置页面")) {
        document.title = "Northstar Panel";
      } else if (lang === "fa" && currentTitle.includes("设置页面")) {
        document.title = "نورت استار پنل";
      }
    }, 2000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
