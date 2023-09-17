const graph = {
  "meta":{
    "id":"ImageCompletion",
    "designerId":"Main",
    "timestamp":1690765803801,
    "owner":"kleiner.masha@gmail.com",
    "graphRects":{
      "OpenAIImageCompletion":{
        "l":272,
        "t":144,
        "w":200,
        "h":116
      },
      "Image":{
        "l":16,
        "t":256,
        "w":200,
        "h":76
      },
      "Image2":{
        "l":496,
        "t":32,
        "w":200,
        "h":76
      },
      "TextField":{
        "l":16,
        "t":48,
        "w":200,
        "h":116
      },
      "ProgressBar":{
        "l":528,
        "t":192,
        "w":200,
        "h":156
      },
      "Button":{
        "l":16,
        "t":128,
        "w":200,
        "h":96
      },
      "Panel":{
        "l":16,
        "t":0,
        "w":200,
        "h":96
      }
    },
    "description":"complete image with an AI generated image ",
    "customLibraries":{
      
    }
  },
  "nodes":{
    "Main":{
      "type":"$library/Layout/Nodes/DesignerNode",
      "container":"root$panel#Container"
    },
    "Image":{
      "type":"$library/Media/Nodes/ImageNode",
      "container":"Main$panel#Container"
    },
    "OpenAIImageCompletion":{
      "type":"$library/OpenAI/Nodes/OpenAIImageCompletionNode",
      "container":"Main$panel#Container"
    },
    "Image2":{
      "type":"$library/Media/Nodes/ImageNode",
      "container":"Main$panel#Container"
    },
    "TextField":{
      "type":"$library/Fields/Nodes/TextFieldNode",
      "container":"Panel$panel#Container"
    },
    "ProgressBar":{
      "type":"$library/UX/Nodes/ProgressBarNode",
      "container":"Main$panel#Container"
    },
    "Button":{
      "type":"$library/Fields/Nodes/ButtonNode",
      "container":"Panel$panel#Container"
    },
    "Panel":{
      "type":"$library/Layout/Nodes/PanelNode",
      "container":"Main$panel#Container"
    }
  },
  "state":{
    "Main$designer$disabled":false,
    "Main$designer$style":"width: auto; height: auto;",
    "Main$panel$canvasLayout":"column",
    "ProgressBar$bar$height":2,
    "Button$button$action":"toggle",
    "Panel$panel$layout":"row",
    "Main$designer$layout":{
      "Image":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"var(--border-size-2)",
        "borderStyle":"solid",
        "width":null,
        "height":null,
        "order":"1",
        "display":"none"
      },
      "OpenAIImageCompletion":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"var(--border-size-2)",
        "borderStyle":"solid"
      },
      "Image2":{
        "l":82,
        "t":82,
        "w":132,
        "h":132,
        "borderWidth":"",
        "borderStyle":"solid",
        "order":"3",
        "flex":"1",
        "backgroundColor":"var(--xcolor-one)",
        "padding":"var(--size-2)",
        "width":"auto"
      },
      "Main":{
        "flex":"1"
      },
      "TextField":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"",
        "borderStyle":"solid",
        "backgroundColor":"",
        "height":"auto",
        "padding":"var(--size-3)",
        "order":"1",
        "width":"auto",
        "flex":"1"
      },
      "ProgressBar":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"",
        "borderStyle":"solid",
        "order":"2",
        "height":"auto",
        "backgroundColor":"var(--xcolor-one)",
        "width":"auto"
      },
      "Button":{
        "l":0,
        "t":132,
        "w":132,
        "h":36,
        "borderStyle":"solid",
        "height":"auto",
        "order":"2",
        "flex":"",
        "width":"auto",
        "padding":"var(--size-3)"
      },
      "Panel":{
        "l":0,
        "t":0,
        "w":830,
        "h":98,
        "borderStyle":"solid",
        "height":"auto",
        "backgroundColor":"var(--xcolor-one)",
        "order":"1",
        "width":"auto"
      }
    },
    "Image$image$image":{
      "url":"../Apps/EinsteinHat/einstein.png"
    },
    "TextField$field$label":"What should Prof. Einstein wear on his head?",
    "TextField$field$value":"",
    "ProgressBar$bar$interval":200,
    "Button$button$label":"complete",
    "OpenAIImageCompletion$complete$enabled":true,
    "TextField$field$options":[
      "tiara",
      "helmet",
      "football",
      "headphones"
    ]
  },
  "connections":{
    "OpenAIImageCompletion$complete$image":"Image$image$image",
    "Image2$image$image":"OpenAIImageCompletion$complete$result",
    "OpenAIImageCompletion$complete$prompt":"TextField$field$value",
    "ProgressBar$bar$inProgress":"OpenAIImageCompletion$complete$working",
    "OpenAIImageCompletion$complete$restart":"Button$button$value"
  }
};
