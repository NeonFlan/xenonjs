export const atom = (log, resolve) => ({
/**
 * @license
 * Copyright 2023 NeonFlan LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
initialize(_, state, {service}) {
  state.id = Math.floor((Math.random()*9+1)*1e5);
  service('FormService', 'registerForm', state.id);
  return {form: state.id};
},
async update({}, {id}, {isDirty, service}) {
  if (isDirty('submitTrigger')) {
    const data = await service('FormService', 'getValues', {form: id});
    log(JSON.stringify(data, null, '  '));
  }
}
});
  