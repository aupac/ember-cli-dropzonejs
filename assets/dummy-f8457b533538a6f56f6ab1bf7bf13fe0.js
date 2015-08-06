define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,r,i){"use strict";var o;t["default"].MODEL_FACTORY_INJECTIONS=!0,o=t["default"].Application.extend({modulePrefix:i["default"].modulePrefix,podModulePrefix:i["default"].podModulePrefix,Resolver:n["default"]}),r["default"](o,i["default"].modulePrefix),e["default"]=o}),define("dummy/components/drop-zone/component",["exports","ember-cli-dropzonejs/components/drop-zone/component"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";function r(e,r){if(n["default"].exportApplicationGlobal!==!1){var i,o=n["default"].exportApplicationGlobal;i="string"==typeof o?o:t["default"].String.classify(n["default"].modulePrefix),window[i]||(window[i]=r,r.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[i]}}))}}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("dummy/instance-initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,n){"use strict";var r=n["default"].String.classify,i=!1;e["default"]={name:"App Version",initialize:function(e){if(!i){var o=r(e.toString());n["default"].libraries.register(o,t["default"].APP.version),i=!0}}}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";var r=t["default"].Router.extend({location:n["default"].locationType});r.map(function(){}),e["default"]=r}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:2,column:49}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h5"),r=e.createTextNode("This is only a demo and it will not upload any files. There is no specified url.");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,null),r},statements:[["inline","drop-zone",[],["url","/example","addRemoveLinks",!0],["loc",[null,[2,0],[2,49]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",r=e["default"].$('meta[name="'+n+'"]').attr("content"),i=JSON.parse(unescape(r));return{"default":i}}catch(o){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-cli-dropzonejs",version:"0.2.0+c609fa54"});