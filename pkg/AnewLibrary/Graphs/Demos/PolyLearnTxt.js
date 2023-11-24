/**
 * @license
 * Copyright 2023 Atom54 LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

const graph = {
  "meta":{
    "id":"PolyLearnTxt"
  },
  "PolymathLearner":{
    "type":"$anewLibrary/Polymath/Atoms/PolymathLearner",
    "container":"Container",
    "connections":{
      "library":[
        "PolymathLibrary$library"
      ],
      "trigger":[
        "Button$value"
      ],
      "content":[
        "TextArea$text"
      ],
      "source":[
        "TextField$value"
      ]
    }
  },
  "PolymathLibrary":{
    "type":"$anewLibrary/Polymath/Atoms/PolymathLibrary",
    "container":"Container",
    "state":{
      "name":"NewDemo",
      "style":{
        "order":2
      }
    }
  },
  "ProgressBar":{
    "type":"$anewLibrary/UX/Atoms/ProgressBar",
    "container":"Container",
    "state":{
      "interval":10,
      "height":2,
      "style":{
        "order":4,
        "padding":"var(--size-2)",
        "flex":"0 0 auto"
      }
    },
    "connections":{
      "inProgress":[
        "PolymathLearner$learning"
      ]
    }
  },
  "UXSnackBar":{
    "type":"$anewLibrary/UX/Atoms/UXSnackBar",
    "container":"Container",
    "state":{
      "message":"Learning successful",
      "icon":"school",
      "style":{
        "order":5,
        "flex":"0 0 auto"
      }
    },
    "connections":{
      "open":"PolymathLearner$ok"
    }
  },
  "Button":{
    "type":"$anewLibrary/Fields/Atoms/Button",
    "container":"Container",
    "state":{
      "action":"toggle",
      "label":"Learn",
      "style":{
        "order":6,
        "alignItems":"center",
        "flex":"0 0 auto"
      },
      "inverted":true
    }
  },
  "TextArea":{
    "type":"$anewLibrary/Fields/Atoms/TextArea",
    "container":"Container",
    "state":{
      "label":"Content:",
      "style":{
        "order":3,
        "flex":"1 1 auto"
      }
    },
    "connections":{
      "text":"FileField$content"
    }
  },
  "TextField":{
    "type":"$anewLibrary/Fields/Atoms/TextField",
    "container":"Panel#Container",
    "state":{
      "label":"Title:",
      "style":{
        "order":0,
        "padding":"var(--size-2)",
        "flex":"1 1 auto"
      }
    },
    "connections":{
      "value":"JSONata$result"
    }
  },
  "FileField":{
    "type":"$anewLibrary/Fields/Atoms/FileField",
    "container":"Panel#Container",
    "state":{
      "type":"*.jpg",
      "accept":"",
      "label":"Upload file:",
      "button":"Choose",
      "style":{
        "order":1,
        "flex":"0 0 auto"
      }
    }
  },
  "Panel":{
    "type":"$anewLibrary/Layout/Atoms/Panel",
    "container":"Container",
    "state":{
      "layout":"row",
      "style":{
        "order":1,
        "flex":"0 0 auto"
      }
    }
  },
  "JSONata":{
    "type":"$anewLibrary/Json/Atoms/JSONata",
    "container":"Container",
    "state":{
      "expression":"$substringBefore($, '.')",
      "style":{
        "order":7
      }
    },
    "connections":{
      "json":[
        "FileField$title"
      ]
    }
  }
};
