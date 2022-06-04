export const FETCH_DATA = "FETCH_DATA";
export const EDIT_DATA = "EDIT_DATA";
export const DELETE_DATA = "DELETE_DATA";

export const fetchData = (data) => {
  return {
    type: FETCH_DATA,
    payload: data,
  };
};

export const editData = (data) => {
  return {
    type: EDIT_DATA,
    payload: data,
  };
};

export const deleteData = (data) => {
  return {
    type: DELETE_DATA,
    payload: data,
  };
};
