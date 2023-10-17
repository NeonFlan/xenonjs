const graph = {
  "meta":{
    "timestamp":1696027700103,
    "customLibraries":{
      
    },
    "graphRects":{
      "PolymathLearner":{
        "l":608,
        "t":192,
        "w":200,
        "h":136
      },
      "PolymathLibrary":{
        "l":304,
        "t":48,
        "w":200,
        "h":60
      },
      "ProgressBar":{
        "l":880,
        "t":96,
        "w":200,
        "h":156
      },
      "UXSnackBar":{
        "l":880,
        "t":352,
        "w":200,
        "h":116
      },
      "Button":{
        "l":288,
        "t":416,
        "w":200,
        "h":96
      },
      "FileField":{
        "l":48,
        "t":224,
        "w":200,
        "h":116
      },
      "TextArea":{
        "l":304,
        "t":288,
        "w":200,
        "h":76
      },
      "Panel":{
        "l":48,
        "t":288,
        "w":200,
        "h":96
      },
      "TextField":{
        "l":304,
        "t":144,
        "w":200,
        "h":116
      },
      "JSONata":{
        "l":48,
        "t":80,
        "w":200,
        "h":76
      }
    },
    "readonly":true,
    "owner":"",
    "id":"PolyLearn",
    "designerId":"Main"
  },
  "nodes":{
    "Main":{
      "type":"$library/Layout/Nodes/DesignerNode",
      "container":"root$panel#Container"
    },
    "PolymathLearner":{
      "type":"$library/Polymath/Nodes/PolymathLearnerNode",
      "container":"Main$panel#Container"
    },
    "PolymathLibrary":{
      "type":"$library/Polymath/Nodes/PolymathLibraryNode",
      "container":"Main$panel#Container"
    },
    "ProgressBar":{
      "type":"$library/UX/Nodes/ProgressBarNode",
      "container":"Main$panel#Container"
    },
    "UXSnackBar":{
      "type":"$library/UX/Nodes/UXSnackBarNode",
      "container":"Main$panel#Container"
    },
    "FileField":{
      "type":"$library/Fields/Nodes/FileFieldNode",
      "container":"Panel$panel#Container"
    },
    "Button":{
      "type":"$library/Fields/Nodes/ButtonNode",
      "container":"Main$panel#Container"
    },
    "TextArea":{
      "type":"$library/Fields/Nodes/TextAreaNode",
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
    "JSONata":{
      "type":"$library/JSONata/Nodes/JSONataNode",
      "container":"Main$panel#Container"
    }
  },
  "state":{
    "Main$designer$disabled":true,
    "Main$designer$style":"width: auto; height: auto;",
    "Main$panel$canvasLayout":"column",
    "ProgressBar$bar$height":2,
    "Button$button$action":"toggle",
    "Panel$panel$layout":"row",
    "Main$designer$layout":{
      "GraphAgent":{
        "l":32,
        "t":32,
        "w":132,
        "h":132
      },
      "PolymathLearner":{
        "l":32,
        "t":32,
        "w":132,
        "h":132
      },
      "PolymathLibrary":{
        "l":32,
        "t":32,
        "w":132,
        "h":132
      },
      "Main":{
        "padding":"var(--size-5)",
        "backgroundColor":"var(--xcolor-one)"
      },
      "ProgressBar":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "width":"auto",
        "height":"auto",
        "order":"4",
        "padding":"var(--size-3)"
      },
      "UXSnackBar":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "width":"auto"
      },
      "FileField":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "width":"auto",
        "height":"auto",
        "fontSize":"",
        "order":"2",
        "padding":"var(--size-3)"
      },
      "Button":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "width":"auto",
        "height":"auto",
        "order":"5",
        "alignItems":"center",
        "padding":"",
        "fontSize":"",
        "flex":"",
        "color":""
      },
      "TextArea":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "width":"auto",
        "order":"3",
        "flex":"1"
      },
      "TextField":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "width":"auto",
        "order":"1",
        "height":"auto",
        "padding":"var(--size-2)",
        "fontSize":"",
        "flex":"1"
      },
      "Panel":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "width":"auto",
        "order":"1"
      },
      "JSONata":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "width":"auto"
      }
    },
    "PolymathLibrary$PolymathLibrary$name":"Demo",
    "PolymathLearner$UXSnackBar$message":"Learning successful",
    "PolymathLearner$UXSnackBar$icon":"school",
    "UXSnackBar$UXSnackBar$message":"Learning complete",
    "UXSnackBar$UXSnackBar$icon":"school",
    "ProgressBar$bar$interval":10,
    "Button$button$label":"Learn",
    "FileField$field$type":"*.jpg",
    "FileField$FileField$type":"*.jpg",
    "FileField$FileField$accept":"",
    "TextField$field$label":"Title:",
    "TextArea$field$label":"Content:",
    "FileField$FileField$label":"Upload file:",
    "FileField$FileField$button":"Choose",
    "JSONata$JSONata$expression":"$substringBefore($, '.')"
  },
  "connections":{
    "ProgressBar$bar$inProgress":"PolymathLearner$PolymathLearner$learning",
    "PolymathLearner$PolymathLearner$library":"PolymathLibrary$PolymathLibrary$library",
    "UXSnackBar$UXSnackBar$open":"PolymathLearner$PolymathLearner$ok",
    "PolymathLearner$PolymathLearner$trigger":"Button$button$value",
    "PolymathLearner$PolymathLearner$content":"TextArea$field$text",
    "PolymathLearner$PolymathLearner$source":"TextField$field$value",
    "TextField$field$value":"JSONata$JSONata$result",
    "TextArea$field$text":"FileField$FileField$content",
    "JSONata$JSONata$json":"FileField$FileField$title"
  }
};
