$.fn.setCursorPosition=function(a){return 0===this.length?this:$(this).setSelection(a,a)},$.fn.setSelection=function(a,b){var c;if(0==this.length)return this;if(c=this[0],c.createTextRange){var d=c.createTextRange();d.collapse(!0),d.moveEnd("character",a),d.moveStart("character",b),d.select()}else c.setSelectionRange&&(c.focus(),c.setSelectionRange(a,b));return this},$.fn.diFocus=function(a){return a&&"number"==typeof a?this.setCursorPosition(a):this.setCursorPosition(this.val().length),this},$.getCursorPosition=function(a){var b,c=-1;return a.setSelectionRange?c=a.selectionStart:(b=document.selection.createRange(),b.moveStart("character",-a.value.length),c=b.text.length),c},$.isInArray=function(a,b){for(var c=!1,d=0;d<b.length;d++)a===b[d]&&(c=!0);return c},$.isObjectEmpty=function(a){var b=!0;for(var c in a)a.hasOwnProperty(c)&&(b=!1);return b},$.getTargetElement=function(a,b){for(var c,d=0,e=b.length;e>d;d++)if("COMPONENT"===b[d].clzType&&b[d].compId===a){c=b[d];break}return c},$.getTargetElementClzType=function(a,b){return $.getTargetElement(a,b).clzType},$.hasRelation=function(a,b){var c=-1;if(b.interactions)a:for(var d=0,e=b.interactions.length;e>d;d++){var f=b.interactions[d];if(f.event){if(b.interactions[d].event.rid===a){c=d;break}}else if(f.events)for(var g=0,h=f.events.length;h>g;g++)if(f.events[g].rid===a){c=d;break a}}return c},$.getEntityInteractionsId=function(a){var b=[];if(a.interactions)for(var c=0,d=a.interactions.length;d>c;c++){var e=a.interactions[c];if(e.event)b.push(a.interactions[c].event.rid);else if(e.events)for(var f=0,g=e.events.length;g>f;f++)b.push(e.events[f].rid)}return $.uniqueArray(b)},$.uniqueArray=function(a){for(var b=[],c={},d=0;d<a.length;d++)c[a[d]]||(c[a[d]]=!0,b.push(a[d]));return b},$.isHaveEntity=function(a,b){for(var c=!1,d=0;d<b.length;d++)b[d].clzKey===a&&(c=!0);return c};