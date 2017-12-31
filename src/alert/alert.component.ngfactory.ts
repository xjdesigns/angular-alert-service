/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from './alert.component';
import * as import3 from '../alert.service';
const styles_AlertComponent:any[] = ([] as any[]);
export const RenderType_AlertComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_AlertComponent,
  data: {}
}
);
function View_AlertComponent_3(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),12,'div',[[
        'class',
        'spx-toast'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
    ,{
      klass: [
        0,
        'klass'
      ]
      ,
      ngClass: [
        1,
        'ngClass'
      ]

    }
    ,(null as any)),
    import0.ɵpod([
      'is-success',
      'is-error'
    ]
    ),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[[
        'class',
        'spx-btn spx-btn--pr spx-btn--sm'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.primaryAction((<any>v.parent).context.index)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Action'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[[
        'class',
        'spx-btn spx-btn--pr spx-btn--sm'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.removeAlert((<any>v.parent).context.index)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Remove'])),
    (l()(),import0.ɵted((null as any),['\n      ']))
  ]
  ,(ck,v) => {
    const currVal_0:any = 'spx-toast';
    const currVal_1:any = ck(v,2,0,((<any>v.parent).context.$implicit.type === 'success'),((<any>v.parent).context.$implicit.type === 'error'));
    ck(v,1,0,currVal_0,currVal_1);
  },(ck,v) => {
    const currVal_2:any = (<any>v.parent).context.$implicit.text;
    ck(v,5,0,currVal_2);
  });
}
function View_AlertComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AlertComponent_3)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n    ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.message;
    ck(v,3,0,currVal_0);
  },(null as any));
}
function View_AlertComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'spx-toaster'
      ]
      ],[[
        2,
        'is-open',
        (null as any)
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AlertComponent_2)),
    import0.ɵdid(401408,(null as any),0,import1.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_1:any = co.message;
    ck(v,3,0,currVal_1);
  },(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.message;
    ck(v,0,0,currVal_0);
  });
}
export function View_AlertComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n  '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AlertComponent_1)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    var co:import2.AlertComponent = v.component;
    const currVal_0:any = co.message;
    ck(v,2,0,currVal_0);
  },(null as any));
}
function View_AlertComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'spx-alert',([] as any[]),(null as any),(null as any),(null as any),View_AlertComponent_0,RenderType_AlertComponent)),
    import0.ɵdid(57344,(null as any),0,import2.AlertComponent,[import3.SpxAlertService],(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const AlertComponentNgFactory:import0.ComponentFactory<import2.AlertComponent> = import0.ɵccf('spx-alert',import2.AlertComponent,View_AlertComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL21hY2Jvb2twcm8vUHJvamVjdHMvNnB4LWFsZXJ0LXNlcnZpY2UvNnB4LWFsZXJ0LXNlcnZpY2Uvc3JjL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9tYWNib29rcHJvL1Byb2plY3RzLzZweC1hbGVydC1zZXJ2aWNlLzZweC1hbGVydC1zZXJ2aWNlL3NyYy9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9tYWNib29rcHJvL1Byb2plY3RzLzZweC1hbGVydC1zZXJ2aWNlLzZweC1hbGVydC1zZXJ2aWNlL3NyYy9hbGVydC9hbGVydC5jb21wb25lbnQudHMuQWxlcnRDb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL21hY2Jvb2twcm8vUHJvamVjdHMvNnB4LWFsZXJ0LXNlcnZpY2UvNnB4LWFsZXJ0LXNlcnZpY2Uvc3JjL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cy5BbGVydENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICA8ZGl2XG4gICAgKm5nSWY9XCJtZXNzYWdlXCJcbiAgICBjbGFzcz1cInNweC10b2FzdGVyXCJcbiAgICBbY2xhc3MuaXMtb3Blbl09XCJtZXNzYWdlXCJcbiAgPlxuICAgIDxkaXYgKm5nRm9yPVwibGV0IG0gb2YgbWVzc2FnZTsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInNweC10b2FzdFwiXG4gICAgICAgICpuZ0lmPVwibWVzc2FnZVwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsnaXMtc3VjY2Vzcyc6IG0udHlwZSA9PT0gJ3N1Y2Nlc3MnLCAnaXMtZXJyb3InOiBtLnR5cGUgPT09ICdlcnJvcid9XCJcbiAgICAgID5cbiAgICAgICAgPHA+e3sgbS50ZXh0IH19PC9wPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3B4LWJ0biBzcHgtYnRuLS1wciBzcHgtYnRuLS1zbVwiIChjbGljayk9XCJwcmltYXJ5QWN0aW9uKGkpXCI+QWN0aW9uPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzcHgtYnRuIHNweC1idG4tLXByIHNweC1idG4tLXNtXCIgKGNsaWNrKT1cInJlbW92ZUFsZXJ0KGkpXCI+UmVtb3ZlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gICIsIjxzcHgtYWxlcnQ+PC9zcHgtYWxlcnQ+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DT007UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7Ozs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFHRTtNQUFBO01BQUE7SUFBQTtJQUFBO0lBQ0Q7SUFDQztJQUFHO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBZ0I7TUFDbkI7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFnRDtRQUFBO1FBQUE7TUFBQTtNQUFoRDtJQUFBO0lBQTJFO0lBQWU7TUFDMUY7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFnRDtRQUFBO1FBQUE7TUFBQTtNQUFoRDtJQUFBO0lBQXlFO0lBQWU7OztJQU54RjtJQUVBO0lBSEYsU0FDRSxVQUVBLFNBSEY7O0lBS0s7SUFBQTs7Ozs7SUFOUDtJQUE4QztJQUM1QztnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBUU07Ozs7SUFOSjtJQUZGLFNBRUUsU0FGRjs7Ozs7TUFOSjtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUlDO0lBQ0M7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFVTTs7OztJQVZEO0lBQUwsU0FBSyxTQUFMOzs7SUFGQTtJQUhGLFNBR0UsU0FIRjs7Ozs7SUFERjtJQUNFO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFnQk07Ozs7SUFmSjtJQURGLFNBQ0UsU0FERjs7Ozs7SUNERjtnQkFBQTs7O0lBQUE7OzsifQ==
