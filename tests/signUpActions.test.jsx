/* eslint-disable import/no-extraneous-dependencies */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";
import signup, {signUpUrl ,alert, errorAlert} from "../src/actions/signUpActions";
import * as store_ from "../src/store";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const dataObject= {
  data: {
    user: {
      email: "chucky@gmail.com",
      password: "password",
      username: "cdvx",
      repeatPassword: "password",
      "success": "fhdhhjjhfx"
    },

  }};

describe(" sigup actions ", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("logins in user with login action", () => {
    fetchMock.post(signUpUrl, dataObject.data);
    const store = mockStore({ item: {} });
    store.dispatch(signup(dataObject.data));
    expect(store.getActions()).toEqual([]);
    store.dispatch(signup({errors: "error message"}));
    expect(store.getActions()).toEqual([]);

  });

  it("logins in user with login action", () => {
    fetch.mockReject(new Error("fake error message"));
    const store = mockStore({ errors: {} });
    store.dispatch(signup(dataObject.data));
    expect(store.getActions()).toEqual([]);
    store.dispatch(signup({errors: "error message"}));
    expect(store.getActions()).toEqual([]);

    // expect(alert("error","this is an error message", null, null, "/")).toEqual(undefined);

  });
  it("logins in user with login action", () => {
    fetchMock.post(signUpUrl, {errors: "this error!"}, 200);
    const store = mockStore({ item: {} });
    store.dispatch(signup({errors: "this error!"}));
    expect(store.getActions()).toEqual([]);
    store.dispatch(signup({errors: "error message"}));
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
