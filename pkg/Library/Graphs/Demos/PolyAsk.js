const graph = {
  "meta":{
    "timestamp":1695853217533,
    "customLibraries":{
      
    },
    "graphRects":{
      "AskPolymath":{
        "l":304,
        "t":64,
        "w":200,
        "h":116
      },
      "StaticText":{
        "l":608,
        "t":80,
        "w":200,
        "h":60
      },
      "TextArea":{
        "l":32,
        "t":128,
        "w":200,
        "h":76
      },
      "PolymathLibrary":{
        "l":32,
        "t":48,
        "w":200,
        "h":60
      },
      "ProgressBar":{
        "l":608,
        "t":160,
        "w":200,
        "h":156
      },
      "Button":{
        "l":32,
        "t":224,
        "w":200,
        "h":116
      }
    },
    "readonly":true,
    "owner":"",
    "id":"PolyAsk",
    "designerId":"Main"
  },
  "nodes":{
    "Main":{
      "type":"$library/Layout/Nodes/DesignerNode",
      "container":"root$panel#Container"
    },
    "TextArea":{
      "type":"$library/Fields/Nodes/TextAreaNode",
      "container":"Main$panel#Container"
    },
    "AskPolymath":{
      "type":"$library/Polymath/Nodes/AskPolymathNode",
      "container":"Main$panel#Container"
    },
    "StaticText":{
      "type":"$library/Fields/Nodes/StaticTextNode",
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
    "Button":{
      "type":"$library/Fields/Nodes/ButtonNode",
      "container":"Main$panel#Container"
    }
  },
  "state":{
    "Main$designer$disabled":true,
    "Main$designer$style":"width: auto; height: auto;",
    "Main$panel$canvasLayout":"column",
    "ProgressBar$bar$height":3,
    "Button$button$action":"toggle",
    "Main$designer$layout":{
      "GraphAgent":{
        "l":32,
        "t":32,
        "w":132,
        "h":132
      },
      "TextArea":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "width":"auto",
        "order":"1",
        "borderWidth":"",
        "fontSize":"var(--font-size-4)"
      },
      "AskPolymath":{
        "l":32,
        "t":32,
        "w":132,
        "h":132
      },
      "StaticText":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "width":"auto",
        "order":"4",
        "borderWidth":"var(--border-size-1)",
        "flex":"1",
        "fontSize":"var(--font-size-4)",
        "backgroundColor":"white",
        "padding":"var(--size-4)"
      },
      "PolymathLibrary":{
        "l":32,
        "t":32,
        "w":132,
        "h":132
      },
      "Main":{
        "padding":"var(--size-3)",
        "backgroundColor":"var(--xcolor-one)"
      },
      "ProgressBar":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "width":"auto",
        "order":"2",
        "height":"auto"
      },
      "Button":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "width":"auto",
        "height":"auto",
        "order":"2",
        "alignItems":"center",
        "padding":"var(--size-2)"
      }
    },
    "WebPage$field$label":"Ask me:",
    "PolymathLibrary$PolymathLibrary$name":"NewDemo",
    "ProgressBar$bar$interval":10,
    "TextArea$field$label":"Ask me:",
    "Button$button$label":"Answer",
    "AskPolymath$AskPolymath$enabled":true
  },
  "connections":{
    "AskPolymath$AskPolymath$library":"PolymathLibrary$PolymathLibrary$library",
    "AskPolymath$AskPolymath$query":"TextArea$field$text",
    "StaticText$StaticText$text":"AskPolymath$AskPolymath$completion",
    "ProgressBar$bar$inProgress":"AskPolymath$AskPolymath$working",
    "AskPolymath$AskPolymath$trigger":"Button$button$value"
  }
};
