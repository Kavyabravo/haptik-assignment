import React from "react";
import renderer from "react-test-renderer";
import UserList from "../components/UserList";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { cleanup } from "@testing-library/react";
// import Link from '../Link.react';

afterEach(cleanup);
configure({ adapter: new Adapter() });
test("User List Snapshot", () => {
  const component = renderer.create(
    <UserList userList={[{ id: "1", name: "kav", isFav: true }]}></UserList>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Number of div created in Userlist component", () => {
  const component = shallow(
    <UserList
      userList={[
        { id: "1", name: "kav", isFav: true },
        { id: "2", name: "kavya", isFav: true },
      ]}
    ></UserList>
  );
  expect(component.find("div").length).toEqual(2);
});
test("UserList selects new friend on a click event", () => {
  const userList = [
    { id: "1", name: "kav", isFav: true },
    { id: "2", name: "kavya", isFav: true },
  ];
  let newFriend = {};
  const handleSelectFriend = jest.fn().mockImplementation(() => {
    newFriend = userList[0];
  });
  // Render a checkbox with label in the document
  const checkbox = shallow(
    <UserList userList={userList} handleSelectFriend={handleSelectFriend} />
  );

  expect(newFriend).toEqual({});

  checkbox.find("div").at(0).simulate("click");

  expect(newFriend).toEqual(userList[0]);
});
