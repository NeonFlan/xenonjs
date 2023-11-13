export const atom = (log, resolve) => ({
/**
 * @license
 * Copyright 2023 Atom54 LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
initialize(inputs, state, {service}) {
  state.select = atomId => service('DesignService', 'Select', {atomId});
},
update(input, state) {
  // force design-target to update rectangles
  state.refresh = Math.random();
},
// invoked during resize also
onSelect({eventlet: {key, value: {rects}}}, state) {
  state.selections = rects.map(({x, y, width, height}) => ({
    style: `left: ${x}px; top: ${y}px; width: ${width}px; height: ${height}px`
  }));
  state.select(key);
},
// invoked during resize also
onOver({eventlet: {key, value}}, state) {
  // state.highlights = !value.rects ? [] : value.rects.map(({x, y, width, height}) => ({
  //   style: `left: ${x}px; top: ${y}px; width: ${width}px; height: ${height}px`
  // }));
},
onTargetEnter({eventlet}, state, {service}) {
  service('DesignService', 'DesignDragEnter', {eventlet});
},
onTargetLeave({eventlet}, state, {service}) {
  service('DesignService', 'DesignDragLeave', {eventlet});
},
onTargetDrop({eventlet}, state, {service}) {
  service('DesignService', 'DesignDragDrop', {eventlet});
},
template: html`
<style>
  :host {
    position: relative;
  }
  [box], [frame] {
    pointer-events: none;
    background: transparent;
    position: absolute;
    z-index: 1000;
  }
  [handle] {
    pointer-events: all;
    position: absolute;
    width: 8px;
    height: 8px;
    background: transparent;
    border: 2px solid purple;
    cursor: move;
  }
  [selections] [frame] {
    inset: 0;
    border: 2px dashed purple;
  }
  [highlights] > [box]{
    border: 4px dotted orange;
  }
</style>
<design-target flex column datatype="node/type" refresh="{{refresh}}" on-resize="onResize" on-over="onOver" on-select="onSelect" on-target-enter="onTargetEnter" on-target-leave="onTargetLeave" on-target-drop="onTargetDrop">
  <slot name="Container"></slot>
</design-target>
<div selections repeat="transform_box_t">{{selections}}</div>
<div highlights repeat="box_t">{{highlights}}</div>
<template transform_box_t>
  <div box style="{{style}}">
    <div frame></div>
    <div handle style="left: 0; top: 0;"></div>
    <div handle style="right: 0; top: 0;"></div>
    <div handle style="left: 0; bottom: 0;"></div>
    <div handle style="right: 0; bottom: 0;"></div>
  </div>
</template>
<template box_t>
  <div box style="{{style}}"></div>
</template>
`
});
  