// ==UserScript==
// @name         React 4 Football
// @namespace    http://tampermonkey.net/
// @version      11.0.17
// @description  React UI for EA WebApp
// @author       Fernando
// @match        https://www.ea.com/*/ea-sports-fc/ultimate-team/web-app/*
// @match        https://www.easports.com/*/ea-sports-fc/ultimate-team/web-app/*
// @grant        unsafeWindow
// @grant        GM_getValue
// @downloadURL  https://raw.githubusercontent.com/fernborba/react-4-football/main/dist/react4football.user.js
// @updateURL    https://raw.githubusercontent.com/fernborba/react-4-football/main/dist/react4football.meta.js
// @require      https://unpkg.com/react@18/umd/react.production.min.js
// @require      https://unpkg.com/react-dom@18/umd/react-dom.production.min.js
// @require      https://raw.githubusercontent.com/fernborba/react-4-football/refs/heads/main/dist/index4.js?v=v11.0.17
// ==/UserScript==

(function () {


        let styles = `
body{background-position:center;background-color:#191820;background-repeat:no-repeat;background-size:cover;color:#fcfcfc;font-family:UltimateTeam,sans-serif;font-size:100%;outline:0;position:relative}.field-label{margin-right:.5rem}.r4f-market-btn{background:#1f1f1f;border:1px solid #444;padding:10px 16px;border-radius:6px;cursor:pointer;color:#fff;font-weight:600;transition:background .2s ease}.r4f-floating-btn{position:fixed;top:40px;left:250px;z-index:9999999;background:#1f1f1f;border:1px solid #444;padding:10px 16px;border-radius:6px;cursor:pointer;color:#fff;font-weight:600;transition:background .2s ease}.r4f-floating-btn:hover{background:#333}.r4f-shell{position:fixed;right:86px;bottom:18px;z-index:2147483000;pointer-events:none}.r4f-launcher,.r4f-panel-item{font-family:UltimateTeam,sans-serif}.r4f-launcher{pointer-events:auto;min-width:0;padding:10px 14px;border:1px solid rgba(255,255,255,.18);border-radius:999px;background:linear-gradient(180deg,#222734f5,#12151ffa);box-shadow:0 16px 36px #00000057;color:#f6f7fb;display:flex;align-items:center;gap:10px;cursor:pointer;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);transition:transform .15s ease,border-color .15s ease,filter .15s ease}.r4f-launcher-icon{width:16px;display:inline-flex;flex-direction:column;gap:3px}.r4f-launcher-icon span{display:block;width:100%;height:2px;border-radius:999px;background:linear-gradient(90deg,#fff,#7ce3ff)}.r4f-launcher-copy{display:flex;align-items:baseline;gap:6px}.r4f-launcher:hover{transform:translateY(-1px);border-color:#ffffff52;filter:brightness(1.05)}.r4f-launcher-title{font-size:.86rem;font-weight:700;letter-spacing:.06em;line-height:1.1;text-transform:uppercase}.r4f-launcher-subtitle{font-size:.72rem;color:#ffffffb8}.r4f-panel{pointer-events:auto;position:absolute;right:0;bottom:calc(100% + 12px);width:min(300px,calc(100vw - 24px));max-height:min(70vh,520px);overflow-y:auto;padding:12px;border:1px solid rgba(255,255,255,.12);border-radius:22px;background:#0e1019f5;box-shadow:0 24px 60px #0000006b;display:flex;flex-direction:column;gap:10px;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px)}.r4f-panel:after{content:"";position:absolute;right:26px;top:100%;width:16px;height:16px;background:#0e1019f5;border-right:1px solid rgba(255,255,255,.12);border-bottom:1px solid rgba(255,255,255,.12);transform:translateY(-8px) rotate(45deg)}.r4f-tab-page{display:grid;gap:14px;width:100%;max-width:980px;margin:0 auto;padding:18px 14px 28px;box-sizing:border-box}.r4f-tab-view{overflow-y:auto}.r4f-native-tab-content{min-height:85%}.r4f-tab-page-header{display:flex;align-items:baseline;justify-content:space-between;gap:10px}.r4f-tab-page-title{margin:0;font-size:1.4rem;color:#f6f7fb}.r4f-tab-page-version{font-size:.82rem;letter-spacing:.08em;text-transform:uppercase;color:#ffffffbf}.r4f-panel-inline{position:static;width:100%;max-height:none;border-radius:18px;box-shadow:none;border-color:#ffffff14;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.r4f-panel-inline:after{content:none}.queue-preset-row{display:flex;gap:.75rem;align-items:flex-end;flex-wrap:wrap;margin-bottom:.75rem}.queue-preset-row select,.queue-preset-row input,.queue-run-controls input[type=number]{background-color:#2d2c36;color:#fcfcfc;min-height:2.4rem;padding:0 8px;border:1px solid #4c4b59;border-radius:6px;font-family:UltimateTeam,sans-serif}.queue-inline-field{display:flex;flex-direction:column;gap:.35rem;font-size:.8rem;color:#c6c6cf}.queue-summary{display:flex;gap:1rem;flex-wrap:wrap;font-size:.85rem;color:#d8d8e3;margin-bottom:.75rem}.r4f-panel-item{width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:14px 16px;border:1px solid rgba(255,255,255,.08);border-radius:16px;color:#f5f5f5;display:flex;flex-direction:column;align-items:flex-start;gap:4px;text-align:left;line-height:1.15;cursor:pointer;transition:transform .15s ease,border-color .15s ease,filter .15s ease}.r4f-panel-item:hover{transform:translateY(-1px);border-color:#ffffff38;filter:brightness(1.05)}.r4f-panel-item-title{font-size:.98rem}.r4f-panel-item-copy{font-size:.76rem;color:#ffffffc2}.r4f-tool-search{background:linear-gradient(180deg,#383838,#222)}.r4f-tool-search-v2{background:linear-gradient(180deg,#4b5f7d,#253244)}.r4f-tool-sbc{background:linear-gradient(180deg,#313131,#1f1f1f)}.r4f-tool-daily{background:linear-gradient(180deg,#3b9647,#266333)}.r4f-tool-mixed{background:linear-gradient(180deg,#63b5ff,#3279c7)}.r4f-tool-premium{color:#1a1a1a;background:linear-gradient(180deg,#ffe169,#f8c933)}.r4f-tool-fodder{background:linear-gradient(180deg,#ffb85c,#d87522)}.r4f-tool-sell{background:linear-gradient(180deg,#ff8f6b,#d45733)}.r4f-tool-ai{background:linear-gradient(180deg,#8c7cff,#5446c9)}@media screen and (max-width: 1280px){.r4f-shell{right:74px;bottom:14px}.r4f-launcher{padding:9px 12px}.r4f-panel{width:min(300px,calc(100vw - 20px))}.r4f-panel-inline{width:100%}}@media screen and (max-width: 720px){.r4f-shell{right:72px;bottom:10px}.r4f-panel{width:min(320px,calc(100vw - 20px))}.r4f-launcher-copy{gap:4px}.r4f-launcher-title{font-size:.8rem}.r4f-tab-page{padding:12px 10px 20px}.r4f-panel-inline{grid-template-columns:minmax(0,1fr)}}.r4f-ai-panel{position:fixed;top:164px;right:18px;z-index:2147482999;pointer-events:none}.r4f-ai-panel-menu{position:static;top:auto;right:auto;z-index:auto;pointer-events:auto}.r4f-ai-card,.r4f-ai-btn,.r4f-ai-field input,.r4f-ai-field select,.r4f-ai-field textarea{font-family:UltimateTeam,sans-serif}.r4f-ai-card{width:min(290px,calc(100vw - 32px));pointer-events:auto;padding:12px;border:1px solid rgba(255,255,255,.12);border-radius:18px;background:#1e1e1ee6;box-shadow:0 16px 44px #0000005c;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);display:flex;flex-direction:column;gap:10px;color:#f3f4f6}.r4f-ai-card-menu{width:100%;padding:14px 16px;border-radius:16px;background:linear-gradient(180deg,#5950a8fa,#2c256afa);box-shadow:inset 0 0 0 1px #ffffff14}.r4f-ai-header{display:flex;align-items:center;justify-content:space-between;gap:10px}.r4f-ai-title{font-size:14px;font-weight:700;letter-spacing:.02em}.r4f-ai-status{font-size:11px;color:#ffffffb8;text-transform:uppercase;letter-spacing:.08em}.r4f-ai-status-live{color:#9ae6b4}.r4f-ai-form,.r4f-ai-details{display:flex;flex-direction:column;gap:9px}.r4f-ai-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.r4f-ai-field{display:flex;flex-direction:column;gap:4px;font-size:11px;color:#ffffffb8}.r4f-ai-field input,.r4f-ai-field select,.r4f-ai-field textarea{width:100%;box-sizing:border-box;border:1px solid rgba(255,255,255,.1);border-radius:10px;background:#090b10d1;color:#f8fafc;font-size:13px;padding:9px 10px;resize:vertical}.r4f-ai-field select{-webkit-appearance:none;-moz-appearance:none;appearance:none}.r4f-ai-field input::placeholder,.r4f-ai-field textarea::placeholder{color:#ffffff57}.r4f-ai-detail{display:flex;flex-direction:column;gap:3px}.r4f-ai-label{font-size:11px;color:#ffffff94;text-transform:uppercase;letter-spacing:.06em}.r4f-ai-value{font-size:13px;line-height:1.3;color:#f8fafc;word-break:break-word}.r4f-ai-meta{display:flex;flex-wrap:wrap;gap:8px 12px;font-size:11px;color:#ffffffb8}.r4f-ai-btn{border:1px solid transparent;border-radius:11px;padding:10px 12px;color:#fff;font-size:12px;font-weight:700;cursor:pointer;transition:filter .15s ease,transform .15s ease,border-color .15s ease}.r4f-ai-btn:hover:not(:disabled){transform:translateY(-1px);filter:brightness(1.04)}.r4f-ai-btn:disabled{opacity:.55;cursor:not-allowed}.r4f-ai-btn-inline{padding:7px 10px}.r4f-ai-btn-start{background:linear-gradient(180deg,#2f9d57,#1f6f3d)}.r4f-ai-btn-end{background:linear-gradient(180deg,#b44b4b,#7f2d2d)}.r4f-ai-btn-neutral{background:linear-gradient(180deg,#555b66,#3d434d)}.r4f-ai-error{border:1px solid rgba(244,114,114,.2);border-radius:10px;padding:8px 10px;background:#7f1d1d38;color:#fda4af;font-size:12px}@media screen and (max-width: 1280px){.r4f-ai-panel{top:144px;right:10px}.r4f-ai-panel-menu{top:auto;right:auto}}@media screen and (max-width: 900px){.r4f-ai-panel{top:144px;right:10px}.r4f-ai-panel-menu{top:auto;right:auto}}@media screen and (max-width: 720px){.r4f-ai-panel{top:auto;right:10px;bottom:82px}.r4f-ai-card{width:min(320px,calc(100vw - 20px))}.r4f-ai-panel-menu{bottom:auto;right:auto}.r4f-ai-card-menu{width:100%}}.r4f-overlay{position:fixed;z-index:999999;top:0;left:0;width:100vw;height:100vh;background:#0009;display:flex;justify-content:center;align-items:center}.r4f-modal{background:#121212;border-radius:8px;width:min(95vw,700px);height:min(90vh,900px);display:flex;flex-direction:column;overflow:hidden}.r4f-modal-header{flex:0 0 auto;padding:8px 12px}.r4f-modal-content{flex:1 1 auto;overflow-y:auto;padding:12px;min-height:0}.AppLayout{display:flex;height:100vh;color:#fff}li{margin-bottom:1rem;cursor:pointer}li:hover{background-color:#6592ed}.Content{flex:1;padding:2rem;overflow-y:auto}.sidenav{height:100%;width:360px;position:fixed;z-index:1;top:0;left:0;background-color:#111;color:#f1f1f1;overflow-x:hidden;padding-top:20px}.sidenav a{padding:6px 8px 6px 16px;text-decoration:none;font-size:25px;color:#818181;display:block}.sidenav a:hover{color:#f1f1f1}.main{margin-left:160px;font-size:28px;padding:0 10px}@media screen and (max-height: 450px){.sidenav{padding-top:15px}.sidenav a{font-size:18px}}.SelectedPlayer{margin-left:1rem;padding:0 1rem;background:#2615a5}.modal{display:none;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:#0006}.modal-content{background-color:#060606;margin:15% auto;padding:20px;border:1px solid #888;width:80%}.close{color:#aaa;float:right;font-size:28px;font-weight:700}.close:hover,.close:focus{color:#f1f1f1;text-decoration:none;cursor:pointer}input[type=text]{background-color:#2d2c36;color:#fcfcfc;height:2.8em;padding:0 8px;border-radius:0;font-family:UltimateTeam,sans-serif}input::placeholder{color:#a6a6a1}.r4f-player-search-modal{width:min(95vw,1180px);height:min(92vh,920px);background:linear-gradient(180deg,#0b0e18fa,#04060cfa);border:1px solid rgba(255,255,255,.08);box-shadow:0 30px 80px #00000080}.r4f-player-search-modal .r4f-modal-header{padding:18px 20px 12px;border-bottom:1px solid rgba(255,255,255,.08)}.r4f-player-search-modal .r4f-modal-content{padding:18px 20px 20px}.r4f-search-v2-modal{width:min(95vw,1160px);height:min(92vh,720px);background:linear-gradient(180deg,#0e121bfa,#080b12fc);border:1px solid rgba(151,169,196,.16);box-shadow:0 34px 90px #00000085}.r4f-search-v2-topbar,.r4f-search-v2-chip-button,.r4f-search-v2-search-input,.r4f-search-v2-select,.r4f-search-v2-price-input,.r4f-search-v2-table,.r4f-search-v2-tabs button,.r4f-search-v2-log-entry{font-family:UltimateTeam,sans-serif}.r4f-search-v2-topbar{min-height:42px;padding:8px 12px;border-bottom:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:space-between;gap:10px;background:#080b12d1}.r4f-search-v2-topbar-group{display:flex;align-items:center;gap:6px;min-width:0}.r4f-search-v2-topbar-group-left{flex:1 1 42%}.r4f-search-v2-topbar-group-center{flex:0 0 auto}.r4f-search-v2-topbar-group-right{flex:0 1 auto;justify-content:flex-end;color:#ebf0f7e6;font-size:12px;white-space:nowrap}.r4f-search-v2-search-input,.r4f-search-v2-select,.r4f-search-v2-price-input{min-height:30px;border:1px solid rgba(111,129,158,.34);background:#131925f0;color:#f6f8fb;padding:0 10px;box-sizing:border-box;font-size:12px}.r4f-search-v2-search-input{width:170px;border-radius:9px}.r4f-search-v2-select{width:156px;border-radius:8px}.r4f-search-v2-price-input{width:94px;border-radius:8px}.r4f-search-v2-chip-button,.r4f-search-v2-close,.r4f-search-v2-tabs button{min-height:30px;padding:0 10px;border:1px solid rgba(154,172,198,.2);border-radius:9px;background:#1a212eeb;color:#f4f6fb;font-size:12px;cursor:pointer;transition:background .15s ease,border-color .15s ease,transform .15s ease}.r4f-search-v2-chip-button:hover,.r4f-search-v2-close:hover,.r4f-search-v2-tabs button:hover{transform:translateY(-1px);border-color:#b4c5db57}.r4f-search-v2-chip-button-primary{background:linear-gradient(180deg,#5c85ff,#365ad0)}.r4f-search-v2-chip-button-success{background:linear-gradient(180deg,#4ca86a,#287344)}.r4f-search-v2-chip-button-danger{background:linear-gradient(180deg,#af625c,#84352f)}.r4f-search-v2-chip-button.is-active,.r4f-search-v2-tabs button.is-active{border-color:#ffd7768f;background:linear-gradient(180deg,#6e571ef5,#4d390ef5)}.r4f-search-v2-close{width:30px;padding:0;font-size:18px;line-height:1}.r4f-search-v2-content{display:flex;flex:1 1 auto;flex-direction:column;min-height:0}.r4f-search-v2-main{display:grid;grid-template-columns:minmax(0,1.55fr) minmax(320px,1fr);gap:10px;flex:1 1 auto;min-height:0;padding:10px 12px 8px}.r4f-search-v2-queue-panel,.r4f-search-v2-results-panel{min-height:0;display:flex;flex-direction:column;gap:8px;border:1px solid rgba(255,255,255,.07);background:#0c1019c2;border-radius:12px;padding:8px}.r4f-search-v2-section-label{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#8fdfffd6}.r4f-search-v2-player-picker{display:grid;gap:6px}.r4f-search-v2-player-picker-head{display:flex;align-items:baseline;justify-content:space-between;gap:8px;font-size:12px}.r4f-search-v2-player-picker-head strong{color:#f6f8fb}.r4f-search-v2-player-picker-head span{color:#dce4eead}.r4f-search-v2-player-list{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:5px}.r4f-search-v2-player-option{min-height:46px;padding:7px 10px;border:1px solid rgba(255,255,255,.08);border-radius:10px;background:#111723b8;color:#edf2f8;display:flex;align-items:center;text-align:left;cursor:pointer;transition:transform .15s ease,border-color .15s ease,background .15s ease}.r4f-search-v2-player-copy{display:block;min-width:0;width:100%}.r4f-search-v2-player-copy strong{display:block;font-size:12px;color:#f4f7fb;line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.r4f-search-v2-player-rating{color:#ffd978;font-weight:600}.r4f-search-v2-player-option:hover{transform:translateY(-1px);border-color:#b4c5db47}.r4f-search-v2-player-option.is-active{border-color:#6c95ff99;background:#2c417480;box-shadow:inset 0 0 0 1px #6e99ff2e}.r4f-search-v2-player-empty{grid-column:1 / -1;min-height:56px;display:flex;align-items:center;justify-content:center;border:1px dashed rgba(255,255,255,.12);border-radius:10px;color:#dce4eeb8;font-size:12px}.r4f-search-v2-selection-strip{display:grid;grid-template-columns:minmax(120px,1fr) 94px auto;gap:8px;align-items:center}.r4f-search-v2-selection-meta{display:flex;flex-direction:column;min-width:0;gap:2px}.r4f-search-v2-selection-meta strong{font-size:13px;color:#f6f8fb}.r4f-search-v2-selection-meta span,.r4f-search-v2-bottom-bar{font-size:12px;color:#dce4eeb8}.r4f-search-v2-version-picker{display:flex;gap:10px;overflow-x:auto;padding-bottom:4px}.r4f-search-v2-version-card{min-width:94px;display:grid;gap:6px;justify-items:center;padding:6px 4px;border:1px solid rgba(255,255,255,.08);border-radius:12px;background:#1117238a;cursor:pointer;transition:transform .15s ease,border-color .15s ease,background .15s ease}.r4f-search-v2-version-card .mini-card{width:78px;height:106px;margin:0}.r4f-search-v2-version-card .mini-card-face{width:88%;left:6%}.r4f-search-v2-version-card .mini-card-rating{font-size:16px}.r4f-search-v2-version-card .mini-card-position{top:28px;font-size:11px}.r4f-search-v2-version-card .mini-card-name{bottom:7px;font-size:9px}.r4f-search-v2-version-card span{font-size:11px;color:#edf2f9d1;text-align:center}.r4f-search-v2-version-card:hover{transform:translateY(-1px);border-color:#b4c5db47}.r4f-search-v2-version-card.is-active{border-color:#6c95ff99;background:#2c417480;box-shadow:inset 0 0 0 1px #6e99ff2e}.r4f-search-v2-version-empty{min-height:72px;width:100%;display:flex;align-items:center;justify-content:center;border:1px dashed rgba(255,255,255,.12);border-radius:10px;color:#dce4eeb8;font-size:12px}.r4f-search-v2-table-shell,.r4f-search-v2-tab-panel{min-height:0;flex:1 1 auto;border:1px solid rgba(255,255,255,.06);border-radius:10px;overflow:auto;background:#080b128c}.r4f-search-v2-table{width:100%;border-collapse:collapse;font-size:12px}.r4f-search-v2-table thead{position:sticky;top:0;z-index:1}.r4f-search-v2-table th{text-align:left;font-weight:600;color:#c6d0dee0;background:#101622f5;padding:6px 8px;border-bottom:1px solid rgba(255,255,255,.08)}.r4f-search-v2-table td{padding:5px 8px;border-bottom:1px solid rgba(255,255,255,.05);color:#f4f6fb;height:26px}.r4f-search-v2-table tbody tr.is-active{background:#78bef033}.r4f-search-v2-state{display:inline-flex;align-items:center;justify-content:center;min-width:52px;padding:2px 6px;border-radius:999px;font-size:11px;text-transform:uppercase}.r4f-search-v2-state-pending{background:#b4913733;color:#ffd978}.r4f-search-v2-state-running{background:#78bef038;color:#9fd8ff}.r4f-search-v2-state-won{background:#30835238;color:#74de97}.r4f-search-v2-state-lost{background:#a8434338;color:#ff8c8c}.r4f-search-v2-bulk-price{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.r4f-search-v2-bulk-price label{display:flex;align-items:center;gap:6px;white-space:nowrap;font-size:12px}.r4f-search-v2-bulk-price input{width:80px}.r4f-search-v2-market-cell{font-variant-numeric:tabular-nums}.r4f-search-v2-market-loading{font-style:italic;color:#ffffff73}.r4f-search-v2-market-done{color:inherit}.r4f-search-v2-market-null{color:#ffffff59}.r4f-search-v2-buy-inline-input{width:5rem;padding:0;font-size:inherit;box-sizing:border-box}.r4f-search-v2-summary-bar,.r4f-search-v2-bottom-bar{display:flex;align-items:center;justify-content:space-between;gap:8px;white-space:nowrap}.r4f-search-v2-autosell{margin-top:10px;padding:8px 10px;border-radius:10px;border:1px solid rgba(255,255,255,.08);background:#0e121ca6;font-size:12px}.r4f-search-v2-autosell-summary{cursor:pointer;font-weight:600;color:#e8edf5}.r4f-search-v2-autosell-body{display:grid;gap:8px;margin-top:8px}.r4f-search-v2-autosell-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;color:#dce4eee0}.r4f-search-v2-autosell-row input[type=number]{width:96px}.r4f-search-v2-autosell-readonly{font-variant-numeric:tabular-nums;color:#f0f4fa}.r4f-search-v2-autosell-badge{display:inline-flex;min-width:1.5rem;justify-content:center;padding:2px 6px;border-radius:999px;background:#4a83ff38;color:#b8d4ff;font-weight:600;font-variant-numeric:tabular-nums}.r4f-search-v2-autosell-actions{display:flex;gap:8px}.r4f-search-v2-autosell-log{margin:0;padding-left:1rem;max-height:6.5rem;overflow:auto;color:#dce4eed1}.r4f-search-v2-autosell-summary-line{font-size:11px;color:#c8d2e0c7}.r4f-search-v2-current-target{display:grid;gap:4px;padding:8px;border:1px solid rgba(255,255,255,.06);border-radius:10px;background:#111723c7;font-size:12px}.r4f-search-v2-current-target strong,.r4f-search-v2-mini-stats strong,.r4f-search-v2-summary-stack strong{color:#f7f9fc}.r4f-search-v2-mini-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.r4f-search-v2-mini-stats>div,.r4f-search-v2-summary-stack>div{display:grid;gap:2px;padding:8px;border-radius:10px;border:1px solid rgba(255,255,255,.06);background:#111723b3}.r4f-search-v2-mini-stats span,.r4f-search-v2-summary-stack span{font-size:11px;color:#dce4eebd}.r4f-search-v2-tabs{display:flex;gap:6px}.r4f-search-v2-log-list{display:grid;gap:4px;padding:8px}.r4f-search-v2-log-entry{padding:6px 8px;border-radius:8px;background:#121823b8;border:1px solid rgba(255,255,255,.05);font-size:12px;color:#edf2f9e0}.r4f-search-v2-summary-stack{display:grid;gap:8px;padding:8px}.r4f-search-v2-bottom-bar{flex:0 0 auto;min-height:30px;padding:0 12px 10px}.r4f-search-v2-bottom-actions{display:inline-flex;align-items:center;gap:6px}.r4f-search-v2-preset-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1}.r4f-search-v2-preset-picker{position:absolute;bottom:calc(100% + 8px);left:0;z-index:2;min-width:220px;max-height:min(50vh,320px);overflow-y:auto;padding:6px;border:1px solid rgba(255,255,255,.12);border-radius:14px;background:#0e1019f5;box-shadow:0 16px 48px #00000070;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);display:flex;flex-direction:column;gap:2px}.r4f-search-v2-preset-picker button{all:unset;box-sizing:border-box;width:100%;padding:7px 12px;border-radius:8px;font-size:12px;color:#dce4eee0;cursor:pointer;white-space:nowrap;transition:background .12s ease}.r4f-search-v2-preset-picker button:hover{background:#ffffff1a}.r4f-search-v2-preset-empty{padding:8px 12px;font-size:12px;color:#dce4ee7a}.r4f-search-v2-engine{display:none}.r4f-player-search-header{display:grid;gap:14px}.r4f-player-search-heading{display:flex;flex-direction:column;gap:4px;padding-right:36px}.r4f-player-search-heading h2{margin:0;font-size:1.55rem;color:#f5f7fb}.r4f-player-search-eyebrow,.r4f-search-section-eyebrow,.r4f-search-config-label{font-size:.74rem;letter-spacing:.12em;text-transform:uppercase;color:#8ae9ffd6}.r4f-searchbar{position:relative;display:grid;gap:10px}.r4f-searchbar-label{display:grid;gap:8px}.r4f-searchbar-label-text{font-size:.85rem;color:#ffffffd1}.r4f-searchbar-input,.r4f-player-search-modal .target-price-input input,.r4f-player-search-modal .target-price-input select{width:100%;min-height:44px;border:1px solid rgba(115,132,168,.38);border-radius:14px;background:linear-gradient(180deg,#1e2331f5,#0f121bfa);color:#f3f5f8;padding:0 14px;box-sizing:border-box}.r4f-searchbar-results{display:grid;gap:8px;max-height:320px;overflow-y:auto;padding-right:4px}.r4f-search-result{width:100%;border:1px solid rgba(255,255,255,.08);border-radius:16px;background:linear-gradient(180deg,#272834f5,#191922f5);color:#f4f6fb;padding:12px 14px;text-align:left;cursor:pointer;transition:transform .15s ease,border-color .15s ease,filter .15s ease}.r4f-search-result:hover{transform:translateY(-1px);border-color:#7ce3ff66;filter:brightness(1.05)}.r4f-search-result-title{display:block;font-size:.94rem;font-weight:700;margin-bottom:4px}.r4f-search-empty,.r4f-search-empty-state{border:1px dashed rgba(255,255,255,.14);border-radius:16px;padding:18px 16px;color:#ffffffb8;background:#ffffff08}.r4f-player-search-layout{max-width:100%;padding:0;gap:18px;display:grid;grid-template-columns:minmax(0,1.15fr) minmax(320px,420px);align-items:start}.r4f-player-search-layout-queue-only{grid-template-columns:minmax(0,1fr)}.r4f-search-workspace,.r4f-queue-shell{display:grid;gap:16px}.r4f-search-workspace{padding:18px;border:1px solid rgba(255,255,255,.08);border-radius:24px;background:linear-gradient(180deg,#0d111ce6,#070910f0);min-width:0}.r4f-search-section-head{display:flex;flex-direction:column;gap:4px}.r4f-search-section-copy,.r4f-search-config-copy span{color:#ffffffad}.r4f-player-versions-panel{min-height:182px;align-items:flex-start}.r4f-search-config{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(280px,.9fr);gap:18px;align-items:end}.r4f-search-config-copy{display:grid;gap:6px;padding:16px;border-radius:18px;background:#ffffff0a;min-height:100%}.r4f-search-config-copy strong{font-size:1.05rem;color:#fff}.r4f-search-config-fields{display:grid;gap:12px}.r4f-search-rarity{gap:12px}.r4f-search-field{display:grid;gap:8px}.r4f-search-field .field-label{margin-right:0;color:#ffffffd1}.r4f-search-actions{justify-content:flex-start}.r4f-inline-player{display:grid;gap:4px}.r4f-inline-player-main{color:#f6f7fb;font-weight:600}.r4f-inline-player-meta{color:#d6dce7b8;font-size:.8rem;line-height:1.35}.r4f-inline-player-bid-result-neutral{color:#d6dce7b8}.r4f-inline-player-bid-result-win{color:#59d67a;font-weight:700}.r4f-inline-player-bid-result-loss{color:#ff6b6b;font-weight:700}.r4f-inline-player-difficulty-easy{color:#59d67a;font-weight:700;text-transform:capitalize}.r4f-inline-player-difficulty-okay{color:#fc6;font-weight:700;text-transform:capitalize}.r4f-inline-player-difficulty-hard{color:#ff8d8d;font-weight:700;text-transform:capitalize}.r4f-inline-player-compact .r4f-inline-player-main{font-size:.86rem}.r4f-inline-player-compact .r4f-inline-player-meta{font-size:.76rem}.r4f-queue-shell{position:sticky;top:0;max-height:calc(92vh - 120px);overflow-y:auto;align-self:start;padding-right:4px}.r4f-player-search-layout-queue-only .r4f-queue-shell{max-width:760px;width:100%;margin:0 auto;padding-right:0}.r4f-queue-preview{display:grid;gap:12px;padding:16px;border:1px solid rgba(255,255,255,.08);border-radius:20px;background:linear-gradient(180deg,#141722f5,#0a0c14fa);box-shadow:0 18px 34px #00000047}.r4f-queue-preview-head{display:grid;gap:4px}.r4f-queue-preview-head strong{color:#fff;font-size:1.15rem}.r4f-queue-preview-head span:last-child{color:#ffffffad}.r4f-queue-preview-list{display:grid;gap:8px}.r4f-queue-preview-item{padding:10px 12px;border-radius:14px;background:#ffffff0d;border:1px solid rgba(255,255,255,.06)}.r4f-queue-preview-empty{border:1px dashed rgba(255,255,255,.12);border-radius:14px;padding:14px 12px;color:#ffffff9e}.queue-container{display:flex;flex-direction:column;gap:1rem;padding:12px;max-width:600px;margin:0 auto;font-family:sans-serif}.original-queue-list{font-size:.85rem;color:#d6dce7}.queue-list{color:#edf1f7;border:1px solid rgba(255,255,255,.09);padding:14px;border-radius:18px;background:linear-gradient(180deg,#141722f5,#0a0c14fa);box-shadow:0 18px 34px #00000047}.queue-run-controls{position:sticky;top:0;z-index:2;box-shadow:0 6px 16px #0000002e}.queue-list h4{margin:0 0 6px;font-size:1rem;color:#f5f7fb}.queue-items{display:flex;flex-wrap:nowrap;overflow-x:auto;gap:8px;padding-bottom:6px}.queue-item{padding:10px 12px;border:1px solid rgba(255,255,255,.06);border-radius:12px;min-width:220px;background:linear-gradient(180deg,#272834f5,#191922f5);box-shadow:0 1px 2px #0000001f}.queue-controls{display:flex;gap:8px;flex-wrap:wrap}.queue-controls button,.queue-preset-row button{padding:8px 12px;border-radius:4px;background:#5050ff;border:none;color:#fff;cursor:pointer;font-weight:600}.queue-controls button:last-child{background:#d9534f}.queue-controls button:hover,.queue-preset-row button:hover{opacity:.85}.queue-controls button:disabled,.queue-preset-row button:disabled{background:#999;color:#eee;cursor:not-allowed;opacity:.6}.queue-controls button:disabled:hover,.queue-preset-row button:disabled:hover{opacity:.6}.queue-checkbox{display:flex;align-items:center;gap:6px;font-weight:600;color:#edf1f7}.queue-checkbox input{cursor:pointer}.queue-checkbox input:disabled{cursor:not-allowed}.queue-checkbox input:disabled+span,.queue-checkbox input:disabled~*{color:#8b93a7}.queue-checkbox input:disabled{opacity:.5}.manager-panel{color:#edf1f7;border:1px solid rgba(255,255,255,.09);padding:12px;border-radius:18px;background:linear-gradient(180deg,#141722f5,#0a0c14fa);box-shadow:0 18px 34px #00000047}.mini-card{position:relative;width:110px;height:150px;overflow:hidden;border-radius:8px;margin:4px;cursor:pointer;font-family:sans-serif}.mini-card-bg{position:absolute;width:100%;height:100%;object-fit:cover;z-index:1}.mini-card-face{position:absolute;width:90%;left:5%;bottom:5px;z-index:2}.mini-card-rating{position:absolute;top:6px;left:6px;z-index:3;font-size:20px;font-weight:700;color:#fff;text-shadow:0px 0px 4px black}.mini-card-position{position:absolute;top:32px;left:6px;z-index:3;font-size:14px;color:#fff;text-shadow:0px 0px 4px black}.mini-card-name{position:absolute;bottom:6px;text-align:center;width:100%;z-index:3;font-size:12px;color:#fff;text-shadow:0px 0px 4px black}.mini-card-price{position:absolute;bottom:40px;left:0;right:0;text-align:center;z-index:3;font-size:10px;line-height:1.25;color:#e8ecff;text-shadow:0px 0px 4px black;display:flex;align-items:center;justify-content:center;gap:4px;flex-wrap:wrap;padding:0 4px}.mini-card-price-refresh{background:#00000059;border:none;border-radius:4px;color:#dde1ff;cursor:pointer;font-size:12px;line-height:1;padding:2px 4px}.mini-card-price-refresh:hover{background:#4f7cff59}.mini-card.selectable:hover{transform:scale(1.05);transition:.15s ease}.mini-card.selected{outline:3px solid #4f7cff;box-shadow:0 0 0 2px #4f7cff99,0 6px 18px #0006;transform:scale(1.05);z-index:2}.mini-card.selectable:hover{transform:scale(1.05)}.player-versions{display:flex;gap:12px;flex-wrap:nowrap;overflow-x:auto;padding-bottom:8px}.player-versions::-webkit-scrollbar{height:8px}.r4f-player-search-modal .queue-list,.r4f-player-search-modal .manager-panel{color:#edf1f7;border:1px solid rgba(255,255,255,.09);border-radius:18px;background:linear-gradient(180deg,#141722f5,#0a0c14fa);box-shadow:0 18px 34px #00000047}.r4f-player-search-modal .queue-list h4,.r4f-player-search-modal .manager-panel h4{margin-bottom:10px}.r4f-player-search-modal .queue-list{color:#edf1f7;padding:14px}.r4f-player-search-modal .queue-item{min-width:220px;border-radius:12px;background:linear-gradient(180deg,#272834f5,#191922f5)}.r4f-player-search-modal .original-queue-list{font-size:.85rem;color:#d6dce7}.r4f-player-search-modal .queue-run-controls{top:0}.r4f-queue-shell>.queue-container{max-width:none;margin:0;padding:0}.r4f-fodder-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}.r4f-fodder-grid select,.r4f-fodder-grid input{background-color:#2d2c36;color:#fcfcfc;min-height:2.6rem;padding:0 8px;border:1px solid #4c4b59;border-radius:6px;font-family:UltimateTeam,sans-serif}@media screen and (max-width: 900px){.r4f-player-search-layout,.r4f-search-config{grid-template-columns:1fr}.r4f-queue-shell{position:static;max-height:none;overflow:visible;padding-right:0}.r4f-fodder-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media screen and (max-width: 720px){.r4f-player-search-modal{width:min(100vw,100%);height:min(100vh,100%);border-radius:0}.r4f-player-search-modal .r4f-modal-header,.r4f-player-search-modal .r4f-modal-content{padding-left:14px;padding-right:14px}.r4f-search-workspace{padding:14px}.r4f-player-search-heading h2{font-size:1.2rem}}.r4f-sell-price-label{display:block;text-align:center;font-size:11px;font-weight:600;color:#f0c040;padding:2px 4px;background:#000000a6;border-radius:0 0 4px 4px;margin-top:2px;letter-spacing:.3px}.r4f-sell-price-label.r4f-searching{color:#aaa}.r4f-sell-price-label.r4f-no-data,.r4f-sell-price-label.r4f-error{color:#f06060}.r4f-modal-item-row{display:flex;justify-content:space-between;align-items:center;padding:6px 4px;border-bottom:1px solid #2a2a2a;font-size:13px}.r4f-modal-item-row:last-child{border-bottom:none}.r4f-modal-item-name{color:#ccc}.r4f-modal-item-price{color:#f0c040;font-weight:600}.r4f-modal-item-skip{color:#888;font-style:italic}.r4f-modal-summary{padding:10px 4px;margin-bottom:8px;border-bottom:2px solid #333;font-size:14px;color:#fff}.r4f-modal-summary span{color:#f0c040;font-weight:700}.r4f-modal-footer{flex:0 0 auto;padding:10px 12px;display:flex;gap:10px;border-top:1px solid #333}.r4f-btn-confirm{flex:1;padding:10px;background:#2e7d32;border:none;border-radius:6px;color:#fff;font-weight:700;cursor:pointer;font-size:14px}.r4f-btn-confirm:hover{background:#388e3c}.r4f-btn-cancel{flex:1;padding:10px;background:#5a2020;border:none;border-radius:6px;color:#fff;font-weight:700;cursor:pointer;font-size:14px}.r4f-btn-cancel:hover{background:#7a2e2e}.r4f-modal-progress{padding:4px 4px 8px;font-size:12px;color:#aaa}.r4f-cfg-modal{width:min(95vw,640px);height:min(90vh,860px)}.r4f-cfg-header{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #2a2a3a;padding:10px 14px}.r4f-cfg-title{font-size:16px;font-weight:700;color:#f6f7fb;margin:0}.r4f-cfg-close{background:none;border:none;color:#aaa;font-size:22px;line-height:1;cursor:pointer;padding:0 4px}.r4f-cfg-close:hover{color:#fff}.r4f-cfg-body{display:flex;flex-direction:column;gap:20px;padding:16px}.r4f-cfg-section{display:flex;flex-direction:column;gap:8px}.r4f-cfg-section-label{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#888}.r4f-cfg-price-check-label{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:#c8cce8;cursor:pointer}.r4f-cfg-price-check-label input{margin-top:2px;cursor:pointer}.r4f-cfg-price-disabled-reason{font-size:12px;color:#c9a227;opacity:.9;margin-top:4px;padding-left:26px;line-height:1.35}.r4f-cfg-chips{display:flex;flex-wrap:wrap;gap:6px;min-height:28px}.r4f-cfg-chip{display:inline-flex;align-items:center;gap:5px;background:#1e2235;border:1px solid #2f3555;border-radius:999px;padding:3px 8px 3px 6px;font-size:12px;color:#d4d8f0}.r4f-cfg-chip-img{width:20px;height:14px;object-fit:contain;border-radius:2px}.r4f-cfg-chip-label{max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.r4f-cfg-chip-remove{background:none;border:none;color:#778;font-size:15px;line-height:1;cursor:pointer;padding:0;margin-left:2px}.r4f-cfg-chip-remove:hover{color:#e05}.r4f-cfg-empty{font-size:12px;color:#555;font-style:italic}.r4f-cfg-picker-wrap{position:relative}.r4f-cfg-input{width:100%;background:#141720;border:1px solid #2a2d40;border-radius:6px;color:#d4d8f0;font-size:13px;padding:6px 10px;box-sizing:border-box;outline:none;font-family:inherit}.r4f-cfg-input:focus{border-color:#3d5afe}.r4f-cfg-dropdown{position:absolute;top:calc(100% + 4px);left:0;right:0;background:#1a1d2e;border:1px solid #2a2d40;border-radius:6px;max-height:240px;overflow-y:auto;z-index:9999;list-style:none;margin:0;padding:4px 0}.r4f-cfg-dropdown-item{display:flex;align-items:center;gap:8px;padding:6px 10px;cursor:pointer;font-size:13px;color:#c8ccec}.r4f-cfg-dropdown-item:hover{background:#252840}.r4f-cfg-dropdown-img{width:24px;height:16px;object-fit:contain;flex-shrink:0;border-radius:2px}.r4f-cfg-dropdown-hint{margin-left:auto;font-size:10px;color:#555;white-space:nowrap}


        `;
    let styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    const tabStyleSheet = document.createElement("style");
    tabStyleSheet.innerText = `
.r4f-tab-view{overflow-y:auto}
.r4f-native-tab-content{min-height:85%}
.r4f-tab-page{display:grid;gap:14px;width:100%;max-width:980px;margin:0 auto;padding:18px 14px 28px;box-sizing:border-box}
.r4f-tab-page-header{display:flex;align-items:baseline;justify-content:space-between;gap:10px}
.r4f-tab-page-title{margin:0;font-size:1.4rem;color:#f6f7fb}
.r4f-tab-page-version{font-size:.82rem;letter-spacing:.08em;text-transform:uppercase;color:#ffffffbf}
.r4f-panel-inline{position:static;width:100%;max-height:none;border-radius:18px;box-shadow:none;border-color:#ffffff14;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.r4f-panel-inline:after{content:none}
@media screen and (max-width:720px){.r4f-tab-page{padding:12px 10px 20px}.r4f-panel-inline{grid-template-columns:minmax(0,1fr)}}
`;
    document.head.appendChild(tabStyleSheet);

  function waitForBody(fn) {
    if (document.body) return fn();
    const obs = new MutationObserver(() => {
      if (document.body) {
        obs.disconnect();
        fn();
      }
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
  }

  const EXPECTED_BUNDLE_VERSION = "v11.0.17";
  const startupState = {
    failed: false,
    reason: null,
  };
  const eaWindow = typeof unsafeWindow !== "undefined" && unsafeWindow ? unsafeWindow : window;

  function cacheLastUTSID(value) {
    if (typeof value !== "string") return;
    const sid = value.trim();
    if (!sid) return;
    eaWindow.__fcxLastUTSID = sid;
    window.__fcxLastUTSID = sid;
    try {
      sessionStorage.setItem("fcx.lastUTSID", sid);
    } catch {
      // Ignore storage errors (private mode/quota/etc)
    }
  }

  function readUTSIDFromHeaders(headers) {
    if (!headers) return null;

    try {
      if (typeof Headers !== "undefined" && headers instanceof Headers) {
        return headers.get("X-UT-SID");
      }
    } catch {
      // Ignore and continue to other formats.
    }

    if (Array.isArray(headers)) {
      for (const entry of headers) {
        if (!Array.isArray(entry) || entry.length < 2) continue;
        const [name, value] = entry;
        if (typeof name === "string" && name.toLowerCase() === "x-ut-sid") {
          return value;
        }
      }
      return null;
    }

    if (typeof headers === "object") {
      for (const [name, value] of Object.entries(headers)) {
        if (typeof name === "string" && name.toLowerCase() === "x-ut-sid") {
          return value;
        }
      }
    }

    return null;
  }

  function installUTSIDCapture() {
    if (eaWindow.__r4fUTSIDCaptureInstalled) return;
    eaWindow.__r4fUTSIDCaptureInstalled = true;

    if (typeof eaWindow.fetch === "function") {
      const originalFetch = eaWindow.fetch;
      eaWindow.fetch = function (...args) {
        try {
          const init = args[1];
          const sidFromInit = readUTSIDFromHeaders(init?.headers);
          if (sidFromInit) {
            cacheLastUTSID(sidFromInit);
          }
        } catch {
          // Ignore and continue fetch.
        }
        return originalFetch.apply(this, args);
      };
    }

    if (eaWindow.XMLHttpRequest?.prototype?.setRequestHeader) {
      const xhrProto = eaWindow.XMLHttpRequest.prototype;
      if (!xhrProto.__r4fUTSIDHeaderPatched) {
        const originalSetRequestHeader = xhrProto.setRequestHeader;
        xhrProto.setRequestHeader = function (name, value) {
          try {
            if (typeof name === "string" && name.toLowerCase() === "x-ut-sid") {
              cacheLastUTSID(value);
            }
          } catch {
            // Ignore and continue XHR header setup.
          }
          return originalSetRequestHeader.apply(this, arguments);
        };
        xhrProto.__r4fUTSIDHeaderPatched = true;
      }
    }
  }

  installUTSIDCapture();

  async function initDecisionLogging() {
    if (!window.React4Football?.decisionLogger) {
      console.warn("[R4F] Decision logger bundle API not available");
      return;
    }

    try {
      await window.React4Football.initDecisionLogging();
      window.R4FDecisionLogger = window.React4Football.decisionLogger;
      console.log("[R4F] Decision logger ready");
    } catch (error) {
      console.error("[R4F] Failed to initialize decision logger", error);
    }
  }

  function getEAServices() {
    if (eaWindow?.services) return eaWindow.services;
    if (typeof services !== "undefined") return services;
    return null;
  }

  function getNegativeNotificationType() {
    if (typeof UINotificationType !== "undefined") return UINotificationType.NEGATIVE;
    return eaWindow?.UINotificationType?.NEGATIVE;
  }

  function showNotification(message, type = getNegativeNotificationType()) {
    const servicesApi = getEAServices();
    if (servicesApi?.Notification?.queue) {
      servicesApi.Notification.queue(type === undefined ? [message] : [message, type]);
    } else {
      const logger = type === getNegativeNotificationType() ? console.error : console.log;
      logger("[R4F]", message);
    }
  }

  function failStartup(message) {
    if (startupState.failed) return false;
    startupState.failed = true;
    startupState.reason = message;
    showNotification(message, getNegativeNotificationType());
    return false;
  }

  function runUserscriptPreflight(options = {}) {
    const { requireBundle = false, requireEAComponents = false, requireSession = true } = options;

    if (!document.body) {
      return failStartup("React4Football could not find the page body. Refresh and try again.");
    }

    if (requireBundle) {
      if (!window.React4Football || typeof window.React4Football.mount !== "function") {
        return failStartup("React4Football bundle not loaded.");
      }

      const bundleVersion = window.React4Football.version;
      if (!bundleVersion) {
        return failStartup("React4Football bundle version is missing.");
      }

      if (bundleVersion !== EXPECTED_BUNDLE_VERSION) {
        return failStartup(
          `Version mismatch: userscript expects ${EXPECTED_BUNDLE_VERSION}, got ${bundleVersion}.`
        );
      }
    }

    if (requireEAComponents) {
      const eaReady =
        typeof UTSlotActionPanelView !== "undefined"
        || typeof UTDefaultActionPanelView !== "undefined"
        || typeof eaWindow.UTSlotActionPanelView !== "undefined"
        || typeof eaWindow.UTDefaultActionPanelView !== "undefined";
      if (!eaReady) {
        return failStartup("EA Web App not ready yet. Refresh and try again.");
      }
    }

    if (requireSession && !isEaSessionReady()) {
      return failStartup("No UT session found. Open Ultimate Team and log in first.");
    }

    return true;
  }

  const R4F_TAB_TAG = 7426;
  const R4F_TAB_TITLE = "R4F";

  function getUTGameTabBarControllerCtor() {
    return eaWindow.UTGameTabBarController
      || (typeof UTGameTabBarController !== "undefined" ? UTGameTabBarController : null);
  }

  function getUTGameFlowNavigationControllerCtor() {
    return eaWindow.UTGameFlowNavigationController
      || (typeof UTGameFlowNavigationController !== "undefined" ? UTGameFlowNavigationController : null);
  }

  function getUTTabBarItemViewCtor() {
    return eaWindow.UTTabBarItemView
      || (typeof UTTabBarItemView !== "undefined" ? UTTabBarItemView : null);
  }

  function getUTHomeHubViewControllerCtor() {
    return eaWindow.UTHomeHubViewController
      || (typeof UTHomeHubViewController !== "undefined" ? UTHomeHubViewController : null);
  }

  function getUTHomeHubViewCtor() {
    return eaWindow.UTHomeHubView
      || (typeof UTHomeHubView !== "undefined" ? UTHomeHubView : null);
  }

  function getJSUtilsApi() {
    return eaWindow.JSUtils || (typeof JSUtils !== "undefined" ? JSUtils : null);
  }

  function getDOMKitApi() {
    return eaWindow.DOMKit || (typeof DOMKit !== "undefined" ? DOMKit : null);
  }

  const R4F_TAB_DEPENDENCIES = [
    { name: "UTGameTabBarController", available: () => Boolean(getUTGameTabBarControllerCtor()) },
    { name: "UTGameFlowNavigationController", available: () => Boolean(getUTGameFlowNavigationControllerCtor()) },
    { name: "UTTabBarItemView", available: () => Boolean(getUTTabBarItemViewCtor()) },
    { name: "UTHomeHubViewController", available: () => Boolean(getUTHomeHubViewControllerCtor()) },
    { name: "UTHomeHubView", available: () => Boolean(getUTHomeHubViewCtor()) },
  ];

  function getMissingR4FTabDependencies() {
    return R4F_TAB_DEPENDENCIES
      .filter(dep => !dep.available())
      .map(dep => dep.name);
  }

  function warnR4FTabDependencyFailure(prefix, missingDeps) {
    const message = `[R4F] ${prefix}. Missing EA dependency: ${missingDeps.join(", ")}`;
    console.warn(message);
    showNotification(message, getNegativeNotificationType());
  }

  function R4FTabController() {
    const HomeHubViewController = getUTHomeHubViewControllerCtor();
    if (typeof HomeHubViewController === "function") {
      HomeHubViewController.call(this);
    }
  }

  function R4FTabView() {
    const HomeHubView = getUTHomeHubViewCtor();
    if (typeof HomeHubView === "function") {
      HomeHubView.call(this);
    }
  }

  function createR4FTabItem() {
    const TabBarItemView = getUTTabBarItemViewCtor();
    if (typeof TabBarItemView !== "function") {
      throw new Error("UTTabBarItemView is unavailable");
    }
    const tab = new TabBarItemView();
    tab.init();
    tab.setTag(R4F_TAB_TAG);
    tab.setText(R4F_TAB_TITLE);
    tab.addClass("icon-settings");
    return tab;
  }

  function wireR4FTabInheritance() {
    if (R4FTabController.prototype.__r4fWired) {
      return;
    }

    const HomeHubViewController = getUTHomeHubViewControllerCtor();
    const HomeHubView = getUTHomeHubViewCtor();
    if (typeof HomeHubViewController !== "function" || typeof HomeHubView !== "function") {
      throw new Error("UTHomeHub base classes are unavailable");
    }

    const jsUtils = getJSUtilsApi();
    if (jsUtils?.inherits) {
      jsUtils.inherits(R4FTabController, HomeHubViewController);
      jsUtils.inherits(R4FTabView, HomeHubView);
    } else {
      R4FTabController.prototype = Object.create(HomeHubViewController.prototype);
      R4FTabController.prototype.constructor = R4FTabController;
      R4FTabView.prototype = Object.create(HomeHubView.prototype);
      R4FTabView.prototype.constructor = R4FTabView;
    }

    R4FTabController.prototype.getNavigationTitle = function () {
      return "React 4 Football";
    };

    R4FTabController.prototype.viewDidAppear = function () {
      this.getNavigationController().setNavigationVisibility(true, true);
      const view = typeof this.getView === "function" ? this.getView() : null;
      if (view && typeof view.mountReactApp === "function") {
        view.mountReactApp();
      }
    };

    R4FTabController.prototype.viewWillDisappear = function () {
      this.getNavigationController().setNavigationVisibility(false, false);
    };

    R4FTabController.prototype._getViewInstanceFromData = function () {
      return new R4FTabView();
    };

    R4FTabView.prototype.init = function () {
      try {
        if (this.__root && this.__root.parentNode) {
          return;
        }
        this._generate();
        if (typeof this.getRootElement !== "function") {
          this.getRootElement = () => this.__root;
        }
      } catch (error) {
        console.warn("[R4F] tab view init failed:", error);
      }
    };

    R4FTabView.prototype.mountReactApp = function () {
      if (this.__reactUnmount || !this.__mountPoint) {
        return;
      }
      if (!window.React4Football || typeof window.React4Football.mount !== "function") {
        console.warn("[R4F] React bundle mount() is unavailable while rendering tab content");
        return;
      }
      try {
        this.__reactUnmount = window.React4Football.mount(this.__mountPoint);
      } catch (error) {
        console.warn("[R4F] failed to mount React inside tab view:", error);
      }
    };

    R4FTabView.prototype._generate = function () {
      const root = document.createElement("div");
      root.classList.add("ut-market-search-filters-view", "floating", "r4f-tab-view");
      root.id = "r4f-native-tab-view";

      const content = document.createElement("div");
      content.classList.add("ut-pinned-list", "r4f-native-tab-content");
      root.appendChild(content);

      const mountPoint = document.createElement("div");
      mountPoint.id = "r4f-native-tab-root";
      content.appendChild(mountPoint);

      this.__mountPoint = mountPoint;
      this.__root = root;
    };

    R4FTabView.prototype.destroyGeneratedElements = function () {
      if (typeof this.__reactUnmount === "function") {
        this.__reactUnmount();
      }
      this.__reactUnmount = null;
      try {
        const domKit = getDOMKitApi();
        if (typeof domKit?.remove === "function") {
          domKit.remove(this.__root);
        } else if (this.__root?.parentNode) {
          this.__root.parentNode.removeChild(this.__root);
        }
      } catch (error) {
        console.warn("[R4F] failed to remove tab root:", error);
      }
      this.__mountPoint = null;
      this.__root = null;
    };

    R4FTabController.prototype.__r4fWired = true;
  }

  function hasR4FTabController(tabs) {
    return tabs.some(tabController => {
      const tabBarItem = tabController?.tabBarItem;
      if (!tabBarItem) {
        return false;
      }
      const tag =
        typeof tabBarItem.getTag === "function"
          ? tabBarItem.getTag()
          : (tabBarItem.tag ?? tabBarItem._tag);
      return Number(tag) === R4F_TAB_TAG;
    });
  }

  function installR4FTabPatch() {
    const missingDeps = getMissingR4FTabDependencies();
    if (missingDeps.length > 0) {
      warnR4FTabDependencyFailure("cannot install native tab patch", missingDeps);
      return false;
    }

    const TabBarController = getUTGameTabBarControllerCtor();
    const proto = TabBarController?.prototype;
    if (!proto || typeof proto.initWithViewControllers !== "function") {
      console.warn("[R4F] cannot install native tab patch: UTGameTabBarController.prototype.initWithViewControllers is missing");
      return false;
    }

    if (proto.__r4fPatched) {
      return true;
    }

    const originalInitWithViewControllers = proto.initWithViewControllers;
    proto.initWithViewControllers = function (tabs) {
      const viewControllers = Array.isArray(tabs) ? tabs : [];

      if (!hasR4FTabController(viewControllers)) {
        try {
          const NavController = getUTGameFlowNavigationControllerCtor();
          if (typeof NavController !== "function") {
            throw new Error("UTGameFlowNavigationController is unavailable");
          }
          const navController = new NavController();
          navController.initWithRootController(new R4FTabController());
          navController.tabBarItem = createR4FTabItem();
          viewControllers.push(navController);
        } catch (error) {
          console.warn("[R4F] failed to attach native R4F tab:", error);
        }
      }

      return originalInitWithViewControllers.call(this, viewControllers);
    };

    proto.__r4fPatched = true;
    console.log("[R4F] native tab patch installed");
    return true;
  }

  function isBundleReadyForNativeTab() {
    if (!window.React4Football || typeof window.React4Football.mount !== "function") {
      return false;
    }

    const bundleVersion = window.React4Football.version;
    if (!bundleVersion) {
      return false;
    }

    if (bundleVersion !== EXPECTED_BUNDLE_VERSION) {
      failStartup(`Version mismatch: userscript expects ${EXPECTED_BUNDLE_VERSION}, got ${bundleVersion}.`);
      return false;
    }

    return true;
  }

  function ensureNativeTabInjection() {
    const RETRY_INTERVAL_MS = 500;
    const WARN_EVERY_ATTEMPTS = 60;
    let attempts = 0;
    let injected = false;

    function attemptInstall() {
      if (startupState.failed || injected) return;
      attempts += 1;

      if (!isBundleReadyForNativeTab()) {
        setTimeout(attemptInstall, RETRY_INTERVAL_MS);
        return;
      }

      const missingDeps = getMissingR4FTabDependencies();
      if (missingDeps.length > 0) {
        if (attempts % WARN_EVERY_ATTEMPTS === 0) {
          console.warn(`[R4F] waiting for native tab dependencies: ${missingDeps.join(", ")}`);
        }
        setTimeout(attemptInstall, RETRY_INTERVAL_MS);
        return;
      }

      try {
        wireR4FTabInheritance();
        injected = installR4FTabPatch();
      } catch (error) {
        console.warn("[R4F] native tab injection failed; retrying:", error);
      }

      if (!injected) {
        setTimeout(attemptInstall, RETRY_INTERVAL_MS);
      }
    }

    attemptInstall();
  }

  waitForBody(() => {
    initDecisionLogging();
    ensureNativeTabInjection();
  });

  // =====================================================
  // Lock Player Functionality - DOM Injection
  // =====================================================

  const LOCKED_ITEMS_KEY = "fcx.lockedItems";
  let cachedLockedItems = null;

  // Utility functions for managing locked items
  function getLockedItems() {
    if (cachedLockedItems !== null) {
      return cachedLockedItems;
    }
    cachedLockedItems = [];
    const stored = localStorage.getItem(LOCKED_ITEMS_KEY);
    if (stored) {
      try {
        cachedLockedItems = JSON.parse(stored);
      } catch (e) {
        console.error("[R4F] Error parsing locked items:", e);
        cachedLockedItems = [];
      }
    }
    return cachedLockedItems;
  }

  function saveLockedItems() {
    localStorage.setItem(LOCKED_ITEMS_KEY, JSON.stringify(cachedLockedItems));
  }

  function isItemLocked(item) {
    const lockedItems = getLockedItems();
    return lockedItems.includes(item.definitionId);
  }

  function lockItem(item) {
    const lockedItems = getLockedItems();
    if (!lockedItems.includes(item.definitionId)) {
      lockedItems.push(item.definitionId);
      saveLockedItems();
      return true;
    }
    return false;
  }

  function unlockItem(item) {
    const lockedItems = getLockedItems();
    const index = lockedItems.indexOf(item.definitionId);
    if (index > -1) {
      lockedItems.splice(index, 1);
      saveLockedItems();
      return true;
    }
    return false;
  }

  // Helper function to insert element after another
  function insertAfter(newNode, referenceNode) {
    if (referenceNode && referenceNode.parentNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
  }

  // Helper function to update locked class on DOM elements by definitionId
  function updateLockedVisual(definitionId, isLocked) {
    const elements = document.querySelectorAll(`[data-definition-id="${definitionId}"]`);
    elements.forEach(el => {
      if (isLocked) {
        el.classList.add("locked");
      } else {
        el.classList.remove("locked");
      }
    });
  }

  // Override EA's UI components to inject Lock button
  function initPlayerLockOverrides() {
    const lockedLabel = "Unlock Player React FC";
    const unlockedLabel = "Lock Player React FC";

    // Override UTSlotActionPanelView.prototype.setItem
    if (typeof UTSlotActionPanelView !== "undefined") {
      const originalSetItem = UTSlotActionPanelView.prototype.setItem;
      UTSlotActionPanelView.prototype.setItem = function (item, t) {
        const result = originalSetItem.call(this, item, t);

        // Skip if not a valid player item
        if (!item || item.loans > -1 || !item.isPlayer || !item.isPlayer() || !item.id || item.isTimeLimited && item.isTimeLimited()) {
          return result;
        }

        // Create lock/unlock button if not already present
        if (!this.lockUnlockButton && this._btnBio && this._btnBio.__root) {
          const label = isItemLocked(item) ? lockedLabel : unlockedLabel;
          const button = new UTGroupButtonControl();
          button.init();
          button.setInteractionState(true);
          button.setText(label);
          insertAfter(button.__root, this._btnBio.__root);

          button.addTarget(this, () => {
            if (isItemLocked(item)) {
              unlockItem(item);
              button.setText(unlockedLabel);
              updateLockedVisual(item.definitionId, false);
              showNotification("Player unlocked", UINotificationType.POSITIVE);
            } else {
              lockItem(item);
              button.setText(lockedLabel);
              updateLockedVisual(item.definitionId, true);
              showNotification("Player locked", UINotificationType.POSITIVE);
            }
          }, EventType.TAP);

          this.lockUnlockButton = button;
        } else if (this.lockUnlockButton) {
          // Update button label if item changed
          const label = isItemLocked(item) ? lockedLabel : unlockedLabel;
          this.lockUnlockButton.setText(label);
        }

        return result;
      };
      console.log("[R4F] UTSlotActionPanelView override applied");
    }

    // Override UTDefaultActionPanelView.prototype.render
    if (typeof UTDefaultActionPanelView !== "undefined") {
      const originalRender = UTDefaultActionPanelView.prototype.render;
      UTDefaultActionPanelView.prototype.render = function (item, t, i, o, n, r, s) {
        const result = originalRender.call(this, item, t, i, o, n, r, s);

        // Skip if not a valid player item
        if (!item || item.loans > -1 || !item.isPlayer || !item.isPlayer() || !item.id || item.isTimeLimited && item.isTimeLimited()) {
          return result;
        }

        // Create lock/unlock button if not already present
        if (!this.lockUnlockButton && this._bioButton && this._bioButton.__root) {
          const label = isItemLocked(item) ? lockedLabel : unlockedLabel;
          const button = new UTGroupButtonControl();
          button.init();
          button.setInteractionState(true);
          button.setText(label);
          insertAfter(button.__root, this._bioButton.__root);

          button.addTarget(this, () => {
            if (isItemLocked(item)) {
              unlockItem(item);
              button.setText(unlockedLabel);
              updateLockedVisual(item.definitionId, false);
              showNotification("Player unlocked", UINotificationType.POSITIVE);
            } else {
              lockItem(item);
              button.setText(lockedLabel);
              updateLockedVisual(item.definitionId, true);
              showNotification("Player locked", UINotificationType.POSITIVE);
            }
          }, EventType.TAP);

          this.lockUnlockButton = button;
        } else if (this.lockUnlockButton) {
          // Update button label if item changed
          const label = isItemLocked(item) ? lockedLabel : unlockedLabel;
          this.lockUnlockButton.setText(label);
        }

        return result;
      };
      console.log("[R4F] UTDefaultActionPanelView override applied");
    }

    // Override UTPlayerItemView.prototype.renderItem for visual feedback
    if (typeof UTPlayerItemView !== "undefined") {
      const originalRenderItem = UTPlayerItemView.prototype.renderItem;
      UTPlayerItemView.prototype.renderItem = function (item, t) {
        const result = originalRenderItem.call(this, item, t);

        // Try multiple ways to find the root element
        const rootEl = this.__root || this.getRootElement?.() || this._rootElement;

        if (item && rootEl) {
          if (isItemLocked(item)) {
            rootEl.classList.add("locked");
          } else {
            rootEl.classList.remove("locked");
          }
        }

        return result;
      };
      console.log("[R4F] UTPlayerItemView override applied");
    }
  }

  function getUTSBCSquadDetailPanelViewCtor() {
    return eaWindow.UTSBCSquadDetailPanelView
      || (typeof UTSBCSquadDetailPanelView !== "undefined" ? UTSBCSquadDetailPanelView : null);
  }

  /**
   * Quick Builder button: inject into the SBC squad side panel and wire click to
   * window.React4Football.runQuickSolve with the current challenge/set IDs.
   */
  function initSbcQuickBuilderButton() {
    const PanelView = getUTSBCSquadDetailPanelViewCtor();
    if (!PanelView?.prototype || typeof PanelView.prototype._generate !== "function") {
      console.warn("[R4F] UTSBCSquadDetailPanelView._generate unavailable; Quick Builder button not installed");
      return;
    }
    if (PanelView.prototype.__r4fSbcQuickBuilderPatched) {
      return;
    }
    const originalGenerate = PanelView.prototype._generate;
    PanelView.prototype._generate = function () {
      const result = originalGenerate.apply(this, arguments);
      try {
        const root =
          this.__root
          || (typeof this.getRootElement === "function" ? this.getRootElement() : null);
        if (!root || typeof root.querySelector !== "function") {
          return result;
        }
        const container = root.querySelector(".sbc-button-container");
        if (!container || container.querySelector("[data-r4f-quick-builder]")) {
          return result;
        }
        const btn = document.createElement("button");
        btn.type = "button";
        btn.setAttribute("data-r4f-quick-builder", "1");
        btn.className = "r4f-sbc-quick-builder-btn";
        btn.textContent = "Quick Builder";

        // Capture view reference for ID extraction in the click handler
        const panelView = this;
        btn.addEventListener("click", function () {
          try {
            if (!window.React4Football || typeof window.React4Football.runQuickSolve !== "function") {
              showNotification("Quick Builder: R4F bundle not ready. Make sure the R4F tab has been opened first.", getNegativeNotificationType());
              return;
            }
            // Extract challengeId + setId — three-pass strategy:
            // 1. Structured property paths on the EA view
            // 2. One-level property walk of the view
            // 3. Fallback to values captured by the request interceptor
            const detail = {};
            try {
              const candidates = [
                panelView._challenge,
                panelView._sbcChallenge,
                panelView.challenge,
                panelView._model,
                panelView._model?.challenge,
                panelView._data,
                panelView._data?.challenge,
                panelView._viewModel,
                panelView._viewModel?.challenge,
                panelView._controller?._challenge,
                panelView._controller?._model,
                panelView._controller?._data,
              ];
              for (const candidate of candidates) {
                if (!candidate || typeof candidate !== "object") continue;
                const cId = candidate.challengeId ?? candidate.id;
                const sId = candidate.setId;
                if (cId != null && detail.challengeId == null) detail.challengeId = Number(cId);
                if (sId != null && detail.setId == null) detail.setId = Number(sId);
                if (detail.challengeId != null && detail.setId != null) break;
              }
              // Pass 2: walk own string-keyed properties one level deep
              if (detail.challengeId == null || detail.setId == null) {
                for (const key of Object.keys(panelView)) {
                  const val = panelView[key];
                  if (!val || typeof val !== "object") continue;
                  if (detail.challengeId == null && val.challengeId != null) detail.challengeId = Number(val.challengeId);
                  if (detail.setId == null && val.setId != null) detail.setId = Number(val.setId);
                  if (detail.challengeId != null && detail.setId != null) break;
                }
              }
            } catch (extractErr) {
              console.warn("[R4F] Quick Builder ID extraction error:", extractErr);
            }
            // Pass 3: fallback to intercepted request context
            if (detail.challengeId == null && r4fSbcContext.lastChallengeId != null) {
              detail.challengeId = r4fSbcContext.lastChallengeId;
              detail._source = "interceptor";
            }
            if (detail.setId == null && r4fSbcContext.lastSetId != null) {
              detail.setId = r4fSbcContext.lastSetId;
            }
            console.log("[R4F] Quick Builder activated", detail);
            showNotification("Quick Builder: starting…", UINotificationType.POSITIVE);
            window.React4Football.runQuickSolve(detail);
          } catch (err) {
            console.warn("[R4F] Quick Builder click failed:", err);
          }
        });

        container.appendChild(btn);
      } catch (error) {
        console.warn("[R4F] Quick Builder button inject failed:", error);
      }
      return result;
    };
    PanelView.prototype.__r4fSbcQuickBuilderPatched = true;
    console.log("[R4F] UTSBCSquadDetailPanelView Quick Builder button hook installed");
  }

  /**
   * Listen for pipeline progress events dispatched by the React bundle.
   * Shows EA toast notifications for success and error outcomes.
   * Info/warn events are intentionally kept console-only to avoid notification spam.
   */
  function initQuickSolveNotificationListener() {
    window.addEventListener("r4f:quicksolve", function (e) {
      const { type, message } = e.detail || {};
      if (!message) return;
      if (type === "success") {
        showNotification(message, UINotificationType.POSITIVE);
      } else if (type === "error") {
        showNotification(message, getNegativeNotificationType());
      }
      // info/warn: console only (already logged by the pipeline)
    });
    console.log("[R4F] Quick Builder notification listener installed");
  }

  /**
   * Navigate to the SBC challenge squad view using EA's game engine APIs.
   * Mirrors what the Auto-SBC userscript does with UTSBCSquadSplitViewController:
   *   1. requestSets → find the set
   *   2. requestChallengesForSet → find the challenge
   *   3. loadChallenge → refresh server state
   *   4. push UTSBCSquadSplitViewController → show updated squad without a page reload
   */
  async function navigateToSbcChallenge(setId, challengeId) {
    try {
      const svc = getEAServices();
      if (!svc || !svc.SBC) {
        console.warn("[R4F] EA SBC service not available for UI refresh");
        return;
      }

      const ctx = {}; // unique observer context

      // Invalidate the SBC repository cache so that every subsequent call
      // fetches fresh data from EA's servers, including the squad we just
      // submitted via REST API (Paletools uses the same pattern in createSBCTab).
      if (svc.SBC.repository && typeof svc.SBC.repository.reset === "function") {
        svc.SBC.repository.reset();
        console.log("[R4F] Quick Builder: SBC repository cache cleared");
      }

      // Step 1: get all SBC sets (fresh from server after cache reset)
      const setsData = await new Promise(function (resolve, reject) {
        svc.SBC.requestSets().observe(ctx, function (obs, res) {
          obs.unobserve(ctx);
          if (res.success) resolve(res.data);
          else reject(new Error("requestSets failed: " + res.status));
        });
      });

      const sbcSet = (setsData.sets || []).find(function (s) {
        return s.id === setId;
      });
      if (!sbcSet) {
        console.warn("[R4F] SBC set not found for navigation:", setId);
        return;
      }

      // Step 2: get challenges (fresh from server — includes the squad we filled)
      const challengesData = await new Promise(function (resolve, reject) {
        svc.SBC.requestChallengesForSet(sbcSet).observe(ctx, function (obs, res) {
          obs.unobserve(ctx);
          if (res.success) resolve(res.data);
          else reject(new Error("requestChallengesForSet failed: " + res.status));
        });
      });

      const challenge = (challengesData.challenges || []).find(function (c) {
        return c.id === challengeId;
      });
      if (!challenge) {
        console.warn("[R4F] Challenge not found for navigation:", challengeId);
        return;
      }

      // Step 3: load challenge to populate challenge.squad from the server.
      // After our REST API PUT /squad, the server holds the filled squad.
      // loadChallenge calls POST /challenge/{id} which returns the current
      // squad state and stores it in challenge.squad (used by initWithSBCSet).
      await new Promise(function (resolve) {
        svc.SBC.loadChallenge(challenge).observe(ctx, function (obs, _res) {
          obs.unobserve(ctx);
          resolve();
        });
      });

      // Step 4: navigate to the SBC squad split view
      const getApp =
        (typeof getAppMain !== "undefined" ? getAppMain : null) ||
        (eaWindow && typeof eaWindow.getAppMain === "function" ? eaWindow.getAppMain : null);

      if (!getApp) {
        console.warn("[R4F] getAppMain not available — cannot navigate to SBC view");
        return;
      }

      const currentVC = getApp()
        ?.getRootViewController()
        ?.getPresentedViewController()
        ?.getCurrentViewController();

      if (!currentVC || !currentVC.rootController) {
        console.warn("[R4F] Navigation controller not available");
        return;
      }

      const SplitVC =
        (typeof UTSBCSquadSplitViewController !== "undefined" ? UTSBCSquadSplitViewController : null) ||
        eaWindow?.UTSBCSquadSplitViewController ||
        null;

      if (!SplitVC) {
        console.warn("[R4F] UTSBCSquadSplitViewController not available");
        return;
      }

      const showSBC = new SplitVC();
      showSBC.initWithSBCSet(sbcSet, challengeId);
      const nav = currentVC.rootController.getRootNavigationController();
      nav.popViewController();
      nav.pushViewController(showSBC);

      console.log("[R4F] Quick Builder: navigated to SBC challenge view", challengeId);
    } catch (err) {
      console.warn("[R4F] Quick Builder UI refresh error:", err);
    }
  }

  /**
   * Listen for the pipeline's navigate event (fired after squad submission)
   * and use EA's game APIs to update the current view without a page reload.
   */
  function initSbcUiRefreshListener() {
    window.addEventListener("r4f:quicksolve:navigate", function (e) {
      const { challengeId, setId } = e.detail || {};
      if (challengeId && setId) {
        navigateToSbcChallenge(setId, challengeId);
      }
    });
    console.log("[R4F] SBC UI refresh listener installed");
  }

  // ---- SBC context tracker ----
  // Populated by intercepting EA's own fetch/XHR calls so Quick Builder always
  // has a fallback challengeId + setId even when the view object won't expose them.

  const r4fSbcContext = {
    lastSetId: null,
    lastChallengeId: null,
    /** challengeId → setId, built from /sbs/setId/{id}/challenges responses */
    challengeSetMap: new Map(),
  };

  function trackSbcUrl(method, url) {
    const u = String(url || "");
    // GET /sbs/setId/{setId}/challenges
    const setMatch = u.match(/\/sbs\/setId\/(\d+)\/challenges/);
    if (setMatch) {
      r4fSbcContext.lastSetId = Number(setMatch[1]);
      console.log("[R4F] SBC context: setId =", r4fSbcContext.lastSetId);
    }
    // POST /sbs/challenge/{challengeId}  ← challenge start
    // GET  /sbs/challenge/{challengeId}/squad  ← already started
    const challengeMatch = u.match(/\/sbs\/challenge\/(\d+)/);
    if (challengeMatch) {
      const id = Number(challengeMatch[1]);
      const isSquad = /\/squad/.test(u);
      const isPost = method.toUpperCase() === "POST";
      if (isSquad || isPost) {
        r4fSbcContext.lastChallengeId = id;
        // Resolve setId from our map if we have it
        if (r4fSbcContext.challengeSetMap.has(id)) {
          r4fSbcContext.lastSetId = r4fSbcContext.challengeSetMap.get(id);
        }
        console.log("[R4F] SBC context: challengeId =", id, "setId =", r4fSbcContext.lastSetId);
      }
    }
  }

  function initSbcRequestInterceptor() {
    // --- fetch interceptor ---
    const _origFetch = window.fetch;
    window.fetch = function (input, init) {
      const url = typeof input === "string" ? input : input?.url ?? "";
      const method = init?.method ?? (typeof input === "object" ? input?.method : null) ?? "GET";
      trackSbcUrl(method, url);

      const promise = _origFetch.apply(this, arguments);

      // Parse /sbs/setId/{id}/challenges response to build challengeId→setId map
      const setMatch = url.match(/\/sbs\/setId\/(\d+)\/challenges/);
      if (setMatch) {
        const setId = Number(setMatch[1]);
        promise.then(function (resp) {
          resp.clone().json().then(function (data) {
            if (Array.isArray(data?.challenges)) {
              for (const c of data.challenges) {
                if (c.challengeId != null) {
                  r4fSbcContext.challengeSetMap.set(Number(c.challengeId), setId);
                }
              }
              console.log("[R4F] SBC context: mapped", data.challenges.length, "challenges → setId", setId);
            }
          }).catch(function () {});
        }).catch(function () {});
      }

      return promise;
    };

    // --- XHR interceptor (EA Web App may still use XHR internally) ---
    const _origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (method, url) {
      trackSbcUrl(method, url);

      // For challenges endpoint also parse the response body
      const setMatch = String(url || "").match(/\/sbs\/setId\/(\d+)\/challenges/);
      if (setMatch) {
        const setId = Number(setMatch[1]);
        this.addEventListener("load", function () {
          try {
            const data = JSON.parse(this.responseText);
            if (Array.isArray(data?.challenges)) {
              for (const c of data.challenges) {
                if (c.challengeId != null) {
                  r4fSbcContext.challengeSetMap.set(Number(c.challengeId), setId);
                }
              }
            }
          } catch (_) {}
        });
      }

      return _origOpen.apply(this, arguments);
    };

    console.log("[R4F] SBC request interceptor installed");
  }

  // Wait for EA's app to be fully loaded before applying overrides
  /**
   * Attach window.React4Football.getEaMetadata() once EA components are ready.
   * Uses factories.DataProvider + AssetLocationUtils from EA's web app namespace.
   */
  function initEaMetadataBridge() {
    if (!window.React4Football) {
      console.warn("[R4F] getEaMetadata: React4Football not available");
      return;
    }

    window.React4Football.getEaMetadata = function () {
      try {
        const leagues = (eaWindow.factories?.DataProvider?.getLeagueDP?.() || [])
          .filter((f) => f.id > 0)
          .map((m) => ({
            id: m.id,
            label: m.label,
            imageUrl: eaWindow.AssetLocationUtils?.getLeagueImageUri?.(m.id),
          }));

        const nations = (eaWindow.factories?.DataProvider?.getNationDP?.() || [])
          .filter((f) => f.id > 0)
          .map((m) => ({
            id: m.id,
            label: m.label,
            imageUrl: eaWindow.AssetLocationUtils?.getFlagImageUri?.(m.id),
          }));

        const teams = (eaWindow.factories?.DataProvider?.getTeamDP?.() || [])
          .filter((f) => f.id > 0 && !f.label?.includes("*"))
          .map((m) => {
            const leagueName = eaWindow.repositories?.TeamConfig?.leagues
              ?._collection?.[
                eaWindow.repositories?.TeamConfig?.teams?._collection?.[m.id]?.league
              ]?.name;
            return {
              id: m.id,
              label: leagueName ? `${m.label} (${leagueName})` : m.label,
              imageUrl: eaWindow.AssetLocationUtils?.getBadgeImageUri?.(m.id),
            };
          });

        const rarities = (eaWindow.factories?.DataProvider?.getItemRarityDP?.({
          itemSubTypes: [eaWindow.ItemSubType?.PLAYER],
          itemTypes: [eaWindow.ItemType?.PLAYER],
          quality: eaWindow.SearchLevel?.ANY,
          tradableOnly: false,
        }) || [])
          .filter((f) => f.id > 0 && !f.label?.includes("*"))
          .map((m) => ({
            id: m.id,
            label: m.label,
            imageUrl: eaWindow.AssetLocationUtils?.getShellUri?.(
              m.id,
              m.id < 4 ? eaWindow.ItemRatingTier?.GOLD : eaWindow.ItemRatingTier?.NONE
            ),
          }));

        console.log("[R4F] getEaMetadata:", {
          nations: nations.length,
          leagues: leagues.length,
          teams: teams.length,
          rarities: rarities.length,
        });

        return { nations, leagues, teams, rarities };
      } catch (err) {
        console.error("[R4F] getEaMetadata failed:", err);
        return { nations: [], leagues: [], teams: [], rarities: [] };
      }
    };

    console.log("[R4F] EA metadata bridge ready");
  }

  function waitForEAApp(callback, maxAttempts = 50) {
    let attempts = 0;
    const check = () => {
      if (startupState.failed) return;
      attempts++;
      const eaComponentsReady =
        typeof UTSlotActionPanelView !== "undefined"
        || typeof UTDefaultActionPanelView !== "undefined"
        || typeof eaWindow.UTSlotActionPanelView !== "undefined"
        || typeof eaWindow.UTDefaultActionPanelView !== "undefined";
      const sessionReady = isEaSessionReady();

      if (eaComponentsReady && sessionReady) {
        if (!runUserscriptPreflight({ requireEAComponents: true, requireSession: true })) return;
        callback();
      } else if (attempts < maxAttempts) {
        setTimeout(check, 500);
      } else {
        failStartup("EA Web App session not ready yet. Refresh and try again.");
      }
    };
    check();
  }

  // Add CSS for locked player visual indicator (using Paletools SVG icons)
  const lockStyles = `
    :root {
      --lock-icon-bk: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0xMiAyQzkuMjQzIDIgNyA0LjI0MyA3IDd2M0g2YTIgMiAwIDAgMC0yIDJ2OGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJ2LThhMiAyIDAgMCAwLTItMmgtMVY3YzAtMi43NTctMi4yNDMtNS01LTVNOSA3YzAtMS42NTQgMS4zNDYtMyAzLTNzMyAxLjM0NiAzIDN2M0g5em00IDEwLjcyM1YyMGgtMnYtMi4yNzdhMS45OTMgMS45OTMgMCAwIDEgLjU2Ny0zLjY3N0EyLjAwMSAyLjAwMSAwIDAgMSAxNCAxNmExLjk5IDEuOTkgMCAwIDEtMSAxLjcyMyIvPjwvc3ZnPg==);
      --lock-icon-red: brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(2500%) hue-rotate(319deg) brightness(100%) contrast(100%);
    }

    .item.locked::after,
    .ut-item-view.locked::after,
    .player.locked::after {
      content: "";
      position: absolute;
      top: 4px;
      right: 4px;
      width: 20px;
      height: 20px;
      background-image: var(--lock-icon-bk);
      background-size: contain;
      background-repeat: no-repeat;
      filter: var(--lock-icon-red);
      z-index: 10;
      pointer-events: none;
    }
  `;
  const lockStyleSheet = document.createElement("style");
  lockStyleSheet.innerText = lockStyles;
  document.head.appendChild(lockStyleSheet);

  const sbcQuickBuilderStyles = `
.SBCSquadPanel .sbc-button-container .r4f-sbc-quick-builder-btn {
  display: block;
  margin: 8px auto;
  width: calc(100% - 16px);
  min-height: 40px;
  padding: 0 12px;
  box-sizing: border-box;
  border: none;
  border-radius: 0;
  background-color: #2d2c36;
  color: #fcfcfc;
  font-family: UltimateTeam, sans-serif;
  font-size: 1em;
  cursor: default;
}
`;
  const sbcQuickBuilderStyleSheet = document.createElement("style");
  sbcQuickBuilderStyleSheet.innerText = sbcQuickBuilderStyles;
  document.head.appendChild(sbcQuickBuilderStyleSheet);

  // Intercept EA's fetch/XHR calls to track active SBC challenge + set IDs
  initSbcRequestInterceptor();

  // Install Quick Builder notification bridge immediately (no EA components needed)
  initQuickSolveNotificationListener();

  // Listen for post-submission navigate event to refresh the SBC squad view
  initSbcUiRefreshListener();

  // Initialize the player lock overrides and sell-all button
  waitForEAApp(() => {
    initPlayerLockOverrides();
    initSbcQuickBuilderButton();
    initEaMetadataBridge();
  });

  // =====================================================
  // Store API - Pack Opening
  // =====================================================

  const API_BASE = "https://utas.mob.v5.prd.futc-ext.gcp.ea.com/ut/game/fc26";

  function getSelectedPersona() {
    try {
      const servicesApi = getEAServices();
      if (servicesApi) {
        if (servicesApi.User?.getUser?.()?.selectedPersona) {
          return servicesApi.User.getUser().selectedPersona;
        }

        if (servicesApi.Authentication?.authData?.selectedPersona) {
          return servicesApi.Authentication.authData.selectedPersona;
        }
      }
    } catch {
      // Ignore and fall through.
    }

    return null;
  }

  function isEaSessionReady() {
    return Boolean(getSessionId() && getSelectedPersona());
  }

  function getSessionId() {
    // Try EA's services first
    const servicesApi = getEAServices();
    if (servicesApi?.Authentication) {
      const session = servicesApi.Authentication.getUtasSession();
      if (session && session.sid) return session.sid;
    }
    // Fallback to cached values (same as utils.js getUTSID)
    try {
      return (
        eaWindow.__fcxLastUTSID ||
        window.__fcxLastUTSID ||
        sessionStorage.getItem("fcx.lastUTSID") ||
        null
      );
    } catch {
      return null;
    }
  }

  function buildHeaders() {
    const sid = getSessionId();
    if (!sid) throw new Error("No session ID available. Are you logged in?");
    return {
      "Content-Type": "application/json",
      "X-UT-SID": sid,
    };
  }

  async function storeApiGet(endpoint) {
    const url = `${API_BASE}${endpoint}`;
    console.log("[StoreApi] GET", url);
    const res = await fetch(url, { headers: buildHeaders() });
    if (!res.ok) throw new Error(`API error: ${res.status} ${res.statusText}`);
    return res.json();
  }

  async function storeApiPost(endpoint, body = {}) {
    const url = `${API_BASE}${endpoint}`;
    console.log("[StoreApi] POST", url, body);
    const res = await fetch(url, {
      method: "POST",
      headers: buildHeaders(),
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`API error: ${res.status} ${res.statusText} - ${text}`);
    }
    return res.json();
  }

  async function storeApiPut(endpoint, body = {}) {
    const url = `${API_BASE}${endpoint}`;
    console.log("[StoreApi] PUT", url, body);
    const res = await fetch(url, {
      method: "PUT",
      headers: buildHeaders(),
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`API error: ${res.status} ${res.statusText} - ${text}`);
    }
    return res.json();
  }

  // Expose Store API for console testing
  window.storeApi = {
    // List owned packs
    listOwnedPacks: async () => {
      console.log("[StoreApi] Fetching store packs...");
      const response = await storeApiGet("/store/purchaseGroup/all?ppInfo=true&categoryInfo=true");
      
      const owned = response.purchase.filter(
        p => p.displayGroup?.value === "mypacks" && p.unopened === true && p.type === "cardpack"
      );
      
      const summary = {};
      for (const pack of owned) {
        if (!summary[pack.id]) {
          const info = pack.packContentInfo || {};
          let quality = "Mixed";
          if (info.bronzeQuantity > 0 && !info.silverQuantity && !info.goldQuantity) quality = "Bronze";
          else if (info.silverQuantity > 0 && !info.bronzeQuantity && !info.goldQuantity) quality = "Silver";
          else if (info.goldQuantity > 0 && !info.bronzeQuantity && !info.silverQuantity) quality = "Gold";
          
          summary[pack.id] = {
            packId: pack.id,
            name: info.rareQuantity > 0 
              ? `${quality} Players Premium (${info.itemQuantity} items, ${info.rareQuantity} rare)`
              : `${quality} Pack (${info.itemQuantity} items)`,
            count: 0,
          };
        }
        summary[pack.id].count++;
      }
      
      console.log("[StoreApi] Owned packs:");
      console.table(Object.values(summary));
      return { summary: Object.values(summary), owned, response };
    },

    /**
     * Open a pack
     * @param {number} packId - Pack ID (105 = Bronze Premium, 205 = Silver Premium)
     * @param {boolean} untradeable - Whether pack contents are untradeable (default: true for reward packs)
     */
    openPack: async (packId, untradeable = true) => {
      console.log(`[StoreApi] Opening pack ${packId}...`);
      try {
        const result = await storeApiPost("/purchased/items", { 
          packId, 
          untradeable, 
          usePreOrder: true 
        });
        
        const players = result.itemList.filter(i => i.itemType === "player");
        const duplicates = result.duplicateItemIdList || [];
        
        console.log(`[StoreApi] SUCCESS! Received ${result.numberItems} items:`);
        console.log(`  - ${players.length} players (ratings: ${players.map(p => p.rating).join(", ")})`);
        console.log(`  - ${duplicates.length} duplicates`);
        console.table(players.map(p => ({
          id: p.id,
          rating: p.rating,
          position: p.preferredPosition,
          rareflag: p.rareflag,
          isDuplicate: duplicates.some(d => d.itemId === p.id)
        })));
        
        return result;
      } catch (error) {
        console.error("[StoreApi] FAILED:", error.message);
        throw error;
      }
    },

    /**
     * Get unassigned items (pile: 6)
     */
    getUnassigned: async () => {
      console.log("[StoreApi] Getting unassigned items...");
      const result = await storeApiGet("/purchased/items");
      const items = result.itemData || [];
      const duplicates = result.duplicateItemIdList || [];
      
      console.log(`[StoreApi] ${items.length} unassigned items, ${duplicates.length} are duplicates`);
      console.table(items.map(p => ({
        id: p.id,
        rating: p.rating,
        position: p.preferredPosition,
        rareflag: p.rareflag,
        isDuplicate: duplicates.some(d => d.itemId === p.id)
      })));
      
      return result;
    },

    /**
     * Get SBC storage pile (pile: 10)
     */
    getStorage: async () => {
      console.log("[StoreApi] Getting SBC storage...");
      const result = await storeApiGet("/storagepile?skuMode=FUT");
      const items = result.itemData || [];
      
      console.log(`[StoreApi] ${items.length} items in SBC storage`);
      console.table(items.map(p => ({
        id: p.id,
        rating: p.rating,
        position: p.preferredPosition,
        rareflag: p.rareflag
      })));
      
      return result;
    },

    /**
     * Get credits/currencies
     */
    getCredits: async () => {
      const result = await storeApiGet("/user/credits");
      console.log(`[StoreApi] Coins: ${result.credits}, Unopened: ${result.unopenedPacks?.recoveredPacks || 0}`);
      return result;
    },

    /**
     * Send item to club (pile: "club")
     */
    sendToClub: async (itemId) => {
      console.log(`[StoreApi] Sending ${itemId} to club...`);
      return storeApiPut("/item", { itemData: [{ id: itemId, pile: "club" }] });
    },

    /**
     * Send item to SBC storage (pile: 10)
     */
    sendToStorage: async (itemId) => {
      console.log(`[StoreApi] Sending ${itemId} to SBC storage...`);
      // TODO: Need to discover correct endpoint/payload for SBC storage
      return storeApiPut("/item", { itemData: [{ id: itemId, pile: "storage" }] });
    },

    /**
     * Quick sell item
     */
    quickSell: async (itemId) => {
      console.log(`[StoreApi] Quick selling ${itemId}...`);
      // TODO: Discover correct endpoint
      return storeApiPost("/item/discard", { itemIds: [itemId] });
    },

    // Raw API access
    get: storeApiGet,
    post: storeApiPost,
    put: storeApiPut,
  };

  console.log("[R4F] Store API available at window.storeApi");
  console.log("[R4F] Commands: listOwnedPacks(), openPack(105), getUnassigned(), getStorage(), getCredits()");

  window.R4F = window.R4F || {};
  window.R4F.market = {};
  window.R4F.club = {};

  async function searchMarket({ marketType, definitionId, maxb }) {
    const endpoint = buildTransferMarketEndpoint({ marketType, definitionId, maxb });
    let response = await storeApiGet(endpoint);
    let auctions = response.auctionInfo || [];

    if (auctions.length === 0 && maxb === undefined) {
      await new Promise(r => setTimeout(r, 400));
      response = await storeApiGet(endpoint);
      auctions = response.auctionInfo || [];
    }

    const withBin = auctions
      .filter(a => a.buyNowPrice > 0 && (!a.tradeState || a.tradeState === "active"))
      .sort((a, b) => a.buyNowPrice - b.buyNowPrice);

    return {
      endpoint,
      auctions,
      withBin,
      minBin: withBin.length > 0 ? withBin[0].buyNowPrice : null,
    };
  }

  function buildTransferMarketEndpoint({ marketType, definitionId, maxb }) {
    const params = new URLSearchParams({
      num: "21",
      start: "0",
      type: marketType,
      definitionId: String(definitionId),
    });
    if (maxb !== undefined && maxb !== null) {
      params.set("maxb", String(maxb));
    }
    return `/transfermarket?${params.toString()}`;
  }

  function getSupportedMarketType(item) {
    if (!item?.itemType) return null;
    if (item.itemType === "player") return "player";
    if (item.itemType === "vanity") return "vanity";
    if (item.itemType === "training") return "training";
    return null;
  }

  function isAutoListableUnassignedItem(item) {
    return getSupportedMarketType(item) === "player";
  }

  function canLookupMarketPrice(item) {
    return Boolean(buildMarketLookup(item));
  }

  function buildMarketLookup(item) {
    const marketType = getSupportedMarketType(item);
    if (!marketType) return null;

    const definitionId = marketType === "player" ? item.assetId : item.resourceId;
    if (!definitionId || typeof definitionId !== "number") return null;

    return {
      marketType,
      definitionId,
      autoListable: marketType === "player",
    };
  }

  async function refineNonPlayerMinBin(lookup, startingMinBin) {
    let currentMinBin = startingMinBin;

    for (let attempt = 0; attempt < 3; attempt++) {
      const nextCeiling = currentMinBin - getFutIncrement(currentMinBin);
      if (nextCeiling <= 0) break;

      const refined = await searchMarket({
        marketType: lookup.marketType,
        definitionId: lookup.definitionId,
        maxb: nextCeiling,
      });

      if (!refined.minBin) break;
      currentMinBin = refined.minBin;
    }

    return currentMinBin;
  }

  window.R4F.market.getMinBinPrice = async function(assetId) {
    console.log("[R4F] getMinBinPrice called", { assetId });

    if (!assetId || typeof assetId !== "number") {
      return { ok: false, error: "INVALID_INPUT", message: "assetId must be a number" };
    }

    try {
      const result = await searchMarket({
        marketType: "player",
        definitionId: assetId,
      });

      return {
        ok: true,
        assetId,
        marketType: "player",
        definitionId: assetId,
        rawCount: result.auctions.length,
        minBin: result.minBin,
      };
    } catch (error) {
      return { ok: false, error: "API_ERROR", message: error.message };
    }
  };

  window.R4F.market.getMinPriceForItem = async function(item) {
    const lookup = buildMarketLookup(item);
    if (!lookup) {
      return {
        ok: false,
        itemId: item?.id ?? null,
        itemType: item?.itemType ?? null,
        autoListable: false,
        reason: "UNSUPPORTED_ITEM_TYPE",
        message: `No market lookup for item type '${item?.itemType ?? "unknown"}'`,
        minBin: null,
      };
    }

    try {
      const initial = await searchMarket(lookup);
      let minBin = initial.minBin;

      if (minBin && lookup.marketType !== "player") {
        minBin = await refineNonPlayerMinBin(lookup, minBin);
      }

      return {
        ok: true,
        itemId: item.id,
        itemType: item.itemType,
        autoListable: lookup.autoListable,
        marketType: lookup.marketType,
        definitionId: lookup.definitionId,
        rawCount: initial.auctions.length,
        minBin,
      };
    } catch (error) {
      return {
        ok: false,
        itemId: item?.id ?? null,
        itemType: item?.itemType ?? null,
        autoListable: Boolean(lookup.autoListable),
        marketType: lookup.marketType,
        definitionId: lookup.definitionId,
        reason: "API_ERROR",
        message: error.message,
        minBin: null,
      };
    }
  };

  console.log("[R4F] Test: await window.R4F.market.getMinBinPrice(239231)");

  // =====================================================
  // Sell All Unassigned - Min Market Price
  // =====================================================

  const SELL_DELAY_MS = 1500;
  const SELL_UI_REFRESH_DELAY_MS = 700;
  const SELL_ALL_BUTTON_ID = "r4f-sell-all-btn";
  const SELL_REFRESH_MODAL_ID = "r4f-refresh-modal-overlay";
  const sellAllState = {
    lastUnassignedView: null,
    cardByItemId: new Map(),
    ambiguousDefinitionIds: new Set(),
  };

  // FUT price increments: [maxPrice (exclusive), increment]
  const FUT_PRICE_TIERS = [
    [1000, 50],
    [10000, 100],
    [50000, 250],
    [100000, 500],
    [500000, 1000],
    [Infinity, 5000],
  ];

  function getFutIncrement(price) {
    for (const [max, increment] of FUT_PRICE_TIERS) {
      if (price < max) return increment;
    }
    return 5000;
  }

  function roundToFutIncrement(price) {
    const increment = getFutIncrement(price);
    return Math.floor(price / increment) * increment;
  }

  function calculateStartingBid(buyNowPrice) {
    const increment = getFutIncrement(buyNowPrice);
    const bid = buyNowPrice - increment;
    return bid > 0 ? roundToFutIncrement(bid) : roundToFutIncrement(buyNowPrice);
  }

  function buildDefinitionId(value) {
    return value === null || value === undefined ? null : String(value);
  }

  function getItemDefinitionId(item) {
    const lookup = buildMarketLookup(item);
    return item?.definitionId ?? lookup?.definitionId ?? item?.assetId ?? null;
  }

  function getItemCandidateDefinitionIds(item) {
    return Array.from(
      new Set(
        [item?.definitionId, buildMarketLookup(item)?.definitionId, item?.assetId, item?.resourceId]
          .filter(value => value !== null && value !== undefined)
          .map(value => String(value))
      )
    );
  }

  function getItemDescription(item) {
    const parts = [item.itemType];
    if (item.rating) parts.push(String(item.rating));
    if (item.preferredPosition) parts.push(item.preferredPosition);
    if (item.name) parts.push(`- ${item.name}`);
    return parts.join(" ").trim();
  }

  function resetSellAllCardBindings() {
    for (const card of sellAllState.cardByItemId.values()) {
      if (card?.dataset?.r4fItemId) {
        delete card.dataset.r4fItemId;
      }
    }
    sellAllState.cardByItemId.clear();
    sellAllState.ambiguousDefinitionIds.clear();
  }

  function getVisibleUnassignedCards() {
    return Array.from(document.querySelectorAll("li.listFUTItem")).filter(card =>
      card.querySelector("[data-definition-id]")
    );
  }

  function bindVisibleUnassignedItems(items) {
    resetSellAllCardBindings();

    const cardsByDefinitionId = new Map();
    for (const card of getVisibleUnassignedCards()) {
      const definitionId = buildDefinitionId(card.querySelector("[data-definition-id]")?.dataset?.definitionId);
      if (!definitionId) continue;
      if (!cardsByDefinitionId.has(definitionId)) {
        cardsByDefinitionId.set(definitionId, []);
      }
      cardsByDefinitionId.get(definitionId).push(card);
    }

    const itemsByDefinitionId = new Map();
    for (const item of items) {
      const definitionId = buildDefinitionId(getItemDefinitionId(item));
      if (!definitionId) continue;
      if (!itemsByDefinitionId.has(definitionId)) {
        itemsByDefinitionId.set(definitionId, []);
      }
      itemsByDefinitionId.get(definitionId).push(item);
    }

    for (const [definitionId, definitionItems] of itemsByDefinitionId.entries()) {
      const cards = cardsByDefinitionId.get(definitionId) || [];

      // Only bind exact one-to-one groups so duplicate assetIds never remove the wrong card.
      if (cards.length !== definitionItems.length) {
        sellAllState.ambiguousDefinitionIds.add(definitionId);
        console.log("[R4F] Ambiguous card binding skipped", {
          definitionId,
          itemCount: definitionItems.length,
          cardCount: cards.length,
        });
        continue;
      }

      definitionItems.forEach((item, index) => {
        const card = cards[index];
        if (!card) return;
        card.dataset.r4fItemId = String(item.id);
        sellAllState.cardByItemId.set(item.id, card);
      });
    }

    console.log("[R4F] Bound visible unassigned items", {
      tracked: sellAllState.cardByItemId.size,
      ambiguousDefinitions: Array.from(sellAllState.ambiguousDefinitionIds),
    });
  }

  function getBoundCardForItem(itemId) {
    return sellAllState.cardByItemId.get(itemId) || null;
  }

  function getCardTargetsForItem(item) {
    const boundCard = getBoundCardForItem(item.id);
    if (boundCard) return [boundCard];

    const seen = new Set();
    const targets = [];
    for (const definitionId of getItemCandidateDefinitionIds(item)) {
      const matches = Array.from(
        document.querySelectorAll(`li.listFUTItem [data-definition-id="${definitionId}"]`)
      )
        .map(itemEl => itemEl.closest("li.listFUTItem"))
        .filter(Boolean)
        .filter(li => {
          if (seen.has(li)) return false;
          seen.add(li);
          return true;
        });
      targets.push(...matches);
    }

    return targets;
  }

  async function getUnassignedTradableItems() {
    const result = await storeApiGet("/purchased/items");
    const items = result.itemData || [];
    return items.filter(item => !item.untradeable);
  }

  async function listItemAtPrice(itemId, buyNowPrice) {
    await storeApiPut("/item", { itemData: [{ id: itemId, pile: "trade" }] });
    await sleep(500);
    const startingBid = calculateStartingBid(buyNowPrice);
    return storeApiPost("/auctionhouse", {
      itemData: { id: itemId },
      startingBid,
      buyNowPrice,
      duration: 3600,
    });
  }

  function clearSellPriceLabels() {
    document.querySelectorAll(".r4f-sell-price-label").forEach(el => el.remove());
  }

  function updateCardPriceLabel(item, priceState) {
    const targets = getCardTargetsForItem(item);
    targets.forEach(li => {
      let label = li.querySelector(".r4f-sell-price-label");
      if (!label) {
        label = document.createElement("span");
        label.className = "r4f-sell-price-label";
        li.appendChild(label);
      }

      label.className = "r4f-sell-price-label";
      if (priceState === "searching") {
        label.classList.add("r4f-searching");
        label.textContent = "Searching...";
      } else if (priceState === null || priceState === undefined) {
        label.classList.add("r4f-no-data");
        label.textContent = "No listings";
      } else if (priceState === "unsupported") {
        label.classList.add("r4f-no-data");
        label.textContent = "Price lookup unavailable";
      } else if (priceState === "error") {
        label.classList.add("r4f-error");
        label.textContent = "Price unavailable";
      } else if (typeof priceState === "object" && priceState !== null) {
        if (priceState.minBin) {
          label.textContent = priceState.autoListable
            ? `Min BIN: ${Number(priceState.minBin).toLocaleString()}`
            : `Price only: ${Number(priceState.minBin).toLocaleString()}`;
        } else {
          label.classList.add("r4f-no-data");
          label.textContent = priceState.reason === "UNSUPPORTED_ITEM_TYPE"
            ? "Price lookup unavailable"
            : "No listings";
        }
      } else {
        label.textContent = `Min BIN: ${Number(priceState).toLocaleString()}`;
      }
    });
  }

  async function fetchAllMinPrices(items) {
    const priceMap = {};
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      updateCardPriceLabel(item, "searching");
      try {
        const result = canLookupMarketPrice(item)
          ? await window.R4F.market.getMinPriceForItem(item)
          : {
              ok: false,
              itemId: item.id,
              itemType: item.itemType,
              autoListable: false,
              reason: "UNSUPPORTED_ITEM_TYPE",
              minBin: null,
            };
        priceMap[item.id] = result;
        updateCardPriceLabel(item, result);
      } catch (e) {
        console.error("[R4F] Price fetch failed for", getItemDefinitionId(item), e.message);
        priceMap[item.id] = {
          ok: false,
          itemId: item.id,
          itemType: item.itemType,
          autoListable: isAutoListableUnassignedItem(item),
          reason: "API_ERROR",
          message: e.message,
          minBin: null,
        };
        updateCardPriceLabel(item, "error");
      }
      if (i < items.length - 1) await sleep(SELL_DELAY_MS);
    }
    return priceMap;
  }

  function closeSellModal() {
    const overlay = document.getElementById("r4f-sell-modal-overlay");
    if (overlay) overlay.remove();
  }

  function closeRefreshFallbackPrompt() {
    const overlay = document.getElementById(SELL_REFRESH_MODAL_ID);
    if (overlay) overlay.remove();
  }

  async function refetchUnassignedSnapshot() {
    const result = await storeApiGet("/purchased/items");
    const items = result.itemData || [];
    return {
      items,
      itemIds: new Set(items.map(item => item.id)),
      tradableItems: items.filter(item => !item.untradeable),
    };
  }

  async function attemptEAUnassignedRefresh() {
    const view = sellAllState.lastUnassignedView;
    const storeService = typeof services !== "undefined" ? services.Store : null;
    const candidates = [
      ["view.refresh", view?.refresh],
      ["view.requestData", view?.requestData],
      ["view.loadData", view?.loadData],
      ["view.reload", view?.reload],
      ["view._controller.refresh", view?._controller?.refresh],
      ["view._controller.requestData", view?._controller?.requestData],
      ["view._controller.loadData", view?._controller?.loadData],
      ["services.Store.refresh", storeService?.refresh],
      ["services.Store.requestData", storeService?.requestData],
    ].filter(([, fn]) => typeof fn === "function");

    console.log("[R4F] Unassigned refresh candidates", candidates.map(([name]) => name));

    for (const [name, fn] of candidates) {
      try {
        await fn.call(
          name.startsWith("view._controller")
            ? view?._controller
            : name.startsWith("view.")
              ? view
              : storeService
        );
        await sleep(SELL_UI_REFRESH_DELAY_MS);
        return { ok: true, method: name };
      } catch (error) {
        console.warn("[R4F] Unassigned refresh candidate failed", name, error.message);
      }
    }

    return { ok: false, method: null };
  }

  function applyLocalUnassignedSync(listedItemIds, freshUnassignedIds) {
    const removedItemIds = [];
    const ambiguousItemIds = [];
    const stillPresentItemIds = [];

    for (const itemId of listedItemIds) {
      if (freshUnassignedIds.has(itemId)) {
        stillPresentItemIds.push(itemId);
        continue;
      }

      const card = getBoundCardForItem(itemId);
      if (!card) {
        ambiguousItemIds.push(itemId);
        continue;
      }

      if (card.isConnected) {
        card.remove();
      }
      removedItemIds.push(itemId);
      sellAllState.cardByItemId.delete(itemId);
    }

    console.log("[R4F] Local unassigned sync", {
      removedItemIds,
      ambiguousItemIds,
      stillPresentItemIds,
    });

    return { removedItemIds, ambiguousItemIds, stillPresentItemIds };
  }

  function verifyUnassignedDomSync(listedItemIds, freshUnassignedIds) {
    const stillVisibleItemIds = [];
    const unresolvedItemIds = [];
    const stillInSnapshotItemIds = [];

    for (const itemId of listedItemIds) {
      if (freshUnassignedIds.has(itemId)) {
        stillInSnapshotItemIds.push(itemId);
      }

      const card = getBoundCardForItem(itemId);
      if (!card) {
        unresolvedItemIds.push(itemId);
        continue;
      }

      if (card.isConnected) {
        stillVisibleItemIds.push(itemId);
      }
    }

    return {
      ok: stillVisibleItemIds.length === 0 && unresolvedItemIds.length === 0 && stillInSnapshotItemIds.length === 0,
      stillVisibleItemIds,
      unresolvedItemIds,
      stillInSnapshotItemIds,
    };
  }

  function showRefreshFallbackPrompt(context) {
    closeRefreshFallbackPrompt();

    const overlay = document.createElement("div");
    overlay.id = SELL_REFRESH_MODAL_ID;
    overlay.className = "r4f-overlay";

    const modal = document.createElement("div");
    modal.className = "r4f-modal";

    const header = document.createElement("div");
    header.className = "r4f-modal-header";
    header.innerHTML = `<h3 style="margin:0;color:#fff;font-size:16px;">Store View Needs Refresh</h3>`;

    const content = document.createElement("div");
    content.className = "r4f-modal-content";
    content.innerHTML =
      `<div class="r4f-modal-summary">` +
      `Items were listed successfully, but the EA unassigned view is still stale.<br><br>` +
      `Listed: <span>${context.listedCount}</span> &nbsp;|&nbsp; ` +
      `Still visible: <span>${context.stillVisibleCount}</span> &nbsp;|&nbsp; ` +
      `Unresolved bindings: <span>${context.unresolvedCount}</span>` +
      `</div>` +
      `<div style="padding:0 4px;color:#ccc;font-size:13px;">` +
      `Try <strong>Refresh Store View</strong> first. If EA still does not update the unassigned pile, use <strong>Reload Page</strong> as the final fallback.` +
      `</div>`;

    const footer = document.createElement("div");
    footer.className = "r4f-modal-footer";

    const refreshBtn = document.createElement("button");
    refreshBtn.className = "r4f-btn-confirm";
    refreshBtn.textContent = "Refresh Store View";
    refreshBtn.addEventListener("click", async () => {
      refreshBtn.disabled = true;
      try {
        const snapshot = await refetchUnassignedSnapshot();
        const refreshResult = await attemptEAUnassignedRefresh();
        const verification = verifyUnassignedDomSync(context.listedItemIds, snapshot.itemIds);
        if (verification.ok) {
          closeRefreshFallbackPrompt();
          showNotification("Store view refreshed.", UINotificationType.POSITIVE);
          return;
        }

        showNotification(
          refreshResult.ok
            ? "Store refresh attempted, but stale cards are still visible."
            : "No safe store refresh hook was available. Reload may still be required.",
          UINotificationType.NEGATIVE
        );
      } catch (error) {
        showNotification("Refresh attempt failed: " + error.message, UINotificationType.NEGATIVE);
      } finally {
        refreshBtn.disabled = false;
      }
    });

    const reloadBtn = document.createElement("button");
    reloadBtn.className = "r4f-btn-cancel";
    reloadBtn.textContent = "Reload Page";
    reloadBtn.addEventListener("click", () => window.location.reload());

    footer.appendChild(refreshBtn);
    footer.appendChild(reloadBtn);
    modal.appendChild(header);
    modal.appendChild(content);
    modal.appendChild(footer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", e => {
      if (e.target === overlay) {
        closeRefreshFallbackPrompt();
      }
    });
  }

  async function refreshUnassignedAfterSell(result) {
    const { listedItemIds } = result;

    if (!listedItemIds.length) {
      return { ok: true, mode: "none" };
    }

    let snapshot;
    try {
      snapshot = await refetchUnassignedSnapshot();
    } catch (error) {
      console.error("[R4F] Failed to refetch unassigned snapshot:", error.message);
      showRefreshFallbackPrompt({
        listedCount: listedItemIds.length,
        stillVisibleCount: listedItemIds.length,
        unresolvedCount: listedItemIds.length,
        listedItemIds,
      });
      return { ok: false, mode: "snapshot_failed", error };
    }

    const refreshAttempt = await attemptEAUnassignedRefresh();
    if (refreshAttempt.ok) {
      const postRefreshVerification = verifyUnassignedDomSync(listedItemIds, snapshot.itemIds);
      if (postRefreshVerification.ok) {
        return { ok: true, mode: "ea_refresh", refreshAttempt, verification: postRefreshVerification };
      }
    }

    const localSyncResult = applyLocalUnassignedSync(listedItemIds, snapshot.itemIds);
    const finalVerification = verifyUnassignedDomSync(listedItemIds, snapshot.itemIds);

    if (finalVerification.ok) {
      return { ok: true, mode: "local_sync", refreshAttempt, localSyncResult, verification: finalVerification };
    }

    showRefreshFallbackPrompt({
      listedCount: listedItemIds.length,
      stillVisibleCount: finalVerification.stillVisibleItemIds.length,
      unresolvedCount: finalVerification.unresolvedItemIds.length,
      listedItemIds,
    });

    return {
      ok: false,
      mode: "fallback_prompt",
      refreshAttempt,
      localSyncResult,
      verification: finalVerification,
    };
  }

  async function executeSellAll(items, priceMap) {
    closeSellModal();
    let listed = 0, skipped = 0, failed = 0;
    const listedItemIds = [];
    const skippedItemIds = [];
    const failedItemIds = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const priceResult = priceMap[item.id];
      const binPrice = priceResult?.minBin ?? null;
      if (!priceResult?.autoListable || !binPrice) {
        skipped++;
        skippedItemIds.push(item.id);
        continue;
      }
      try {
        await listItemAtPrice(item.id, binPrice);
        listed++;
        listedItemIds.push(item.id);
        console.log(`[R4F] Listed item ${item.id} (def ${item.definitionId}) for ${binPrice}`);
      } catch (e) {
        console.error(`[R4F] Failed to list item ${item.id}:`, e.message);
        failed++;
        failedItemIds.push(item.id);
      }
      if (i < items.length - 1) await sleep(SELL_DELAY_MS);
    }

    clearSellPriceLabels();
    const refreshResult = await refreshUnassignedAfterSell({
      listedItemIds,
      skippedItemIds,
      failedItemIds,
    });

    const pricedOnly = skippedItemIds.filter(itemId => priceMap[itemId]?.minBin && !priceMap[itemId]?.autoListable).length;
    const noData = skipped - pricedOnly;
    const msg = `Sell All done: ${listed} listed, ${pricedOnly} priced-only, ${noData} skipped, ${failed} failed`;
    showNotification(msg, listed > 0 ? UINotificationType.POSITIVE : UINotificationType.NEGATIVE);
    if (!refreshResult.ok && listedItemIds.length > 0) {
      showNotification("Items were listed, but the unassigned view may need refresh.", UINotificationType.NEGATIVE);
    }
    console.log("[R4F]", msg);
    console.log("[R4F] Sell refresh result", refreshResult);
  }

  function showSellConfirmationModal(items, priceMap) {
    closeSellModal();

    const autoListable = items.filter(item => {
      const result = priceMap[item.id];
      return Boolean(result?.autoListable && result?.minBin);
    });
    const pricedOnly = items.filter(item => {
      const result = priceMap[item.id];
      return Boolean(!result?.autoListable && result?.minBin);
    });
    const noPrice = items.filter(item => {
      const result = priceMap[item.id];
      return !result?.minBin;
    });
    const totalCoins = autoListable.reduce((sum, item) => sum + (priceMap[item.id]?.minBin || 0), 0);

    const overlay = document.createElement("div");
    overlay.id = "r4f-sell-modal-overlay";
    overlay.className = "r4f-overlay";

    const modal = document.createElement("div");
    modal.className = "r4f-modal";

    const header = document.createElement("div");
    header.className = "r4f-modal-header";
    header.innerHTML = `<h3 style="margin:0;color:#fff;font-size:16px;">Confirm: Sell All Unassigned</h3>`;

    const content = document.createElement("div");
    content.className = "r4f-modal-content";

    const summary = document.createElement("div");
    summary.className = "r4f-modal-summary";
    summary.innerHTML =
      `<span>${autoListable.length}</span> player(s) will be listed &nbsp;|&nbsp; ` +
      `<span>${pricedOnly.length}</span> priced only &nbsp;|&nbsp; ` +
      `<span>${noPrice.length}</span> skipped (no reliable market data) &nbsp;|&nbsp; ` +
      `Est. return: <span>${totalCoins.toLocaleString()}</span> coins`;
    content.appendChild(summary);

    autoListable.forEach(item => {
      const row = document.createElement("div");
      row.className = "r4f-modal-item-row";
      const price = priceMap[item.id].minBin;
      const startBid = calculateStartingBid(price);
      row.innerHTML =
        `<span class="r4f-modal-item-name">${getItemDescription(item)} (id:${item.id})</span>` +
        `<span class="r4f-modal-item-price">Start: ${startBid.toLocaleString()} &nbsp; BIN: ${price.toLocaleString()}</span>`;
      content.appendChild(row);
    });

    if (pricedOnly.length > 0) {
      const pricedHeader = document.createElement("div");
      pricedHeader.style.cssText = "padding:8px 4px 4px;font-size:12px;color:#888;border-top:1px solid #2a2a2a;margin-top:6px;";
      pricedHeader.textContent = "Priced only (not auto-listed):";
      content.appendChild(pricedHeader);
      pricedOnly.forEach(item => {
        const row = document.createElement("div");
        row.className = "r4f-modal-item-row";
        const price = priceMap[item.id].minBin;
        row.innerHTML =
          `<span class="r4f-modal-item-name">${getItemDescription(item)} (id:${item.id})</span>` +
          `<span class="r4f-modal-item-skip">Price only: ${price.toLocaleString()}</span>`;
        content.appendChild(row);
      });
    }

    if (noPrice.length > 0) {
      const skipHeader = document.createElement("div");
      skipHeader.style.cssText = "padding:8px 4px 4px;font-size:12px;color:#888;border-top:1px solid #2a2a2a;margin-top:6px;";
      skipHeader.textContent = "Skipped (no reliable market data):";
      content.appendChild(skipHeader);
      noPrice.forEach(item => {
        const row = document.createElement("div");
        row.className = "r4f-modal-item-row";
        const reason = priceMap[item.id]?.reason === "UNSUPPORTED_ITEM_TYPE"
          ? "Price lookup unavailable"
          : "No listings found";
        row.innerHTML =
          `<span class="r4f-modal-item-name">${getItemDescription(item)}</span>` +
          `<span class="r4f-modal-item-skip">${reason}</span>`;
        content.appendChild(row);
      });
    }

    const footer = document.createElement("div");
    footer.className = "r4f-modal-footer";

    const confirmBtn = document.createElement("button");
    confirmBtn.className = "r4f-btn-confirm";
    confirmBtn.textContent = `Confirm Sell All (${autoListable.length})`;
    confirmBtn.disabled = autoListable.length === 0;
    confirmBtn.addEventListener("click", () => executeSellAll(items, priceMap));

    const cancelBtn = document.createElement("button");
    cancelBtn.className = "r4f-btn-cancel";
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", () => {
      closeSellModal();
      clearSellPriceLabels();
    });

    footer.appendChild(confirmBtn);
    footer.appendChild(cancelBtn);
    modal.appendChild(header);
    modal.appendChild(content);
    modal.appendChild(footer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", e => {
      if (e.target === overlay) {
        closeSellModal();
        clearSellPriceLabels();
      }
    });
  }

  async function onSellAllClicked() {
    if (!runUserscriptPreflight({ requireSession: true })) return;
    showNotification("Fetching unassigned tradable items...", UINotificationType.POSITIVE);
    let items;
    try {
      items = await getUnassignedTradableItems();
    } catch (e) {
      showNotification("Failed to load unassigned items: " + e.message, UINotificationType.NEGATIVE);
      return;
    }

    if (items.length === 0) {
      showNotification("No tradable unassigned items found.", UINotificationType.NEGATIVE);
      return;
    }

    bindVisibleUnassignedItems(items);
    showNotification(`Found ${items.length} tradable item(s). Searching market prices...`, UINotificationType.POSITIVE);
    const priceMap = await fetchAllMinPrices(items);
    showSellConfirmationModal(items, priceMap);
  }

  function injectSellAllButton(containerEl) {
    if (!containerEl || document.getElementById(SELL_ALL_BUTTON_ID)) return;
    containerEl._r4fSellAllInjected = true;

    const btn = document.createElement("button");
    btn.id = SELL_ALL_BUTTON_ID;
    btn.className = "r4f-floating-btn";
    btn.textContent = "Sell All (Min Market Price)";
    btn.style.top = "90px";
    btn.addEventListener("click", onSellAllClicked);
    document.body.appendChild(btn);
    console.log("[R4F] Sell All button injected");
  }

  function initSellAllButton() {
    if (typeof UTUnassignedItemsPileView !== "undefined") {
      const OriginalRender = UTUnassignedItemsPileView.prototype.render;
      UTUnassignedItemsPileView.prototype.render = function (...args) {
        sellAllState.lastUnassignedView = this;
        const result = OriginalRender.apply(this, args);
        injectSellAllButton(this.__root || document.body);
        return result;
      };
      console.log("[R4F] UTUnassignedItemsPileView override applied");
    } else {
      // Fallback: MutationObserver watching for unassigned item cards
      let injected = false;
      const observer = new MutationObserver(() => {
        if (injected) return;
        const items = document.querySelectorAll("li.listFUTItem");
        if (items.length > 0) {
          injected = true;
          observer.disconnect();
          injectSellAllButton(document.body);
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
      console.log("[R4F] MutationObserver watching for unassigned items view");
    }
  }

  // Expose for console testing
  window.R4F.sellAll = {
    getUnassignedTradableItems,
    fetchAllMinPrices,
    listItemAtPrice,
    bindVisibleUnassignedItems,
    refetchUnassignedSnapshot,
    attemptEAUnassignedRefresh,
    refreshUnassignedAfterSell,
    onSellAllClicked,
    dryRun: async () => {
      const items = await getUnassignedTradableItems();
      console.log(`[R4F] DryRun: ${items.length} tradable items found`);
      bindVisibleUnassignedItems(items);
      const priceMap = await fetchAllMinPrices(items);
      console.log("[R4F] DryRun: price map:", priceMap);
      showSellConfirmationModal(items, priceMap);
      return { items, priceMap };
    },
  };

  console.log("[R4F] Sell All available at window.R4F.sellAll");
  console.log("[R4F] Test: await window.R4F.sellAll.dryRun()");

  // =====================================================
  // Pack Opening Automation
  // =====================================================

  const DELAY_MIN_MS = 1000;
  const DELAY_MAX_MS = 1500;

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Categorize an item based on rules
   * @returns {object} { destination: "club"|"trade"|"storage"|"stop", reason?: string }
   */
  function categorizeItem(item, isDuplicate) {
    const { itemType, untradeable } = item;

    if (itemType === "player") {
      if (!isDuplicate) {
        return { destination: "club" };
      } else if (untradeable) {
        return { destination: "storage" }; // Untradeable duplicate → SBC Storage
      } else {
        return { destination: "trade" }; // Tradeable duplicate → Transfer List
      }
    } else if (itemType === "manager") {
      if (!isDuplicate) {
        return { destination: "club" };
      } else {
        return { destination: "stop", reason: "Duplicate manager" };
      }
    } else {
      // Other items (balls, kits, stadiums, badges, etc.)
      if (!isDuplicate) {
        return { destination: "club" };
      } else {
        return { destination: "stop", reason: `Duplicate ${itemType}` };
      }
    }
  }

  /**
   * Process all items from an opened pack using BATCHED API calls
   * @returns {object} { processed: number, stopped: boolean, reason: string }
   */
  async function processPackItems(packResult) {
    const items = packResult.itemList || [];
    const duplicateIds = new Set((packResult.duplicateItemIdList || []).map(d => d.itemId));

    // Categorize all items first
    const toClub = [];
    const toTrade = [];
    const toStorage = [];
    let stopReason = null;

    for (const item of items) {
      const isDuplicate = duplicateIds.has(item.id);
      const { destination, reason } = categorizeItem(item, isDuplicate);
      const itemDesc = `${item.itemType} (${item.rating || '?'} ${item.preferredPosition || item.itemType})`;

      if (destination === "stop") {
        console.error(`  [STOP] ${reason}: ${itemDesc}`);
        stopReason = reason;
        break; // Stop categorizing, we'll process what we have so far
      } else if (destination === "club") {
        toClub.push({ id: item.id, pile: "club" });
        console.log(`  [→ Club] ${itemDesc}`);
      } else if (destination === "trade") {
        toTrade.push({ id: item.id, pile: "trade" });
        console.log(`  [→ Trade] ${itemDesc} (tradeable duplicate)`);
      } else if (destination === "storage") {
        toStorage.push({ id: item.id, pile: "storage" });
        console.log(`  [→ Storage] ${itemDesc} (untradeable duplicate)`);
      }
    }

    // Execute batched API calls
    let processed = 0;

    try {
      // Send all club items in one request
      if (toClub.length > 0) {
        console.log(`  Sending ${toClub.length} items to club...`);
        await storeApiPut("/item", { itemData: toClub });
        processed += toClub.length;
      }

      // Send all trade items in one request
      if (toTrade.length > 0) {
        console.log(`  Sending ${toTrade.length} items to transfer list...`);
        await storeApiPut("/item", { itemData: toTrade });
        processed += toTrade.length;
      }

      // Send all storage items in one request
      if (toStorage.length > 0) {
        console.log(`  Sending ${toStorage.length} items to SBC storage...`);
        await storeApiPut("/item", { itemData: toStorage });
        processed += toStorage.length;
      }

    } catch (error) {
      console.error(`  [ERROR] Batch operation failed:`, error.message);
      return { processed, stopped: true, reason: `API error: ${error.message}` };
    }

    if (stopReason) {
      return { processed, stopped: true, reason: stopReason };
    }

    return { processed, stopped: false };
  }

  /**
   * Main pack opening automation
   * @param {object} options
   * @param {number} options.packId - Pack ID to open (105 = Bronze, 205 = Silver)
   * @param {number} options.count - Number of packs to open (1-99, default 99 = all)
   * @param {boolean} options.dryRun - If true, only list packs without opening
   */
  async function openPacksAutomated(options = {}) {
    if (!runUserscriptPreflight({ requireSession: true })) {
      return { opened: 0, processed: 0, stopped: true, stopReason: startupState.reason };
    }

    const { packId, count = 99, dryRun = false } = options;

    console.log("═══════════════════════════════════════════════════════════");
    console.log("  Pack Opening Automation");
    console.log("═══════════════════════════════════════════════════════════");
    console.log(`  Pack ID: ${packId || 'auto (first available)'}`);
    console.log(`  Max packs: ${count}`);
    console.log(`  Delay: ${DELAY_MIN_MS}-${DELAY_MAX_MS}ms between packs`);
    console.log(`  Dry run: ${dryRun}`);
    console.log("═══════════════════════════════════════════════════════════");

    // Get available packs
    console.log("\n[1/3] Fetching available packs...");
    const storeResponse = await storeApiGet("/store/purchaseGroup/all?ppInfo=true&categoryInfo=true");
    const ownedPacks = storeResponse.purchase.filter(
      p => p.displayGroup?.value === "mypacks" && p.unopened === true && p.type === "cardpack"
    );

    if (ownedPacks.length === 0) {
      console.log("No packs available to open!");
      return { opened: 0, processed: 0, stopped: false };
    }

    // Filter by packId if specified
    let packsToOpen = packId 
      ? ownedPacks.filter(p => p.id === packId)
      : ownedPacks;

    // Limit count
    packsToOpen = packsToOpen.slice(0, count);

    // Group and display
    const packSummary = {};
    for (const pack of packsToOpen) {
      if (!packSummary[pack.id]) {
        const info = pack.packContentInfo || {};
        packSummary[pack.id] = { packId: pack.id, count: 0, items: info.itemQuantity || '?' };
      }
      packSummary[pack.id].count++;
    }
    console.log("\nPacks to open:");
    console.table(Object.values(packSummary));
    console.log(`Total: ${packsToOpen.length} packs\n`);

    if (dryRun) {
      console.log("[DRY RUN] Stopping here. Set dryRun: false to actually open packs.");
      return { opened: 0, processed: 0, stopped: false };
    }

    // Open packs
    console.log("[2/3] Opening packs...\n");
    let totalOpened = 0;
    let totalProcessed = 0;
    let stopped = false;
    let stopReason = "";

    for (let i = 0; i < packsToOpen.length; i++) {
      const pack = packsToOpen[i];
      console.log(`\n━━━ Pack ${i + 1}/${packsToOpen.length} (ID: ${pack.id}) ━━━`);

      try {
        // Open the pack
        const packResult = await storeApiPost("/purchased/items", {
          packId: pack.id,
          untradeable: true,
          usePreOrder: true,
        });

        totalOpened++;
        console.log(`Received ${packResult.numberItems || packResult.itemList?.length || 0} items`);

        // Process items
        const processResult = await processPackItems(packResult);
        totalProcessed += processResult.processed;

        if (processResult.stopped) {
          stopped = true;
          stopReason = processResult.reason;
          console.error(`\n⚠️ STOPPING: ${stopReason}`);
          break;
        }

        // Wait before next pack
        if (i < packsToOpen.length - 1) {
          const delayMs = randomBetween(DELAY_MIN_MS, DELAY_MAX_MS);
          console.log(`\n⏳ Waiting ${delayMs}ms before next pack...`);
          await sleep(delayMs);
        }

      } catch (error) {
        console.error(`\n❌ ERROR opening pack: ${error.message}`);
        stopped = true;
        stopReason = error.message;
        break;
      }
    }

    // Summary
    console.log("\n═══════════════════════════════════════════════════════════");
    console.log("  SUMMARY");
    console.log("═══════════════════════════════════════════════════════════");
    console.log(`  Packs opened: ${totalOpened}/${packsToOpen.length}`);
    console.log(`  Items processed: ${totalProcessed}`);
    console.log(`  Stopped early: ${stopped ? `Yes (${stopReason})` : 'No'}`);
    console.log("═══════════════════════════════════════════════════════════");

    return { opened: totalOpened, processed: totalProcessed, stopped, stopReason };
  }

  // Add to window.storeApi
  window.storeApi.openPacksAutomated = openPacksAutomated;

  // Convenience shortcuts
  window.storeApi.openAllBronze = (count = 99) => openPacksAutomated({ packId: 105, count });
  window.storeApi.openAllSilver = (count = 99) => openPacksAutomated({ packId: 205, count });
  window.storeApi.openAll = (count = 99) => openPacksAutomated({ count });
  window.storeApi.previewPacks = () => openPacksAutomated({ dryRun: true });

  console.log("[R4F] Pack automation: openAll(), openAllBronze(), openAllSilver(), previewPacks()");

})();
