export const atom = (log, resolve) => ({
/**
 * @license
 * Copyright 2023 NeonFlan LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
async update({graph}, state, {service}) {
  if (state.layerId) {
    //await service('GraphService', 'DestroyLayer', {layerId});
  }
  if (graph && !state.layerId) {
    state.layerId = await service('GraphService', 'CreateLayer', {graph});
  }
},
template: html`
<style>
  :host {
    padding: 8px;
  }
  ::slotted(*) {
    flex: 1 !important;
    width: auto !important;
    height: auto !important;
  }
</style>
<slot name="Container">
`
});