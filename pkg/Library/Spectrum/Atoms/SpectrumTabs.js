export const atom = (log, resolve) => ({
/**
 * @license
 * Copyright 2023 Atom54 LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
update(inputs, state) {
  state.tabs = [1, 2, 3, 4, 5].map(i => ({
    //label: `Tab ${i}`,
    value: i-1,
    content: `Tab ${i}`
  }));
},
onChange({eventlet: {value}}) {
  return {tab: value};
},
template: html`
<style>
  :host {
    padding-left: 8px;
  }
</style>
<sp-tabs-overflow>
  <sp-tabs selected="1" size="m" on-change="onChange" repeat="tabs_t">{{tabs}}</sp-tabs>
</sp-tabs-overflow>
<template tabs_t> 
  <sp-tab label="{{label}}" value="{{value}}">{{content}}</sp-tab>
</template>
`
});
