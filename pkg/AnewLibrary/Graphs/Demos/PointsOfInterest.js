/**
 * @license
 * Copyright 2023 Atom54 LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

const graph = {
  "meta":{
    "id":"PointsOfInterest"
  },
  "GoogleMap":{
    "type":"$anewLibrary/Locale/Atoms/GoogleMap",
    "container":"SplitPanel#Container2",
    "state":{
      "style":{
        "borderWidth":"0",
        "position":"relative",
        "flex":"1",
        "order":"3"
      }
    },
    "connections":{
      "geolocation":[
        "GeoLocation$geolocation"
      ],
      "markers":[
        "Markeronata$result"
      ]
    }
  },
  "Markeronata":{
    "type":"$anewLibrary/Json/Atoms/JSONata",
    "container":"Container",
    "state":{
      "expression":"$map(*, function($v, $i, $a) {\n   ({\n        \"longitude\": ($v.point.lon),\n        \"latitude\": ($v.point.lat),\n        \"title\": ($v.name),\n        \"key\": ($v.xid)\n   })\n})",
      "style":{
        "order":0
      }
    },
    "connections":{
      "json":[
        "POIFinder$locations"
      ]
    }
  },
  "POIFinder":{
    "type":"$anewLibrary/Locale/Atoms/POIFinder",
    "container":"Container",
    "state":{
      "style":{
        "order":2
      }
    },
    "connections":{
      "geolocation":[
        "GeoLocation$geolocation"
      ],
      "filter":[
        "CategorySelect$value"
      ],
      "radius":[
        "RadiusSelect$value"
      ],
      "selected":[
        "Eventonata$result",
        "GoogleMap$marker"
      ],
      "result":[
        "POIFilter$result"
      ]
    }
  },
  "POIFilter":{
    "type":"$library/OpenAI/Atoms/OpenAIText",
    "container":"Container",
    "state":{
      "context":"Given a list of places, please answer questions about them. You should reply with a simple \"yes\", \"no\" or \"don't know\" about each place",
      "enabled":true
    },
    "connections":{
      "prompt":[
        "POIFinder$request"
      ],
      "restart":[
        "POIFinder$restart"
      ]
    }
  },
  "POIDisplay":{
    "type":"$anewLibrary/Locale/Atoms/POIDisplay",
    "container":"PanelList#Container",
    "state":{
      "style":{
        "borderWidth":"0",
        "order":1,
        "flex":"1",
        "backgroundColor":"var(--xcolor-one)"
      }
    },
    "connections":{
      "location":[
        "POIFinder$location"
      ]
    }
  },
  "PanelList":{
    "type":"$anewLibrary/Layout/Atoms/Panel",
    "container":"SplitPanel#Container",
    "state":{
      "layout":"row",
      "style":{
        "borderWidth":"0",
        "order":"2",
        "flex":"1"
      }
    }
  },
  "Table":{
    "type":"$anewLibrary/Data/Atoms/Table",
    "container":"PanelList#Container",
    "state":{
      "columns":[
        {
          "name":"xid",
          "hidden":true,
          "isId":true
        },
        {
          "name":"name"
        }
      ],
      "options":{
        "header":{
          "height":0
        }
      },
      "style":{
        "borderWidth":"0px",
        "borderStyle":"solid",
        "flex":"1",
        "order":0
      }
    },
    "connections":{
      "data":[
        "POIFinder$locations"
      ]
    }
  },
  "Eventonata":{
    "type":"$anewLibrary/Json/Atoms/JSONata",
    "container":"Container",
    "state":{
      "expression":"record.xid",
      "style":{
        "order":5
      }
    },
    "connections":{
      "json":[
        "Table$event"
      ]
    }
  },
  "SplitPanel":{
    "type":"$anewLibrary/Layout/Atoms/SplitPanel",
    "container":"Container",
    "state":{
      "style":{
        "order":4,
        "backgroundColor":"var(--xcolor-one)"
      },
      "layout":""
    }
  },
  "ProgressBar":{
    "type":"$anewLibrary/UX/Atoms/ProgressBar",
    "container":"Container",
    "state":{
      "interval":100,
      "percentage":0,
      "height":5,
      "style":{
        "order":3,
        "color":"violet",
        "backgroundColor":"var(--xcolor-one)",
        "flex":"0 0 auto"
      }
    },
    "connections":{
      "inProgress":[
        "POIFilter$working"
      ]
    }
  },
  "Panel":{
    "type":"$anewLibrary/Layout/Atoms/Panel",
    "container":"Container",
    "state":{
      "layout":"row",
      "style":{
        "padding":"var(--size-3)",
        "order":1,
        "backgroundColor":"var(--xcolor-one)",
        "flex":"0 0 auto"
      }
    }
  },
  "LocationText":{
    "type":"$anewLibrary/Fields/Atoms/TextField",
    "container":"Panel#Container",
    "state":{
      "label":"Location",
      "options":"[\"My Location\"]",
      "style":{
        "flex":"1 0 auto",
        "padding":"0.5em",
        "order":1
      },
      "value":"My Location"
    }
  },
  "GeoLocation":{
    "type":"$anewLibrary/Locale/Atoms/Geolocation",
    "container":"Panel#Container",
    "state":{
      "live":true,
      "style":{
        "order":2
      }
    },
    "connections":{
      "address":[
        "LocationText$value"
      ]
    }
  },
  "RadiusSelect":{
    "type":"$anewLibrary/Fields/Atoms/SelectField",
    "container":"Panel#Container",
    "state":{
      "label":"search within",
      "options":[
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
      "value":"5",
      "style":{
        "borderWidth":"0px",
        "borderStyle":"solid",
        "flex":"0 0 auto",
        "order":3
      }
    }
  },
  "CategorySelect":{
    "type":"$anewLibrary/Fields/Atoms/SelectField",
    "container":"Panel#Container",
    "state":{
      "label":"category",
      "options":[
        {
          "name":"All",
          "key":"*"
        },
        "Children",
        "Sports and Outdoors",
        "Museums",
        "History and Religion"
      ],
      "value":"*",
      "style":{
        "order":1,
        "flex":"0 0 auto"
      }
    }
  }
};