$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=$(this.hash);if(n=n.length?n:$("[name="+this.hash.slice(1)+"]"),n.length)return $("html,body").animate({scrollTop:n.offset().top},1e3),!1}})}),jQuery(document).ready(function($){function n(n){var t=o();$(".cd-gallery").offset().top>$(window).scrollTop()&&"mobile"!=t?$("body,html").animate({scrollTop:$(".cd-gallery").offset().top},100,function(){e(n,!0)}):e(n,!0)}function e(n,e){if(e){var t=$(".cd-fold-content");t.load(n+" .cd-fold-content > *",function(n){setTimeout(function(){$("body").addClass("overflow-hidden"),$(".cd-folding-panel").addClass("is-open"),$(".cd-main").addClass("fold-is-open")},100)})}else{var i=o();$(".cd-folding-panel").removeClass("is-open"),$(".cd-main").removeClass("fold-is-open"),"mobile"==i||$(".no-csstransitions").length>0?$("body").removeClass("overflow-hidden"):$(".cd-main").find(".cd-item").eq(0).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){$("body").removeClass("overflow-hidden"),$(".cd-main").find(".cd-item").eq(0).off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend")})}}function o(){return window.getComputedStyle(document.querySelector(".cd-main"),"::before").getPropertyValue("content")}$(".cd-gallery a").on("click",function(e){e.preventDefault(),n($(this).attr("href"))}),$(".cd-folding-panel .cd-close").on("click",function(n){n.preventDefault(),e("",!1)}),$(".cd-gallery").on("click",function(n){$(n.target).is(".cd-gallery")&&$(".fold-is-open").length>0&&e("",!1)})}),document.addEventListener("DOMContentLoaded",function(n){function e(n){o.light.position.x=n.clientX,o.light.position.y=n.clientY,o.draw()}var o=new Shine(document.getElementById("shine"));window.addEventListener("mousemove",e,!1)});