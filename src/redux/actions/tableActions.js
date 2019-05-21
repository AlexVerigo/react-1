export const addRow = () => ({
  type: 'ADD_TRACK',
});

export const deleteAllRows = () => ({
  type: 'DELETE_ALL_ROWS',
});

export const deleteRow = id => ({
  type: 'DELETE_ROW',
  payload: id,
});

export const toggleAll = isDisabled => ({
  type: 'TOGGLE_ALL_ROWS',
  payload: isDisabled,
});

export const toggleRow = (id, isDisabled) => ({
  type: 'TOGGLE_ROW',
  payload: {
    id,
    isDisabled,
  },
});

export const changeRow = (event, fieldId, fieldName) => ({
  type: 'CHANGE_ROW',
  payload: {
    value: event.target.value,
    fieldId,
    fieldName,
  },
});
