export const atom = (log, resolve) => ({
/**
 * @license
 * Copyright 2023 NeonFlan LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
async shouldUpdate({library, query}, state) {
  return library && query;
},
async update({library, query}, state, {service, isDirty}) {
  if (query && !isDirty('query')) {
    log.warn('query came again!')
    return;
  }
  const result = await service('PolymathService', 'Ask', {library, query});
  return {query, result, completion: result.completion};
}
});
