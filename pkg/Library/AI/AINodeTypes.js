/**
 * @license
 * Copyright 2023 Atom54 LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const category = 'AI';

export const AINodeTypes = {
  PersonaChat: {
    category,
    types: {
      PersonaChat$topic: 'String',
      PersonaChat$transcript: 'String',
      PersonaChat$markup: 'String',
      PersonaChat$restart: 'Boolean',
      PersonaChat$rounds: 'Number'
    },
    type: `$library/AI/Nodes/PersonaChatNode`,
    ligature: 'speaker_notes'
  },
  DelmerBot: {
    category,
    types: {
      OpenAIText$prompt: 'String',
      OpenAIText$result: 'String'
    },
    type: `$library/AI/Nodes/DelmerBotNode`,
    ligature: 'robot_2'
  },
  ActionInterpreter: {
    category,
    type: `$library/AI/Nodes/ActionInterpreterNode`,
    ligature: 'translate'
  },
  ActionHandler: {
    category,
    type: `$library/AI/Nodes/ActionHandlerNode`,
    ligature: 'bolt'
  },
  AIClock: {
    category,
    description: 'Requests and renders auto-generated text and image for the current time and selected mood',
    types: {
      AIClock$refresh: 'Nonce',
      AIClock$enabled: 'Boolean',
      AIClock$mood: 'String',
      AIClock$moodValues: ['Joyful','Thoughtful','Pensive','Angry','Bored','Sad','Tired','Surprised','Sleepy','Enthralled','Calm','Relaxed','Restless','Satisfied','Shocked','Sick','Sympathetic','Cheerful','Blank','Blissful','Accepted','Ashamed','Amused','Envious','Loved','Lonely','Weird','Thankful','Grateful','Gloomy','Frustrated','Peaceful','Optimistic','Excited','Enraged','Energetic','Anxious','Annoyed','Content','Good','Drained','Disappointed','Determined','Curious','Crazy','Grumpy','Cranky','Confused','Cold','Rejected','Refreshed','Mad','Loved','Uncomfortable','Relieved','Rejuvenated','Numb','Giggly','Naughty','Mischievous','Hopeful','Happy','Lethargic','Lazy','Jealous','Irritated','Hyper','Bewildered','Tranquil','Exhausted'],
      OpenAIText$context: 'String',
      OpenAIText$contextValues: [
        'Compose a rhyming couplet including the given time',
        'You are the Great Wizard Gandalf, incant a spell about the given time.'
      ]
    },
    type: `$library/AI/Nodes/AIClockNode`,
    ligature: 'nest_clock_farsight_digital'
  },
  AIChat: {
    category,
    types: {
      AIChat$markup: 'MultilineText',
      AIChat$message: 'MultilineText',
      AIChat$messages: '[Message]',
      AIChat$result: 'Pojo'
    },
    type: '$library/AI/Nodes/AIChatNode',
    ligature: 'forum'
  },
  VectorCompare: {
    category,
    type: '$library/AI/Nodes/VectorCompareNode',
    ligature: 'polyline'
  }};