!function(){var t={set:function(t,o,a){if(!this.isSupported)return void a(!1);try{localStorage["patchjs-"+t]=JSON.stringify(o),a(!0)}catch(t){a(!1)}},get:function(t,o){if(!this.isSupported)return void o(null);o(JSON.parse(localStorage["patchjs-"+t]||null))},remove:function(t){this.isSupported&&localStorage.removeItem("patchjs-"+t)}};t.isSupported="localStorage"in window,localStorage.clear=function(){for(var t in localStorage)/^patchjs-/.test(t)||localStorage.removeItem(t)},window.patchjs=window.patchjs||{},window.patchjs.cache=t}();