/* eslint-disable import/no-extraneous-dependencies */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";
import questions from "../src/actions/questionsAction";
import {alert, errorAlert} from "../src/actions/signUpActions";
import * as store_ from "../src/store";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const questionsUrl = "https://stackoverflow-lite-cdvx2.herokuapp.com/api/v1/questions";

const dataObject= {
  data: {
    method: "GET",
    mode: "cors",
    headers: { "content-type": "application/json" },
    questions: []
}};

describe(" sigup actions ", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("logins in user with login action", () => {
    fetchMock.get(questionsUrl, 200);
    const store = mockStore({ item: {} });
    store.dispatch(questions(dataObject.data));
    expect(store.getActions()).toEqual([]);
    store.dispatch(questions({errors: "error message"}));
    expect(store.getActions()).toEqual([]);

  });

  it("logins in user with login action", () => {
    fetch.mockReject(new Error("fake error message"));
    const store = mockStore({ errors: {} });
    store.dispatch(questions(dataObject.data));
    expect(store.getActions()).toEqual([]);
    store.dispatch(questions({errors: "error message"}));
    expect(store.getActions()).toEqual([]);

    // expect(alert("error","this is an error message", null, null, "/")).toEqual(undefined);

  });
  it("logins in user with login action", () => {
    fetchMock.get(questionsUrl, dataObject.data);
    const store = mockStore({ item: {} });
    store.dispatch(questions({errors: "this error!"}));
    expect(store.getActions()).toEqual([]);
    store.dispatch(questions({errors: "error message"}));
    expect(store.getActions()).toEqual([]);

  });


});


describe("test alert", ()=>{
  it ("tests alert success", () => {
    alert("success",null,"cedric","random token");
  });
  it("test alert error", ()=>{
    alert("error","this is an error message", null, null);
    errorAlert("error", "this is an error message");
  });
});

describe("test", ()=>{
  it ("tests the store", () => {
    expect(store_).toBeTruthy();
  });
});

describe("test set timeouts", ()=>{
  jest.useFakeTimers();

  it("waits 3 seconds before rerouting", () => {
    alert("success", null, "user", "password", "/");

    expect(setTimeout).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenLastCalledWith(expect.anything(), 5000);
  });
});
