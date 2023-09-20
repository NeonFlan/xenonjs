const graph = {
  "meta":{
    "timestamp":1695170112371,
    "owner":"",
    "stylized":true,
    "graphRects":{
      "FrameCapture":{
        "l":16,
        "t":176,
        "w":200,
        "h":76
      },
      "SelfieSegmentation":{
        "l":272,
        "t":64,
        "w":200,
        "h":60
      },
      "ImageComposite":{
        "l":592,
        "t":32,
        "w":200,
        "h":196
      },
      "Image2":{
        "l":912,
        "t":32,
        "w":200,
        "h":76
      },
      "DeviceUx":{
        "l":16,
        "t":80,
        "w":200,
        "h":76
      },
      "Panel":{
        "l":16,
        "t":48,
        "w":200,
        "h":96
      },
      "TextField":{
        "l":16,
        "t":288,
        "w":200,
        "h":116
      },
      "OpenAIImageGen":{
        "l":256,
        "t":256,
        "w":200,
        "h":116
      },
      "ProgressBar":{
        "l":528,
        "t":256,
        "w":200,
        "h":156
      }
    },
    "description":"OpenAI-generated background for video stream",
    "readonly":false,
    "id":"VideoBackgroundGen",
    "designerId":"Main",
    "customLibraries":{
      
    }
  },
  "nodes":{
    "Main":{
      "type":"$library/Layout/Nodes/DesignerNode",
      "container":"root$panel#Container"
    },
    "DeviceUx":{
      "type":"$library/Media/Nodes/DeviceUxNode",
      "container":"Panel$panel#Container"
    },
    "FrameCapture":{
      "type":"$library/Media/Nodes/FrameCaptureNode",
      "container":"Panel$panel#Container"
    },
    "SelfieSegmentation":{
      "type":"$library/Mediapipe/Nodes/SelfieSegmentationNode",
      "container":"Main$panel#Container"
    },
    "ImageComposite":{
      "type":"$library/Media/Nodes/ImageCompositeNode",
      "container":"Main$panel#Container"
    },
    "Image2":{
      "type":"$library/Media/Nodes/ImageNode",
      "container":"Panel$panel#Container"
    },
    "OpenAIImageGen":{
      "type":"$library/OpenAI/Nodes/OpenAIImageGenNode",
      "container":"Main$panel#Container"
    },
    "TextField":{
      "type":"$library/Fields/Nodes/TextFieldNode",
      "container":"Panel$panel#Container"
    },
    "Panel":{
      "type":"$library/Layout/Nodes/PanelNode",
      "container":"Main$panel#Container"
    },
    "ProgressBar":{
      "type":"$library/UX/Nodes/ProgressBarNode",
      "container":"Panel$panel#Container"
    }
  },
  "state":{
    "Main$designer$disabled":false,
    "Main$designer$style":"width: auto; height: auto;",
    "Main$panel$canvasLayout":"column",
    "FrameCapture$FrameCapture$fps":30,
    "Panel$panel$layout":"column",
    "ProgressBar$bar$height":3,
    "Image2$image$image":{
      "alt":"no image"
    },
    "Main$designer$layout":{
      "DeviceUx":{
        "l":32,
        "t":32,
        "w":461,
        "h":43,
        "borderWidth":"0",
        "borderStyle":"solid",
        "order":"1",
        "width":"auto",
        "height":"auto",
        "color":"var(--xcolor-four)"
      },
      "FrameCapture":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"var(--border-size-2)",
        "borderStyle":"solid",
        "color":"var(--xcolor-one)"
      },
      "FragmentShader":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"var(--border-size-2)",
        "borderStyle":"solid"
      },
      "SelfieSegmentation":{
        "l":176,
        "t":80,
        "w":132,
        "h":132,
        "borderWidth":"0",
        "borderStyle":"solid"
      },
      "ImageComposite":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"var(--border-size-2)",
        "borderStyle":"solid"
      },
      "Image2":{
        "l":320,
        "t":80,
        "w":132,
        "h":132,
        "borderWidth":"0",
        "borderStyle":"solid",
        "flex":"1",
        "order":"4",
        "borderRadius":"",
        "width":"auto",
        "height":"auto",
        "padding":""
      },
      "Panel2":{
        "l":544,
        "t":80,
        "w":132,
        "h":132,
        "borderWidth":"0",
        "borderStyle":"solid",
        "order":"2"
      },
      "Image3":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"0",
        "borderStyle":"solid"
      },
      "Main":{
        "l":0,
        "t":0,
        "w":1152,
        "h":260,
        "borderWidth":"0",
        "color":"violet",
        "borderRadius":"var(--radius-4)",
        "padding":"var(--size-5)"
      },
      "OpenAIImageGen":{
        "l":0,
        "t":0,
        "w":1152,
        "h":16,
        "borderWidth":"0",
        "borderStyle":"solid",
        "order":"9"
      },
      "TextField":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"0",
        "borderStyle":"solid",
        "height":"auto",
        "flex":"none",
        "order":"2",
        "color":"var(--xcolor-four)",
        "width":"auto"
      },
      "Panel":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"var(--border-size-4)",
        "borderStyle":"solid",
        "flex":"1",
        "order":"1",
        "padding":"var(--size-3)",
        "backgroundColor":"var(--xcolor-two)",
        "color":"var(--xcolor-two)",
        "borderRadius":"var(--radius-5)"
      },
      "ProgressBar":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"",
        "borderStyle":"solid",
        "order":"3",
        "height":"auto",
        "padding":"var(--size-2)",
        "width":"auto"
      }
    },
    "ImageComposite$ImageComposite$opA":"source-over",
    "ImageComposite$ImageComposite$opB":"source-over",
    "ImageComposite$ImageComposite$opC":"destination-out",
    "Image2$image$selfie":true,
    "Panel$panel$center":false,
    "TextField$field$value":"",
    "TextField$field$label":"choose background:",
    "OpenAIImageGen$OpenAIImage$restart":true,
    "ProgressBar$bar$interval":100,
    "ImageComposite$ImageComposite$opD":"destination-atop",
    "OpenAIImageGen$OpenAIImage$enabled":true
  },
  "connections":{
    "FrameCapture$FrameCapture$stream":"DeviceUx$defaultStream$stream",
    "SelfieSegmentation$SelfieSegmentation$image":"FrameCapture$FrameCapture$frame",
    "Image2$image$image":"ImageComposite$ImageComposite$output",
    "ImageComposite$ImageComposite$imageB":"OpenAIImageGen$OpenAIImage$image",
    "ImageComposite$ImageComposite$imageC":"SelfieSegmentation$SelfieSegmentation$mask",
    "OpenAIImageGen$OpenAIImage$prompt":"TextField$field$value",
    "ImageComposite$ImageComposite$imageA":"FrameCapture$FrameCapture$frame",
    "ProgressBar$bar$inProgress":"OpenAIImageGen$OpenAIImage$working",
    "ImageComposite$ImageComposite$imageD":"FrameCapture$FrameCapture$frame"
  }
};
