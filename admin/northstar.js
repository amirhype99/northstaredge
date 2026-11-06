/**
 * Northstar Panel - Bilingual & Custom Galaxy UI
 */
(function () {
  "use strict";

  var STORAGE_LANG = "ns-lang";
  var lang = localStorage.getItem(STORAGE_LANG) === "fa" ? "fa" : "en";

  // --- 1. DICTIONARY ---
   var DICT = {
    // Branding & New UI
    "OMID EDGE PANEL": { en: "OMID EDGE PANEL", fa: "پنل لبه امید" },
    "FREE FOR ALL": { en: "FREE FOR ALL", fa: "رایگان برای همه" },
    "EDGE-GRADE ROUTING": { en: "EDGE-GRADE ROUTING", fa: "مسیریابی در سطح لبه" },
    "ECH READY": { en: "ECH READY", fa: "آماده ECH" },
    "FINALMASK": { en: "FINALMASK", fa: "فینال ماسک" },
    "SMART SUBSCR": { en: "SMART SUBSCR", fa: "اشتراک هوشمند" },
    "LIVE": { en: "LIVE", fa: "زنده" },
    "CONTROL CENTER": { en: "CONTROL CENTER", fa: "مرکز کنترل" },
    "> all systems nominal": { en: "> all systems nominal", fa: "> همه سیستم‌ها عادی است" },

    // Original UI
    "edgetunnel": { en: "Northstar", fa: "نورت استار" },
    "设置页面": { en: "Settings", fa: "تنظیمات" },
    "加载中...": { en: "Loading...", fa: "در حال بارگذاری..." },
    "重置配置": { en: "⚠️ RESET CONFIGURATION", fa: "⚠️ بازنشانی تنظیمات" },
    "退出登录": { en: "👋 LOG OUT", fa: "👋 خروج" },
    "我是小白！我想简单点！": { en: "🐣 BEGINNER MODE", fa: "🐣 حالت مبتدی" },
    "我是高手！我就要折腾！": { en: "🚀 ADVANCED MODE", fa: "🚀 حالت پیشرفته" },
    "关闭": { en: "Close", fa: "بستن" },
    "取消": { en: "Cancel", fa: "لغو" },
    "保存": { en: "Save", fa: "ذخیره" },
    "确定": { en: "Confirm", fa: "تایید" },
    "确定重置": { en: "Confirm Reset", fa: "تایید بازنشانی" },
    "取消重置": { en: "Cancel", fa: "لغو" },
    "重置": { en: "Reset", fa: "بازنشانی" },
    "确定清除": { en: "Confirm Clear", fa: "تایید پاک کردن" },
    "可用性验证": { en: "Verify Availability", fa: "بررسی در دسترس بودن" },
    "复制": { en: "Copy", fa: "کپی" },
    "复制节点": { en: "Copy Node", fa: "کپی نود" },
    "复制订阅": { en: "Copy Sub", fa: "کپی اشتراک" },
    "二维码": { en: "QR Code", fa: "کد QR" },
    
    // Network Info
    "🌍 当前网络信息": { en: "🌍 CURRENT NETWORK INFORMATION", fa: "🌍 اطلاعات شبکه فعلی" },
    "国内测试": { en: "China Network Test", fa: "تست شبکه چین" },
    "国外测试": { en: "International Network Test", fa: "تست شبکه بین‌المللی" },
    "墙外测试": { en: "Overseas Site Test", fa: "تست سایت خارج از کشور" },
    "漏网之鱼": { en: "Unblocked Site Test", fa: "تست سایت باز" },
    "加载失败": { en: "Access failed", fa: "دسترسی ناموفق" },
    "翻墙未开启": { en: "Access unavailable", fa: "دسترسی غیرقابل استفاده" },
    "未知": { en: "Unknown", fa: "نامشخص" },
    
    // Modules & Headers
    "📋 获取节点链接": { en: "📋 Node Links", fa: "📋 لینک‌های نود" },
    "⚡️ 优选订阅生成": { en: "⚡ Generate Preferred Sub", fa: "⚡ تولید اشتراک بهینه" },
    "⚙️ 详细配置信息": { en: "⚙️ Detailed Configuration", fa: "⚙️ پیکربندی دقیق" },
    "🔐 Encrypted Client Hello": { en: "🔐 Encrypted Client Hello", fa: "🔐 Encrypted Client Hello" },
    "🧬 FinalMask & Cipher Suites": { en: "🧬 FinalMask & Cipher Suites", fa: "🧬 FinalMask و Cipher Suites" },
    "🌐 Cloudflare CDN 访问设置": { en: "🌐 Cloudflare CDN Access Settings", fa: "🌐 تنظیمات دسترسی Cloudflare CDN" },
    "🔄 订阅转换配置": { en: "🔄 Subscription Conversion Settings", fa: "🔄 تنظیمات تبدیل اشتراک" },
    "🔔 消息通知设置": { en: "🔔 Notification Settings", fa: "🔔 تنظیمات اعلان" },
    "📋 查看操作日志": { en: "📋 View Activity Logs", fa: "📋 مشاهده گزارش فعالیت" },
    
    // Workers Usage
    "Workers/Pages 请求使用情况": { en: "WORKERS/PAGES REQUEST USAGE", fa: "میزان مصرف درخواست Workers/Pages" },
    "Workers 请求": { en: "Workers Requests", fa: "درخواست‌های Workers" },
    "Pages 请求": { en: "Pages Requests", fa: "درخواست‌های Pages" },
    "日配额": { en: "Daily Quota", fa: "سهمیه روزانه" },
    "请求使用进度": { en: "Request usage", fa: "میزان مصرف" },
    "每日请求数重置清零": { en: "Daily request quota resets at:", fa: "سهمیه روزانه در این زمان بازنشانی می‌شود:" },
    "距离重置还有": { en: "Time until reset:", fa: "زمان باقی‌مانده تا بازنشانی:" },
    "北京时间 (UTC+8)": { en: "Reset time: China Standard Time (UTC+8)", fa: "زمان بازنشانی: زمان استاندارد چین (UTC+8)" },
    "今日使用情况总计": { en: "Total usage today:", fa: "کل مصرف امروز:" },

    // Sub Backend & Profile Dropdowns
    "CM负载均衡后端": { en: "CM Load Balanced Backend", fa: "بک‌اند متعادل CM" },
    "CM应急备用后端": { en: "CM Emergency Backup Backend", fa: "بک‌اند اضطراری CM" },
    "肥羊增强型后端": { en: "Feiyang Enhanced Backend", fa: "بک‌اند تقویت‌شده Feiyang" },
    "肥羊备用后端": { en: "Feiyang Backup Backend", fa: "بک‌اند پشتیبان Feiyang" },
    "周润发后端": { en: "Chow Yun-fat Backend", fa: "بک‌اند Chow Yun-fat" },
    "全分组": { en: "Full Group", fa: "گروه کامل" },
    "无自动测速": { en: "No Auto Speedtest", fa: "بدون تست سرعت" },
    "重度用户使用": { en: "Heavy User", fa: "کاربر سنگین" },
    "更多去广告": { en: "More Adblock", fa: "تبلیغات کمتر" },
    "奈飞全量": { en: "Netflix Full", fa: "نتفلیکس کامل" },
    "谷歌细分": { en: "Google Detailed", fa: "گوگل دقیق" },
    "CM自用规则": { en: "CM Default Rules", fa: "قوانین پیش‌فرض CM" },
    "自定义": { en: "Custom", fa: "سفارشی" },

    // FinalMask UI
    "FinalMask & Cipher Suites": { en: "FinalMask & Cipher Suites", fa: "FinalMask و Cipher Suites" },
    "Operator Profile": { en: "Operator Profile", fa: "پروفایل اپراتور" },
    "Enable": { en: "Enable", fa: "فعال" },
    "启用": { en: "Enable", fa: "فعال" },

    // Toasts & Modals
    "保存失败": { en: "Save failed", fa: "ذخیره ناموفق" },
    "加载配置失败": { en: "Load config failed", fa: "خطا در بارگذاری تنظیمات" },
    "已复制到剪贴板": { en: "Copied to clipboard", fa: "در کلیپ‌بورد کپی شد" },
    "复制失败": { en: "Copy failed", fa: "کپی ناموفق" },
    "配置已刷新": { en: "Config refreshed", fa: "تنظیمات به‌روزرسانی شد" },
    "配置已重置为默认值": { en: "Config reset to default", fa: "تنظیمات به حالت پیش‌فرض بازگشت" },
    "重置失败": { en: "Reset failed", fa: "بازنشانی ناموفق" },
    "加载日志失败": { en: "Load logs failed", fa: "خطا در بارگذاری گزارش‌ها" },
    "加载自定义IP失败": { en: "Load custom IP failed", fa: "خطا در بارگذاری IP سفارشی" },
    "保存自定义IP失败": { en: "Save custom IP failed", fa: "خطا در ذخیره IP سفارشی" },
    "请输入代理地址": { en: "Please enter proxy address", fa: "لطفا آدرس پروکسی را وارد کنید" },
    "验证中...": { en: "Verifying...", fa: "در حال بررسی..." },
    "后端版本过旧": { en: "Backend version too old", fa: "نسخه بک‌اند قدیمی است" },
    "代理无效": { en: "Invalid proxy", fa: "پروکسی نامعتبر" },
    "验证超时": { en: "Verification timeout", fa: "تایم اوت در بررسی" },
    "验证失败": { en: "Verification failed", fa: "بررسی ناموفق" },
    "确定要清除 Telegram 配置吗？": { en: "Clear Telegram config?", fa: "تنظیمات تلگرام پاک شود؟" },
    "清除配置失败": { en: "Clear config failed", fa: "پاک کردن تنظیمات ناموفق" },
    "确定要清除 Cloudflare 配置吗？": { en: "Clear Cloudflare config?", fa: "تنظیمات کلادفلر پاک شود؟" },
    "请填写Bot Token和Chat ID": { en: "Fill Bot Token & Chat ID", fa: "توکن و چت آی‌دی را پر کنید" },
    "Bot Token 无效": { en: "Invalid Bot Token", fa: "توکن نامعتبر" },
    "Chat ID 无效": { en: "Invalid Chat ID", fa: "چت آی‌دی نامعتبر" },
    "请输入API URL": { en: "Please enter API URL", fa: "لطفا API URL را وارد کنید" }
  };

  var ReverseDict = {};
  for (var k in DICT) {
    if (DICT[k].en) ReverseDict[DICT[k].en.trim()] = k;
    if (DICT[k].fa) ReverseDict[DICT[k].fa.trim()] = k;
    ReverseDict[k.trim()] = k;
  }

  var SKIP = { SCRIPT:1, STYLE:1, NOSCRIPT:1, CODE:1, PRE:1, TEXTAREA:1, KBD:1, SVG:1, PATH:1 };

  // --- 2. TRANSLATION ENGINE ---
  function translateString(text) {
    if (!text || typeof text !== "string" || !text.trim()) return text;
    var trimmed = text.trim();
    var key = ReverseDict[trimmed];
    if (key && DICT[key] && DICT[key][lang]) return text.replace(trimmed, DICT[key][lang]);
    
    var keys = Object.keys(DICT).sort(function (a, b) { return b.length - a.length; });
    var replacedText = text;
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i], zh = k, en = DICT[k].en, fa = DICT[k].fa, target = DICT[k][lang];
      if (!target) continue;
      if (zh.length > 1 && replacedText.indexOf(zh) !== -1) replacedText = replacedText.split(zh).join(target);
      if (en && en.length > 1 && en !== target && replacedText.indexOf(en) !== -1) replacedText = replacedText.split(en).join(target);
      if (fa && fa.length > 1 && fa !== target && replacedText.indexOf(fa) !== -1) replacedText = replacedText.split(fa).join(target);
    }
    return replacedText;
  }

  function translateNode(node) {
    if (node.nodeType === 3) {
      var p = node.parentNode;
      if (!p || SKIP[p.nodeName]) return;
      var translated = translateString(node.nodeValue);
      if (translated !== node.nodeValue) node.nodeValue = translated;
    } else if (node.nodeType === 1) {
      if (SKIP[node.nodeName]) return;
      ["placeholder", "title", "aria-label"].forEach(function(attr) {
        var val = node.getAttribute(attr);
        if (val) { var translated = translateString(val); if (translated !== val) node.setAttribute(attr, translated); }
      });
      var w = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false), n;
      while ((n = w.nextNode())) {
        var p = n.parentNode;
        if (p && !SKIP[p.nodeName]) {
          var translatedText = translateString(n.nodeValue);
          if (translatedText !== n.nodeValue) n.nodeValue = translatedText;
        }
      }
    }
  }

  // --- 3. CUSTOM GALAXY UI & LAYOUT ---
  function injectCSS() {
    if (document.getElementById("northstar-css")) return;
    var style = document.createElement("style");
    style.id = "northstar-css";
    style.innerHTML = `
      /* Color Variables (Galaxy Blue, Mint Green, Aqua, Bronze) */
      :root {
        --galaxy-bg: #080b14;
        --galaxy-panel: #111c33;
        --mint: #00f5d4;
        --aqua: #00e5ff;
        --bronze: #cd7f32;
        --bronze-hover: #b87333;
        --text-main: #e2e8f0;
        --text-muted: #94a3b8;
      }

      /* Dark Mode Overrides */
      html.dark-mode body { background: var(--galaxy-bg) !important; color: var(--text-main) !important; }
      html.dark-mode .card-container { background: var(--galaxy-panel) !important; border: 1px solid #1e3a8a !important; box-shadow: 0 0 20px rgba(0, 245, 212, 0.1) !important; }
      html.dark-mode .module { border: 1px solid #1e3a8a !important; background: transparent !important; }
      html.dark-mode .module-title { color: var(--mint) !important; border-bottom: 1px solid #1e3a8a !important; }
      html.dark-mode .btn-primary { background: var(--bronze) !important; color: #fff !important; border: none !important; }
      html.dark-mode .btn-primary:hover { background: var(--bronze-hover) !important; }
      
      /* New Header Styling */
      .ns-header-wrapper {
        background: linear-gradient(135deg, #0d1526 0%, #1e1b4b 100%);
        border: 1px solid #1e3a8a; border-radius: 12px; padding: 20px; margin-bottom: 15px;
        display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;
        position: relative; overflow: hidden;
      }
      .ns-header-wrapper::before {
        content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px;
        background: linear-gradient(to bottom, var(--mint), var(--aqua));
      }
      .ns-brand-area { display: flex; flex-direction: column; gap: 5px; }
      .ns-brand-title { font-size: 28px; font-weight: 900; color: #fff; margin: 0; line-height: 1.1; text-shadow: 0 0 10px rgba(0, 245, 212, 0.5); }
      .ns-brand-sub { font-size: 11px; color: var(--aqua); letter-spacing: 2px; font-weight: 600; }
      .ns-live-badge { 
        display: inline-block; background: rgba(0, 245, 212, 0.1); color: var(--mint); 
        padding: 2px 8px; border-radius: 4px; font-size: 10px; border: 1px solid var(--mint); margin-bottom: 5px;
      }
      .ns-systems { font-family: monospace; font-size: 12px; color: var(--mint); margin-top: 5px; }
      
      /* Feature Bar */
      .ns-feature-bar {
        display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap;
        background: #0d1526; border: 1px solid #1e3a8a; border-radius: 8px; padding: 10px;
        margin-bottom: 20px; font-size: 11px; font-weight: 700; letter-spacing: 1px; color: var(--text-muted);
      }
      .ns-feature-bar span { display: flex; align-items: center; gap: 6px; }
      .ns-feature-bar span::before { content: '•'; color: var(--aqua); font-size: 16px; }

      /* Header Buttons */
      .ns-header-actions { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
      .ns-btn-mint { background: transparent !important; border: 1px solid var(--mint) !important; color: var(--mint) !important; box-shadow: 0 0 10px rgba(0, 245, 212, 0.2); }
      .ns-btn-mint:hover { background: rgba(0, 245, 212, 0.1) !important; }
      .ns-btn-bronze { background: linear-gradient(135deg, #cd7f32, #a0522d) !important; border: none !important; color: #fff !important; }
      .ns-btn-bronze:hover { background: linear-gradient(135deg, #e69138, #b87333) !important; }

      /* RTL Support */
      html[dir="rtl"] body { font-family: Tahoma, "Vazirmatn", "Segoe UI", system-ui, sans-serif !important; }
      html[dir="rtl"] .input-wrapper { flex-direction: row-reverse !important; }
      html[dir="rtl"] .label-with-hint { flex-direction: row-reverse !important; }
      html[dir="rtl"] .header-buttons { flex-direction: row-reverse !important; }
      .ns-lang-btn { display: flex !important; align-items: center !important; justify-content: center !important; font-weight: 600 !important; cursor: pointer !important; }
    `;
    document.head.appendChild(style);
  }

  function buildNewLayout() {
    var cardContainer = document.querySelector(".card-container");
    if (!cardContainer || document.getElementById("ns-header-wrapper")) return;

    // Hide original h1
    var originalH1 = document.querySelector("body > h1");
    if (originalH1) originalH1.style.display = "none";

    // Build new Header HTML
    var newHeader = document.createElement("div");
    newHeader.id = "ns-header-wrapper";
    newHeader.className = "ns-header-wrapper";
    
    newHeader.innerHTML = `
      <div class="ns-brand-area">
        <div class="ns-live-badge">● LIVE · CONTROL CENTER</div>
        <h1 class="ns-brand-title">OMID EDGE PANEL</h1>
        <div class="ns-brand-sub">OMID EDGE PANEL · FREE FOR ALL</div>
        <div class="ns-systems">> all systems nominal <span style="color:var(--aqua)">✓</span></div>
      </div>
      <div class="ns-header-actions" id="ns-header-actions">
        <!-- Buttons will be moved here -->
      </div>
    `;

    // Build Feature Bar
    var featureBar = document.createElement("div");
    featureBar.className = "ns-feature-bar";
    featureBar.innerHTML = `
      <span>FREE FOR ALL</span>
      <span>EDGE-GRADE ROUTING</span>
      <span>ECH READY</span>
      <span>FINALMASK</span>
      <span>SMART SUBSCR</span>
    `;

    // Insert Header before the original .header
    var originalHeader = cardContainer.querySelector(".header");
    if (originalHeader) {
      cardContainer.insertBefore(newHeader, originalHeader);
      cardContainer.insertBefore(featureBar, originalHeader);
      originalHeader.style.display = "none"; // Hide the old plain header
    } else {
      cardContainer.prepend(newHeader);
      cardContainer.insertBefore(featureBar, newHeader.nextSibling);
    }

    // Move buttons to new header
    var targetActionArea = document.getElementById("ns-header-actions");
    
    // 1. Move Beginner/Advanced Mode Btn
    var modeBtn = document.getElementById("modeToggleBtn");
    if (modeBtn) {
      modeBtn.className = "btn ns-btn-mint";
      modeBtn.style.padding = "10px 15px";
      targetActionArea.appendChild(modeBtn);
    }
    
    // 2. Move Reset Btn
    var resetBtn = document.querySelector(".btn-reset");
    if (resetBtn) {
      resetBtn.className = "btn ns-btn-bronze";
      resetBtn.style.padding = "10px 15px";
      targetActionArea.appendChild(resetBtn);
    }
    
    // 3. Move Logout Btn
    var logoutBtn = document.querySelector(".header-buttons button[onclick='logout()']");
    if (logoutBtn) {
      logoutBtn.className = "btn ns-btn-bronze";
      logoutBtn.style.padding = "10px 15px";
      targetActionArea.appendChild(logoutBtn);
    }

    // 4. Create and Add Language Toggle
    var langBtn = document.createElement("button");
    langBtn.type = "button";
    langBtn.className = "btn ns-btn-mint ns-lang-btn";
    langBtn.style.padding = "10px 15px";
    langBtn.onclick = toggleLang;
    targetActionArea.appendChild(langBtn);

    // 5. Move Theme Toggle
    var themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.className = "btn ns-btn-mint"; // Style like a header button
      themeBtn.style.padding = "10px 15px";
      themeBtn.style.display = "flex";
      targetActionArea.appendChild(themeBtn);
    }

    // Reorder Modules: Move Usage and Network up
    var usageModule = document.getElementById("cfUsageModule");
    var networkModule = document.querySelector(".network-detail-collapsed");
    
    if (usageModule) {
      cardContainer.insertBefore(usageModule, cardContainer.querySelector(".module"));
    }
    if (networkModule) {
      // Ensure it goes after usage module
      if (usageModule) usageModule.parentNode.insertBefore(networkModule, usageModule.nextSibling);
      else cardContainer.insertBefore(networkModule, cardContainer.querySelector(".module"));
    }
  }

  // --- 4. APPLY STATE ---
  function applyLang(l) {
    lang = l;
    localStorage.setItem(STORAGE_LANG, l);
    var html = document.documentElement;
    html.lang = l;
    html.dir = l === "fa" ? "rtl" : "ltr";

    document.querySelectorAll('.ns-lang-btn').forEach(function(btn) {
      btn.innerHTML = l === "fa" ? "🌐 FA" : "🌐 EN";
    });

    translateNode(document.body);
  }

  function toggleLang() {
    applyLang(lang === "fa" ? "en" : "fa");
  }

  function patchAlerts() {
    var originalAlert = window.alert;
    window.alert = function(msg) { originalAlert(translateString(String(msg))); };
    var originalConfirm = window.confirm;
    window.confirm = function(msg) { return originalConfirm(translateString(String(msg))); };
  }

  function startObserver() {
    if (!window.MutationObserver) return;
    new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        m.addedNodes.forEach(function (n) {
          if (n.nodeType === 1 || n.nodeType === 3) translateNode(n);
        });
      });
    }).observe(document.body, { childList: true, subtree: true });
  }

  function boot() {
    injectCSS();
    patchAlerts();
    buildNewLayout();
    startObserver();
    applyLang(lang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
