import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import renderer from "react-test-renderer";
import FriendRow from "../components/FriendRow";

configure({ adapter: new Adapter() });
test("Friend List Snapshot", () => {
  const component = renderer.create(
    <FriendRow friend={[{ id: "1", name: "kav", isFav: true }]}></FriendRow>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("FriendRow toggeles boolean isFav on click event", () => {
  const friendData = {
    id: 1,
    name: "kavya",
    isFav: false,
  };
  const handleAddToFav = jest.fn().mockImplementation(() => {
    friendData.isFav = !friendData.isFav;
  });
  // Render a checkbox with label in the document
  const checkbox = shallow(
    <FriendRow friend={friendData} handleAddToFav={handleAddToFav} />
  );

  expect(friendData.isFav).toEqual(false);

  checkbox.find("span").at(0).simulate("click");

  expect(friendData.isFav).toEqual(true);
});

test("FriendRow deletes friend on click event", () => {
  let friendData = [
    {
      id: 1,
      name: "kavya",
      isFav: false,
    },
  ];
  const handleRemoveFriend = jest
    .fn()
    .mockImplementation((id = friendData[0].id) => {
      friendData = friendData.filter((friend) => {
        if (friend.id === id) {
          return false;
        }
      });
    });
  window.confirm = jest.fn(() => true);
  // Render a checkbox with label in the document
  const checkbox = shallow(
    <FriendRow friend={friendData[0]} handleRemoveFriend={handleRemoveFriend} />
  );

  expect(friendData.length).toEqual(1);

  checkbox.find("span").at(1).simulate("click");
  expect(window.confirm).toBeCalled();

  expect(friendData.length).toEqual(0);
});
