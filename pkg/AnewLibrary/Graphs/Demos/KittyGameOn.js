/**
 * @license
 * Copyright 2023 Atom54 LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

// TODO: This is WIP - not fully ported yet.

export const graph = {
  "meta":{
    "id":"KittyGameOn",
  },
  "PixiApp":{
    "type":"$anewLibrary/PixiJs/Atoms/PixiApp",
    "container":"Panel$panel#Container"
  },
  "PixiGems":{
    "type":"$anewLibrary/Games/Atoms/PixiGems",
    "container":"PixiApp$PixiApp#Container"
  },
  "PixiSprite":{
    "type":"$anewLibrary/PixiJs/Atoms/PixiSprite",
    "container":"PixiApp$PixiApp#Container"
  },
  "Panel":{
    "type":"$anewLibrary/Layout/Atoms/Panel",
    "container":"Container"
  },
  "Data":{
    "type":"$anewLibrary/Data/Atoms/Data",
    "container":"Container"
  },
  "KittensBundle":{
    "type":"$anewLibrary/Data/Atoms/Data",
    "container":"Container"
  },
  "Image":{
    "type":"$anewLibrary/Media/Atoms/Image",
    "container":"Container"
  },
  "PupsBundle":{
    "type":"$anewLibrary/Data/Atoms/Data",
    "container":"Container"
  },
  "KittensBundle2":{
    "type":"$anewLibrary/Data/Atoms/Data",
    "container":"Container"
  },
  "state":{
    "Main$designer$disabled":true,
    "Main$designer$style":"width: auto; height: auto;",
    "Main$panel$canvasLayout":"column",
    "PixiGems$PixiGems$cols":5,
    "PixiGems$PixiGems$rows":4,
    "PixiGems$PixiGems$size":176,
    "PixiGems$PixiGems$margin":1,
    "Panel$panel$layout":"column",
    "Main$designer$layout":{
      "PixiApp":{
        "l":16,
        "t":80,
        "w":753,
        "h":513,
        "flex":"",
        "width":{
          
        },
        "height":{
          
        },
        "order":"2",
        "backgroundColor":"",
        "position":"relative"
      },
      "PixiGems":{
        "l":208,
        "t":32,
        "w":469,
        "h":487,
        "flex":"",
        "width":"auto",
        "height":"auto",
        "order":"3",
        "position":""
      },
      "Main":{
        "l":0,
        "t":0,
        "w":478,
        "h":64
      },
      "PixiSprite":{
        "l":32,
        "t":160,
        "w":162,
        "h":176,
        "height":{
          
        },
        "width":{
          
        },
        "display":"none"
      },
      "Panel":{
        "l":0,
        "t":0,
        "w":969,
        "h":647,
        "flex":"",
        "width":{
          
        },
        "order":"2",
        "position":"relative"
      },
      "Data":{
        "l":32,
        "t":32,
        "w":132,
        "h":132,
        "width":"auto"
      },
      "KittensBundle":{
        "l":82,
        "t":82,
        "w":132,
        "h":132,
        "width":"auto"
      },
      "PixiSprite2":{
        "l":48,
        "t":192,
        "w":672,
        "h":448,
        "height":"auto",
        "width":"auto",
        "display":"",
        "flex":"",
        "position":""
      },
      "Image":{
        "l":64,
        "t":16,
        "w":868,
        "h":525,
        "width":{
          
        },
        "position":"absolute"
      }
    },
    "PixiApp$PixiApp$active":true,
    "PixiSprite$PixiSprite$from":"../Library/Assets/kittens/logo.png",
    "PixiSprite$PixiSprite$r":0,
    "Data$Data$json":{
      "sprite0":"$anewLibrary/assets/gems/stone_blue.png",
      "sprite1":"$anewLibrary/assets/gems/stone_green.png",
      "sprite2":"$anewLibrary/assets/gems/stone_pink.png",
      "sprite3":"$anewLibrary/assets/gems/stone_yellow.png"
    },
    "KittensBundle$Data$json":{
      "sprite0":"$anewLibrary/Assets/kittens/kitten0.png",
      "sprite1":"$anewLibrary/Assets/kittens/kitten1.png",
      "sprite2":"$anewLibrary/Assets/kittens/kitten2.png",
      "sprite3":"$anewLibrary/Assets/kittens/kitten3.png"
    },
    "Image$image$image":{
      "url":"../Library/Assets/kittens/cats.png"
    },
    "PupsBundle$Data$json":{
      "sprite0":"$anewLibrary/Assets/pups/pup0.png",
      "sprite1":"$anewLibrary/Assets/pups/pup1.png",
      "sprite2":"$anewLibrary/Assets/pups/pup2.png",
      "sprite3":"$anewLibrary/Assets/pups/pup3.png"
    },
    "KittensBundle2$Data$json":{
      "sprite0":"$anewLibrary/Assets/kittens/cat2_0.png",
      "sprite1":"$anewLibrary/Assets/kittens/cat2_1.png",
      "sprite2":"$anewLibrary/Assets/kittens/cat2_2.png",
      "sprite3":"$anewLibrary/Assets/kittens/cat2_3.png"
    }
  },
  "connections":{
    "PixiGems$PixiGems$bundle":"KittensBundle2$Data$value"
  }
};