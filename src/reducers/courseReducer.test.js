import expect from 'expect';
import courseReducer from './courseReducers';
import * as actions from '../actions/courseActions';


describe('Course Reducer', ()=>{
  it('should add when passed CREATE_COURSES_SUCCESS', function () {
    // arrange
    const initialState = [
      { title: 'A' },
      { title: 'B' }
    ]

    const newCourse = { title: 'C' };
    const action = actions.createCourseSuccess(newCourse);

    //act
    const newState = courseReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
  });
});
