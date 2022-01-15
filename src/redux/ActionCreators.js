import * as ActionTypes from './ActionTypes';
import { STAFFS } from '../shared/staffs';
import { baseUrl } from '../shared/baseUrl';
//add new staff
export const addStaff = (staff) => ({
    type: ActionTypes.ADD_STAFF,
    payload: staff
        
});
export const postStaff = (staff) => (dispatch) => {
    return fetch(baseUrl + 'staffs', {
        method: "POST",
        body: JSON.stringify(staff),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addStaff(response)))
    .catch(error =>  { console.log('post staffs', error.message); alert('Your staff could not be posted\nError: '+error.message); });
}
//delete
export const deleteStaffSuccess = (id) => ({
  type: ActionTypes.DELETE_STAFF_SUCCESS,
    payload: id
});
export const deleteStaffLoading = () => ({
  type: ActionTypes.DELETE_STAFF_LOADING,
    
});
export const deleteStaff = (id) => (dispatch) =>{
  return fetch(baseUrl + `staffs/${id}`,{
    method: 'DELETE',
  }).then(() => dispatch(deleteStaffSuccess(id)));
}


//fetch staffs
export const fetchStaffs = () => (dispatch) => {

    dispatch(staffsLoading(true));

    return fetch(baseUrl + 'staffs')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(staffs => dispatch(addStaffs(staffs)))
    .catch(error => dispatch(staffsFailed(error.message)));
}
export const staffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
});

export const staffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
});

export const addStaffs = (staffs) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
});

//fetch department
export const fetchDepartments = () => (dispatch) => {

    dispatch(departmentsLoading(true));

    return fetch(baseUrl + 'departments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(departments => dispatch(addDepartments(departments)))
    .catch(error => dispatch(departmentsFailed(error.message)));
}
export const departmentsLoading = () => ({
    type: ActionTypes.DEPARTMENTS_LOADING
});

export const departmentsFailed = (errmess) => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errmess
});

export const addDepartments = (departments) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: departments
});

//fetch staff salary
export const fetchStaffsSalary = () => (dispatch) => {

    dispatch(staffsSalaryLoading(true));

    return fetch(baseUrl + 'staffsSalary')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(staffsSalary => dispatch(addStaffsSalary(staffsSalary)))
    .catch(error => dispatch(staffsSalaryFailed(error.message)));
}
export const staffsSalaryLoading = () => ({
    type: ActionTypes.STAFFSSALARY_LOADING
});

export const staffsSalaryFailed = (errmess) => ({
    type: ActionTypes.STAFFSSALARY_FAILED,
    payload: errmess
});

export const addStaffsSalary = (staffsSalary) => ({
    type: ActionTypes.ADD_STAFFSSALARY,
    payload: staffsSalary
});
