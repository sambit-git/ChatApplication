import { Provider } from "react-redux";
import store from "../redux-store/store";

import ContactsPanel from "../components/contacts/ContactsPanel";
import ChatPanel from "../components/chat-area/ChatsPanel";

function Chat() {
  // login("sambit", "pass");
  return (
    <Provider store={store}>
      <ContactsPanel />
      <ChatPanel />
    </Provider>
  );
}

export default Chat;
