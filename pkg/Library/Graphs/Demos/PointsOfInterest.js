const graph = {
  "meta":{
    "timestamp":1691800279666,
    "owner":"kleiner.masha@gmail.com",
    "graphRects":{
      "GoogleMap":{
        "l":752,
        "t":64,
        "w":200,
        "h":76
      },
      "Markeronata":{
        "l":768,
        "t":272,
        "w":200,
        "h":76
      },
      "RadiusSelect":{
        "l":32,
        "t":288,
        "w":200,
        "h":116
      },
      "CategorySelect":{
        "l":32,
        "t":176,
        "w":200,
        "h":116
      },
      "POIFinder":{
        "l":368,
        "t":208,
        "w":200,
        "h":176
      },
      "POIDisplay":{
        "l":768,
        "t":368,
        "w":200,
        "h":60
      },
      "Grid":{
        "l":752,
        "t":496,
        "w":200,
        "h":96
      },
      "ProgressBar":{
        "l":992,
        "t":368,
        "w":200,
        "h":156
      },
      "PanelList":{
        "l":32,
        "t":400,
        "w":200,
        "h":96
      },
      "Eventonata":{
        "l":512,
        "t":624,
        "w":200,
        "h":76
      },
      "PanelQuery":{
        "l":32,
        "t":432,
        "w":200,
        "h":96
      },
      "ChooseLocation":{
        "l":48,
        "t":32,
        "w":200,
        "h":136
      }
    },
    "description":"find local attractions for selected location",
    "id":"PointsOfInterest",
    "designerId":"Main"
  },
  "nodes":{
    "Main":{
      "type":"$library/Layout/Nodes/DesignerNode",
      "container":"root$panel#Container"
    },
    "GoogleMap":{
      "type":"$library/Locale/Nodes/GoogleMapNode",
      "container":"SplitPanel$splitPanel#Container2"
    },
    "Markeronata":{
      "type":"$library/JSONata/Nodes/JSONataNode",
      "container":"Main$panel#Container"
    },
    "RadiusSelect":{
      "type":"$library/Fields/Nodes/SelectFieldNode",
      "container":"PanelQuery$panel#Container"
    },
    "PanelQuery":{
      "type":"$library/Layout/Nodes/PanelNode",
      "container":"Main$panel#Container"
    },
    "ChooseLocation":{
      "type":"$library/Locale/Nodes/ChooseLocationNode",
      "container":"Main$panel#Container"
    },
    "CategorySelect":{
      "type":"$library/Fields/Nodes/SelectFieldNode",
      "container":"PanelQuery$panel#Container"
    },
    "POIFinder":{
      "type":"$library/Locale/Nodes/POIFinderNode",
      "container":"Main$panel#Container"
    },
    "POIDisplay":{
      "type":"$library/Locale/Nodes/POIDisplayNode",
      "container":"PanelList$panel#Container"
    },
    "PanelList":{
      "type":"$library/Layout/Nodes/PanelNode",
      "container":"SplitPanel$splitPanel#Container"
    },
    "Grid":{
      "type":"$library/Data/Nodes/GridNode",
      "container":"PanelList$panel#Container"
    },
    "Eventonata":{
      "type":"$library/JSONata/Nodes/JSONataNode",
      "container":"Main$panel#Container"
    },
    "SplitPanel":{
      "type":"$library/Layout/Nodes/SplitPanelNode",
      "container":"Main$panel#Container"
    },
    "ProgressBar":{
      "type":"$library/UX/Nodes/ProgressBarNode",
      "container":"Main$panel#Container"
    }
  },
  "state":{
    "Main$designer$disabled":false,
    "Main$designer$style":"width: auto; height: auto;",
    "Main$panel$canvasLayout":"column",
    "PanelQuery$panel$layout":"row",
    "ChooseLocation$choose$label":"Location",
    "ChooseLocation$choose$options":[
      "My Location"
    ],
    "POIFinder$filter$context":"Given a list of places, please answer questions about them.\n      You should reply with a simple \"yes\", \"no\" or \"don't know\" about each place\n    ",
    "POIFinder$filter$restart":false,
    "PanelList$panel$layout":"row",
    "Grid$chart$options":{
      "header":{
        "height":0
      }
    },
    "ProgressBar$bar$height":5,
    "Main$designer$layout":{
      "Geolocation":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"var(--border-size-2)",
        "borderStyle":"solid"
      },
      "Markeronata":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"var(--border-size-2)",
        "borderStyle":"solid"
      },
      "Echo3":{
        "l":400,
        "t":224,
        "w":287,
        "h":344,
        "borderWidth":"var(--border-size-2)",
        "borderStyle":"solid"
      },
      "Main":{
        "l":0,
        "t":0,
        "w":585,
        "h":436,
        "width":"auto",
        "height":"auto",
        "alignItems":""
      },
      "GoogleMap":{
        "l":0,
        "t":206,
        "w":753,
        "h":225,
        "borderWidth":"0",
        "borderStyle":"solid",
        "display":"",
        "position":"relative",
        "flex":"1",
        "order":"3",
        "width":"auto",
        "height":"auto"
      },
      "RadiusSelect":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"0",
        "borderStyle":"solid",
        "height":"auto",
        "padding":"var(--size-2)",
        "backgroundColor":"var(--xcolor-one)",
        "order":"3",
        "width":"auto",
        "flex":"1"
      },
      "PanelQuery":{
        "l":0,
        "t":56,
        "w":612,
        "h":56,
        "borderWidth":"0",
        "borderStyle":"solid",
        "order":"2",
        "height":"auto",
        "backgroundColor":"var(--xcolor-one)",
        "width":"auto",
        "flex":"",
        "padding":"var(--size-2)",
        "alignItems":""
      },
      "ChooseLocation":{
        "l":359,
        "t":0,
        "w":319,
        "h":56,
        "borderWidth":"0",
        "borderStyle":"solid",
        "order":"1",
        "height":"auto",
        "width":"auto",
        "backgroundColor":"var(--xcolor-one)",
        "flex":"",
        "padding":"var(--size-2)",
        "alignItems":"",
        "fontSize":"var(--font-size-3)"
      },
      "CategorySelect":{
        "l":82,
        "t":82,
        "w":132,
        "h":132,
        "borderWidth":"0",
        "borderStyle":"solid",
        "height":"auto",
        "padding":"var(--size-2)",
        "backgroundColor":"var(--xcolor-one)",
        "order":"2",
        "width":"auto",
        "flex":"1"
      },
      "POIFinder":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"var(--border-size-2)",
        "borderStyle":"solid"
      },
      "POIDisplay":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"0",
        "borderStyle":"solid",
        "order":"2",
        "flex":"1",
        "backgroundColor":"var(--xcolor-one)",
        "height":"auto",
        "width":"auto"
      },
      "PanelList":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"0",
        "borderStyle":"solid",
        "order":"2",
        "flex":"1",
        "height":null,
        "width":"auto"
      },
      "Grid":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"",
        "borderStyle":"solid",
        "flex":"1",
        "order":"1",
        "width":"auto",
        "height":"auto"
      },
      "Eventonata":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"var(--border-size-2)",
        "borderStyle":"solid"
      },
      "SplitPanel":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"",
        "borderStyle":"solid",
        "order":"4",
        "width":"auto",
        "height":"auto",
        "backgroundColor":"var(--xcolor-one)"
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
        "color":"violet",
        "width":"auto",
        "backgroundColor":"var(--xcolor-one)"
      },
      "ProgressBar2":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "borderWidth":"",
        "borderStyle":"solid"
      }
    },
    "Markeronata$JSONata$expression":"$map(*, function($v, $i, $a) {\n   ({\n        \"longitude\": ($v.point.lon),\n        \"latitude\": ($v.point.lat),\n        \"title\": ($v.name),\n        \"key\": ($v.xid)\n   })\n})",
    "RadiusSelect$field$label":"search within",
    "RadiusSelect$field$options":[
      {
        "key":"5",
        "name":"5 km"
      },
      {
        "key":"10",
        "name":"10 km"
      },
      {
        "key":"50",
        "name":"50 km"
      },
      {
        "key":"100",
        "name":"100 km"
      }
    ],
    "RadiusSelect$field$value":"5",
    "CategorySelect$field$label":"category",
    "CategorySelect$field$value":"*",
    "CategorySelect$field$options":[
      {
        "name":"All",
        "key":"*"
      },
      "Children",
      "Sports and Outdoors",
      "Museums",
      "History and Religion"
    ],
    "Grid$chart$columns":[
      {
        "name":"xid",
        "hidden":true,
        "isId":true
      },
      {
        "name":"name"
      }
    ],
    "Eventonata$JSONata$expression":"record.xid",
    "ProgressBar$bar$interval":100,
    "ProgressBar$bar$percentage":0,
    "ChooseLocation$choose$value":"My Location",
    "PanelQuery$panel$center":false
  },
  "connections":{
    "GoogleMap$map$geolocation":"ChooseLocation$location$geolocation",
    "GoogleMap$map$markers":"Markeronata$JSONata$result",
    "POIFinder$poi$geolocation":"ChooseLocation$location$geolocation",
    "POIDisplay$poi$location":"POIFinder$poi$location",
    "POIFinder$poi$filter":"CategorySelect$field$value",
    "POIFinder$poi$radius":"RadiusSelect$field$value",
    "Grid$chart$data":"POIFinder$poi$locations",
    "Markeronata$JSONata$json":"POIFinder$poi$locations",
    "Eventonata$JSONata$json":"Grid$chart$event",
    "POIFinder$poi$selected":[
      "Eventonata$JSONata$result",
      "GoogleMap$map$marker"
    ],
    "ProgressBar$bar$inProgress":"POIFinder$filter$working"
  }
};
