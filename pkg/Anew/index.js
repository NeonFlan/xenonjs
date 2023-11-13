/**
 * @license
 * Copyright 2023 Atom54 LLC
 */
import './config.js';
import {logf} from '../Library/CoreXenon/Reactor/Atomic/js/logf.js';
import * as Env from '../AnewLibrary/Framework/Env.js';
import * as Controller from '../AnewLibrary/Framework/Controller.js';
import * as Services from '../AnewLibrary/Framework/services.js';
import {start} from 'xenonjs/Library/Common/start.js';
import {Graphs} from './graphs.js';
import {createComposer} from './composer.js';
import '../AnewLibrary/Spectrum/Dom/spectrum-tab-panels.js';
import {LayerService} from '../AnewLibrary/Graph/Services/LayerService.js';
import {ProjectService} from '../AnewLibrary/Design/Services/ProjectService.js';
import {DesignService} from '../AnewLibrary/Design/Services/DesignService.js';
import {JsonRepairService} from '../AnewLibrary/JsonRepair/Services/jsonrepairService.js';
import * as Project from '../AnewLibrary/Design/Services/ProjectService.js';

const log = logf('Index', 'magenta');

start(async xenon => {
  // create a xenon environment
  const env = globalThis.env = Env.createEnv(xenon, Services.onservice, onrender);
  Services.addServices({ProjectService, LayerService, DesignService, JsonRepairService});
  // make a controller
  const main = await Env.createController(env, 'main');
  // add layers
  const build = await Controller.reifyLayer(main, main.layers, 'build', Graphs.Build);
  // load project
  await Project.initProject(build);
});

const onrender = async (host, packet) => {
  const {layer} = host;
  const {controller} = layer;
  if (!controller.composer) {
    const root = window[layer.root || layer.id.replace(/\$/g, '_')] || window.root;
    controller.composer = createComposer(controller.uxEventHandler, root);
  }
  if (controller.composer) {
    // TODO(sjmiles): doing this to avoid walking each sublayer to set all the 'root' containers; which way is simpler?
    packet.container = (host.container === 'root' && layer.host && `${layer.host.id}#Container`) || host.container; 
    const style = controller.state[`${host.id}$style`];
    if (style) {
      ((packet.content ??= {}).model ??= {}).style = style;
    }
    controller.composer.render(packet);
  }
};