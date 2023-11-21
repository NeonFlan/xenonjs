export const atom = (log, resolve) => ({
  /**
   * @license
   * Copyright 2023 Atom54 LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  initialize(_, state) {
    state.index = 1;
  },
  async update({index, count, records, submittedRecord}, state, {isDirty}) {
    const indexDirty = isDirty('index'); 
    if (indexDirty && Number(index) >=0) {
      state.index = this.validateIndex(index, this.validateCount(count, records));
    }
    const dirtyRecords = isDirty('records');
    if (records && dirtyRecords) {
      log.debug('consume records');
      state.records = records;
    } else if (submittedRecord && Object.keys(submittedRecord).length) {
      state.records ??= [];
      const storedRecord = state.records[state.index - 1];
      if (!deepEqual(submittedRecord, storedRecord)) {
        state.records[state.index - 1] = {...submittedRecord};
        log.debug('record submitted and output', submittedRecord);
        return {
          record: submittedRecord,
          records: state.records
        };
      }
    }
    if (state.records && (dirtyRecords || indexDirty)) {
      log.debug('record output');
      return {
        ...this.returnRecord(state.index, records),
        records: state.records
      };
    }
  },
  render({count}, state) {
    state.count = count = this.validateCount(count, state.records);
    const index = state.index = this.validateIndex(state.index, count);
    return {count, index};
  },
  onPrev({}, state) {
    state.index--;
    return this.returnRecord(state.index, state.records);
  },
  onNext({}, state) {
    state.index++;
    return this.returnRecord(state.index, state.records);
  },
  onNew({}, state) {
    state.records = [...(state.records ?? []), {}];
    state.index = state.records.length;
    return {records: state.records, ...this.returnRecord(state.index, state.records)};
  },
  onInputChange({eventlet: {value}}) {
    log('on-inputchange:', value);
  },
  validateCount(count, records) {
    count = (Number(count) > 0 ? count : 1);
    count = Math.max(records?.length || count, 1);
    return count;
  },
  validateIndex(index, count) {
    index = Number(index) > 0 ? index : 1;
    index = Math.max(1, Math.min(index, count));
    return index;
  },
  returnRecord(index, records) {
    const record = records?.[this.validateIndex(index, records?.length) - 1];
    if (record) {
      return {record};
    }
  },
  template: html`
  <style>
  </style>
  <div flex toolbar>
    <span flex x3></span>
    <wl-button inverted>&lt;&lt;</wl-button>
    <wl-button inverted on-click="onPrev">&lt;</wl-button>
    <span flex></span>
    <div row>
      <input value="{{index}}" style="width: 3em;" on-change="onInputChange"><span>&nbsp;of&nbsp;</span><span>{{count}}</span>
    </div>
    <span>&nbsp;</span>
    <wl-button inverted on-click="onNew">New</wl-button>
    <span flex></span>
    <wl-button inverted on-click="onNext">&gt;</wl-button>
    <wl-button inverted>&gt;&gt;</wl-button>
    <span flex x3></span>
  </div>
  `
  });
    