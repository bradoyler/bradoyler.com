var _utils=_utils||{};!function(){var t=document.getElementsByTagName("script")[0],e=t.parentNode,n=/ded|co/,i="onload",r="onreadystatechange",s="readyState",o=function(o,a){var u=document.createElement("script");u[i]=u[r]=function(){this[s]&&!n.test(this[s])||(u[i]=u[r]=null,a&&a(u),u=null)},u.async=!0,u.src=o,e.insertBefore(u,t)};_utils.sssl=function(t,e){if("string"==typeof t)return void o(t,e);var n=t.shift();o(n,function(){t.length?_site.sssl(t,e):e&&e()})}}(),_utils.isMobile=function(){var t=!1;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(t=!0),t}(),_utils.isiPhone=function(){return navigator.userAgent.match(/iPhone/i)}();