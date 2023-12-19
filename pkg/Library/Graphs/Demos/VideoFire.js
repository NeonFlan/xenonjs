/**
 * @license
 * Copyright 2023 Atom54 LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

const graph = {
  "meta":{
    "id":"VideoFire"
  },
  "FragmentShader":{
    "type":"$library/Shader/Atoms/FragmentShader",
    "container":"Container",
    "state":{
      "shader":"\nvec3 v(vec3 v){vec4 y=vec4(0,-1./3.,2./3.,-1),i=mix(vec4(v.zy,y.wz),vec4(v.yz,y),step(v.z,v.y)),s=mix(vec4(i.xyw,v.x),vec4(v.x,i.yzx),step(i.x,v.x));float c=s.x-min(s.w,s.y);return vec3(abs(s.z+(s.w-s.y)/(6.*c+1e-10)),c/(s.x+1e-10),s);}vec3 x(vec3 v){vec4 i=vec4(1,2./3.,1./3.,3);return v.z*mix(i.xxx,clamp(abs(fract(v.xxx+i.xyz)*6.-i.www)-i.xxx,0.,1.),v.y);}float s(vec2 v){return fract(sin(cos(dot(v,vec2(12.9898,12.1414))))*83758.5453);}float n(vec2 v){const vec2 i=vec2(0,1);vec2 y=floor(v),c=smoothstep(vec2(0),vec2(1),fract(v));return mix(mix(s(y),s(y+i.yx),c.x),mix(s(y+i.xy),s(y+i.yy),c.x),c.y);}float i(vec2 v){float y=0.,c=1.;for(int i=0;i<5;i++)y+=n(v)*c,v+=v*1.7,c*=.47;return y;}void mainImage(out vec4 y,vec2 s){vec2 c=vec2(1.2,.1);float e=1.327+sin(iTime*2.)/2.4,m=3.5-sin(iTime*.4)/1.89;vec2 f=s.xy*m/iResolution.xx;f.x-=iTime/1.1;float r=i(f-iTime*.01+sin(iTime)/10.),w=i(f-iTime*.002+.1*cos(iTime)/5.),C=i(f-iTime*.44-5.*cos(iTime)/7.)-6.,z=i(f-iTime*.9-10.*cos(iTime)/30.)-4.,I=i(f-iTime*2.-20.*sin(iTime)/20.)+2.;r=(r+w-.4*C-2.*z+.6*I)/3.8;vec2 n=vec2(i(f+r/2.+iTime*c.x-f.x-f.y),i(f+r-iTime*c.y));vec3 a=mix(vec3(.5,0,.1),vec3(.9,.1,0),i(f+n))+mix(vec3(.2,.1,.7),vec3(1,.9,.1),n.x)-mix(vec3(.1),vec3(.9),n.y),d=vec3(a*cos(e*s.y/iResolution.y));d+=.05;d.x*=.8;vec3 o=v(d);o.y*=o.z*1.1;o.z*=o.y*1.13;o.y=(2.2-o.z*.9)*1.2;d=x(o);vec4 t=texture(iChannel0,s.xy/iResolution.xy);y=t*.5+vec4(d.xyz,1)*.5;}\n",
      "style":{
        "order":1
      }
    },
    "connections":{
      "image":[
        "Graph17$FrameCapture$frame"
      ]
    }
  },
  "SelfieSegmentation":{
    "type":"$library/Mediapipe/Atoms/SelfieSegmentation",
    "container":"Panel#Container",
    "state":{
      "style":{
        "borderWidth":"0",
        "borderStyle":"solid",
        "order":2
      }
    },
    "connections":{
      "image":[
        "Graph17$FrameCapture$frame"
      ]
    }
  },
  "ImageComposite":{
    "type":"$library/Media/Atoms/ImageComposite",
    "container":"Container",
    "state":{
      "opA":"source-over",
      "opB":"destination-out",
      "opC":"destination-over",
      "style":{
        "order":3
      },
      "imageB":{
        "canvas":"1472-7304-6693-3632",
        "version":0.546121050476396
      }
    },
    "connections":{
      "imageA":[
        "FragmentShader$outputImage"
      ],
      "imageB":[
        "SelfieSegmentation$mask"
      ],
      "imageC":[
        "Graph17$FrameCapture$frame"
      ]
    }
  },
  "Image2":{
    "type":"$library/Media/Atoms/Image",
    "container":"Panel#Container",
    "state":{
      "image":{
        "alt":"no image",
        "selfie":true
      },
      "style":{
        "borderWidth":"0",
        "borderStyle":"solid",
        "flex":"1",
        "order":"2",
        "borderRadius":"var(--radius-blob-2)",
        "width":"auto",
        "height":"auto",
        "backgroundColor":"var(--xcolor-one)"
      }
    },
    "connections":{
      "image":[
        "ImageComposite$output"
      ]
    }
  },
  "Panel":{
    "type":"$library/Layout/Atoms/Panel",
    "container":"Container",
    "state":{
      "layout":"column",
      "center":true,
      "style":{
        "borderWidth":"var(--border-size-5)",
        "borderStyle":"solid",
        "flex":"1",
        "order":"2",
        "borderRadius":"var(--radius-blob-1)",
        "padding":"var(--size-5)",
        "color":"violet",
        "backgroundColor":"var(--xcolor-one)"
      }
    }
  },
  "Graph17":{
    "type":"$library/Graph/Atoms/Graph",
    "container":"Panel#Container",
    "state":{
      "graphId":"FirstProject/DeviceVideo",
      "style":{
        "order":0,
        "flex":"0 0 auto",
        "align-items":"center"
      }
    }
  }
};
