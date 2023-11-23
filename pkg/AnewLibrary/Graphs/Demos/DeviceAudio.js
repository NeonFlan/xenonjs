/**
 * @license
 * Copyright 2023 Atom54 LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

const graph = {
  "meta":{
    "id":"DeviceAudio"
  },
  "DeviceUx27":{
    "type":"$anewLibrary/Media/Atoms/DeviceUx",
    "container":"Container",
    "state":{
      "style":{
        "order":"0"
      }
    },
    "connections":{
      "mediaDevices":[
        "MediaStream60$mediaDevices"
      ]
    }
  },
  "MediaStream60":{
    "type":"$anewLibrary/Media/Atoms/MediaStream",
    "container":"Container",
    "state":{
      "streamId":"default",
      "style":{
        "order":2
      },
      "mediaDeviceState":{
        "isCameraEnabled":false,
        "isMicEnabled":false,
        "isAudioEnabled":false
      }
    },
    "connections":{
      "mediaDeviceState":[
        "DeviceUx27$mediaDeviceState"
      ]
    }
  },
  "SpeechRecognizer89":{
    "type":"$anewLibrary/Media/Atoms/SpeechRecognizer",
    "container":"Container",
    "state":{
      "style":{
        "order":3
      },
      "mediaDeviceState":{
        "isCameraEnabled":false,
        "isMicEnabled":false,
        "isAudioEnabled":false
      }
    },
    "connections":{
      "mediaDeviceState":[
        "DeviceUx27$mediaDeviceState"
      ]
    }
  },
  "SpeechSynthesizer71":{
    "type":"$anewLibrary/Media/Atoms/SpeechSynthesizer",
    "container":"Container",
    "state":{
      "style":{
        "order":4
      },
      "mediaDeviceState":{
        "isCameraEnabled":false,
        "isMicEnabled":false,
        "isAudioEnabled":false
      }
    },
    "connections":{
      "mediaDeviceState":[
        "DeviceUx27$mediaDeviceState"
      ]
    }
  }
};