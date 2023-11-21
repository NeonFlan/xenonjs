/**
 * @license
 * Copyright 2023 Atom54 LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

const graph = {
  "meta":{
    "id":"VideoRain"
  },
  "DeviceUx":{
    "type":"$anewLibrary/Media/Atoms/DeviceUx",
    "container":"Panel#Container",
    "state":{
      "style":{
        "borderWidth":"0",
        "borderStyle":"solid",
        "order":"1",
        "width":"auto",
        "color":"violet",
        "justifyContent":"center",
        "alignItems":"center"
      }
    },
    "connections":{
      "mediaDevices":[
        "MediaStream$mediaDevices"
      ]
    }
  },
  "MediaStream":{
    "type":"$anewLibrary/Media/Atoms/MediaStream",
    "container":"Container",
    "state":{
    },
    "connections":{
      "mediaDeviceState":[
        "DeviceUx$mediaDeviceState"
      ]
    }
  },
  "FrameCapture":{
    "type":"$anewLibrary/Media/Atoms/FrameCapture",
    "container":"Panel#Container",
    "state":{
      "fps":30
    },
    "connections":{
      "stream":[
        "MediaStream$stream"
      ]
    }
  },
  "FragmentShader":{
    "type":"$anewLibrary/Shader/Atoms/FragmentShader",
    "container":"Container",
    "state":{
      "shader":"",
      "defaultShader":"Heartfelt Rainy Window"
    },
    "connections":{
      "image":[
        "FrameCapture$frame"
      ]
    }
  },
  "ImageComposite":{
    "type":"$anewLibrary/Media/Atoms/ImageComposite",
    "container":"Container",
    "state":{
      "opA":"source-over",
      "opB":"destination-out",
      "opC":"destination-over"
    },
    "connections":{
      "imageA":[
        "FragmentShader$outputImage"
      ],
      "imageB":[
        "PointerPoms$image"
      ],
      "imageC":[
        "FrameCapture$frame"
      ]
    }
  },
  "TheImage":{
    "type":"$anewLibrary/Media/Atoms/Image",
    "container":"Panel#Container",
    "state":{
      "image":{
        "alt":"no image"
      },
      "selfie":true,
      "style":{
        "borderWidth":"0",
        "borderStyle":"solid",
        "flex":"1",
        "order":"2",
        "width":"auto",
        "borderRadius":"var(--radius-blob-1)"
      }
    },
    "connections":{
      "image":[
        "ImageComposite$output"
      ]
    }
  },
  "Holistic":{
    "type":"$anewLibrary/Mediapipe/Atoms/Holistic",
    "container":"Container",
    "state":{
      
    },
    "connections":{
      "image":[
        "FrameCapture$frame"
      ]
    }
  },
  "PointerPoms":{
    "type":"$anewLibrary/Mediapipe/Atoms/PointerPoms",
    "container":"Container",
    "state":{
      "penSize":10
    },
    "connections":{
      "tracking":[
        "VirtualPointer$tracking"
      ]
    }
  },
  "VirtualPointer":{
    "type":"$anewLibrary/Mediapipe/Atoms/VirtualPointer",
    "container":"Container",
    "state":{
      
    },
    "connections":{
      "results":[
        "Holistic$results"
      ]
    }
  },
  "Panel":{
    "type":"$anewLibrary/Layout/Atoms/Panel",
    "container":"Container",
    "state":{
      "layout":"column",
      "center":true,
      "style":{
        "borderWidth":"var(--border-size-5)",
        "borderStyle":"solid",
        "flex":"1",
        "order":"2",
        "borderRadius":"var(--radius-blob-2)",
        "color":"violet",
        "fontSize":"",
        "padding":"var(--size-5)",
        "backgroundColor":"var(--xcolor-one)",
        "width":"auto",
        "height":"auto"
      }
    }
  }
};