export const atom = (log, resolve) => ({
/**
 * @license
 * Copyright 2023 Atom54 LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
shouldUpdate({layerId}) {
  return Boolean(layerId);
},
async update({layerId, selected}, state, {service}) {
  state.selected = selected;
  state.info = await service('DesignService', 'GetLayerInfo', {layerId});
},
shouldRender({layerId},{info}) {
  return Boolean(layerId && info);
},
render({layerId}, {info, selected, rects}) {
  let edges = [];
  let backEdges = [];
  // for each atom we should make into an AtomGraph node
  const nodables = this.getNodableAtoms(info.atoms);
  // extract edge information from connections
  const {inputs: bindings} = info.connections;
  if (bindings) {
    // search bindings for our key, these are our edges
    nodables.forEach(atom => this.getEdges(bindings, edges, backEdges, atom));
  };
  // remove duplicates
  edges = this.getCleanEdges(edges);
  // atom render models
  const atoms = nodables.map((atom, i) => this.renderAtom(atom, edges, selected, rects, layerId, i));
  return {
    atoms,
    edges
  };
},
getNodableAtoms(atoms) {
  const getDepth = id => id.split('$').length;
  const isNodableType = atom => !atom.id.includes('Panel');
  return atoms
    .filter(atom => getDepth(atom.id) < 4)
    .filter(atom => isNodableType(atom))
    ;
},
getEdges(bindings, edges, backEdges, atom) {
  const getDepth = id => id.split('$').length;
  // search bindings for our key
  for (let [id, binding] of Object.entries(bindings)) {
    if (id.startsWith(atom.id + '$')) {
      // we have edges from here
      edges.push({id, binding});
      // and edges end there
      binding
        .filter(bound => getDepth(bound) < 5)
        .forEach(bound => backEdges.push({bound, id}))
        ;
    }
  }
},
getCleanEdges(edges) {
  // map of atoms bound via connections (reverse of above)
  //const listeners = {};
  // simplify edge list
  const edgeIdClipper = id => id.split('$').slice(0, 3).join('-'); 
  // make clean edges
  const cleanEdges = edges.filter(edge => {
    // first clear the sourceId
    const sourceId = edgeIdClipper(edge.id);
    // then clean all the targetIds
    const cleanBinding = edge.binding.filter(bound => {
      const targetId = edgeIdClipper(bound);
      if (sourceId !== targetId) {
        //((listeners[bound])??=[]).push(sourceId);
        return true;
      };
    });
    if (cleanBinding.length) {
      edge.cleanBinding = [...new Set(cleanBinding)];
      return true;
    }
  });
  //log.debug(listeners, cleanEdges);
  return cleanEdges;
},
renderAtom(atom, edges, selected, rects, layerId, i) {
  const modelify = id => ({name: nameFromId(id)});
  const nameFromId = id => id.split('$').slice(3).join('$');
  const hasPrefix = prefix => id => id.startsWith(prefix + '$');
  //
  const prefixFilter = hasPrefix(atom.id);
  const inputs = edges
    .flatMap(({id, cleanBinding}) => cleanBinding
      .filter(prefixFilter)
      .map(modelify)
    )
    ;
  const outputs = edges
    .filter(({id}) => prefixFilter(id))
    .map(({id}) => modelify(id))
    ;
  //
  const [w, h, stride] = [260, 140, 4];
  return {
    id: atom.id, 
    atomId: atom.id.replace(/\$/g, '-'),
    type: atom.type,
    selected: atom.id === selected,
    displayName: atom.id.slice(layerId.length + 1),
    style: {
      ...this.getAtomRect(w, h, stride, i, rects)
    },
    inputs,
    outputs
  };
},
getAtomRect(w, h, stride, i, rects) {
  const rect = rects?.[i] ?? {l: 0, t: 0};
  let [ox, oy] = [64 + rect.l, 32 + rect.t];
  return {
    left: ox + w*(i%stride) + 'px', 
    top: oy + h*Math.floor(i/stride) + h/3*(Math.sin((i%stride)*Math.PI*.8/2)) + 'px', 
    width: '200px'
  };
},
onAtomSelect({eventlet: {key}}, state, {service}) {
  service('DesignService', 'Select', {atomId: key});
},
onKeyDown({eventlet}, state, {service}) {
  if (['Delete', 'Backspace'].includes(eventlet.key) && state.selected) {
    service('DesignService', 'Delete', {atomId: state.selected});
  }
},
template: html`
<style>
  :host {
    display: flex;
    flex: 1 !important;
    font-size: 12px;
    color: black;
    background-color: var(--theme-color-bg-1);
    border: var(--AtomEditor-border);
    --edge-border: 1px solid #555;
    --mdc-icon-size: 18px;
    --mdc-icon-button-size: 26px;
  }
  mwc-icon-button {
    color: #555;
  }
  [floating] {
    position: absolute;
    top: 0;
    left: 0;
  }
  drop-target {
    height: auto !important;
  }
  atom-graph {
    display: block;
    overflow: visible;
  }
</style>

<drop-target flex scrolling row tabindex="-1" on-target-drop="onAtomTypeDropped" on-keydown="onKeyDown">
  <atom-graph flex atoms="{{atoms}}" edges="{{edges}}" selected="{{selected}}" on-atom-moved="onAtomMoved" on-atom-selected="onAtomSelect"></atom-graph>
</drop-target>

<!-- last, therefore on top -->
<!-- <div floating><slot name="toolbar"></slot></div> -->
`
});