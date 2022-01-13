import * as ActionTypes from './ActionTypes';

export const addStaff = (staffId, name, doB, startDate, department, salaryScale, annualLeave, overTime) => ({
    type: ActionTypes.ADD_STAFF,
    payload: {
        staffId: staffId,
        name: name,
        doB: doB,
        startDate: startDate,
        department: department,
        salaryScale: salaryScale,
        annualLeave: annualLeave,
        overTime: overTime,
        image: '/assets/images/alberto.png'
    }
});