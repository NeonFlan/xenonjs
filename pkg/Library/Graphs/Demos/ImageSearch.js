const graph = {
  "meta":{
    "id":"ImageSearch",
    "designerId":"Main",
    "timestamp":1688449019731,
    "owner":"kleiner.masha@gmail.com",
    "graphRects":{
      "Panel":{
        "l":32,
        "t":176,
        "w":200,
        "h":96
      },
      "TextField":{
        "l":32,
        "t":64,
        "w":200,
        "h":76
      },
      "Pixabay":{
        "l":432,
        "t":64,
        "w":200,
        "h":76
      }
    },
    "description":"query Pixabay for images",
    "readonly":true
  },
  "nodes":{
    "Main":{
      "type":"$library/Layout/Nodes/DesignerNode",
      "container":"root$panel#Container"
    },
    "Panel":{
      "type":"$library/Layout/Nodes/PanelNode",
      "container":"Main$panel#Container"
    },
    "TextField":{
      "type":"$library/Fields/Nodes/TextFieldNode",
      "container":"Panel$panel#Container"
    },
    "Pixabay":{
      "type":"$library/Pixabay/Nodes/PixabayNode",
      "container":"Panel$panel#Container"
    }
  },
  "state":{
    "Main$designer$disabled":false,
    "Main$designer$style":"width: auto; height: auto;",
    "Main$panel$canvasLayout":"column",
    "Main$designer$layout":{
      "Panel":{
        "l":24,
        "t":24,
        "w":1104,
        "h":575,
        "borderWidth":"var(--border-size-3)",
        "borderStyle":"solid",
        "height":null,
        "flex":"1",
        "borderRadius":"var(--radius-4)",
        "backgroundColor":"var(--xcolor-two)",
        "color":"var(--xcolor-two)",
        "padding":"var(--size-4)",
        "order":"1",
        "width":null
      },
      "TextField":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"0",
        "borderStyle":"solid",
        "order":"1",
        "height":"auto",
        "padding":"var(--size-2)",
        "color":"var(--xcolor-four)",
        "width":"auto",
        "borderRadius":"var(--radius-3)"
      },
      "Main":{
        "padding":"var(--size-5)",
        "flex":"",
        "height":null
      },
      "Pixabay":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"var(--border-size-2)",
        "borderStyle":"solid",
        "order":"2",
        "flex":"1",
        "width":"auto",
        "height":null
      }
    },
    "Panel$panel$center":false,
    "Panel$panel$layout":"column",
    "TextField$field$label":"find an image:"
  },
  "connections":{
    "Pixabay$pixabay$query":"TextField$field$value"
  }
};
