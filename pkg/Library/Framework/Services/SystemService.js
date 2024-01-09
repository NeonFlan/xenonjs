/**
 * @license
 * Copyright 2023 Atom54 LLC
 */
import * as Controller from '../../Framework/Controller.js';

const log = logf('SystemService', '#512E5F', 'white');

export const SystemService = {
  GetStateValue(atom, data) {
    const {layer} = atom;
    const key = layer.id + '$' + data.stateKey;
    return layer.controller.state[key];
  },
  SetStateValue(atom, data) {
    const bits = data.stateKey.split('$');
    const propName = bits.pop();
    const atomId = [atom.layer.id, ...bits].join('$');
    return Controller.writeValue(atom.layer.controller, atomId, propName, data.value);
  },
  // GetState(atom, data) {
  //   const state = {};
  //   const raw = atom.layer.controller.state;
  //   Object.entries(raw).forEach(([key, value]) => {
  //     const keys = key.split('$');
  //     const level = state;
  //     const name = keys.pop();
  //     for (const strata of keys) {
  //       level = (level[strata] ??= {});
  //     }
  //     level[name] = value;
  //   });
  //   return state;
  // }
};