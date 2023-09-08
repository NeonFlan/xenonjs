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
async update({inputData}, {id}, {isDirty, service}) {
  let submit = isDirty('submitTrigger');
  if (inputData && isDirty('inputData')) {
    await service('FormService', 'setValues', {form: id, values: inputData});
    log('inputData:', inputData);
    submit = true;
  }
  if (submit) {
    const data = await service('FormService', 'getValues', {form: id});
    log('submitting', data);
    return {
      columns: this.getColumns(data), 
      row: this.getRow(data)
    };
  }
},
getColumns(data) {
  return data.map(({name}) => ({name: name.split('$')[1]}));
},
getRow(data) {
  const row = {};
  data.forEach(({name, type, value})=> {
    const key = name.split('$')[1];
    row[key] = value;
  });
  return row;
},
onFormFields(inputs, state, {service}) {
  state.schema = service('FormService', 'getSchema', {form: id});
  return {schema};
}
});
