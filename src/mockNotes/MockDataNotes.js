import "./MockDataNotes.css";

function MockDataNotes() {
  return (
    <div className="mock-data-container drop-shadow curled">
      <p>Mock Notes</p>
      <ul>
        <li>
          Making use of two mock APIs. 1. to fetch <b>MyFriendList</b>(for
          displaying friend list) 2. to fetch <b>UserList</b>(for searching)
        </li>
        <li>
          On typing any string in the search bar, the search engine will try to
          first search for the name in the user list.
          <ul>
            <li>
              On finding matched friend from userlist if user presses the key
              "ENTER", then the matched friend from userlist will be added to
              myfriendlist.
            </li>
            <li>
              On finding partially matched friend from userlist if user presses
              the key "ENTER", then the top element in the list on screen will
              be added to myfriendlist.
            </li>
            <li>
              And on finding no matched friend from the UserList if user presses
              "ENTER" key, the typed string will be added as new friend to the
              MyFriendList
            </li>
          </ul>
        </li>
        <li>
          implemeneted sorting. Recent added friend will show on the top but
          after favorite friends.
        </li>
      </ul>
    </div>
  );
}

export default MockDataNotes;
