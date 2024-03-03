import "./App.css";

import { Provider } from "react-redux";
import store from "./redux-store/store";

import ContactsPanel from "./components/contacts/ContactsPanel";
import ChatPanel from "./components/chat-area/ChatsPanel";
import { login } from "./services/auth.services";

function App() {
  login("sambit", "****");
  return (
    <Provider store={store}>
      <ContactsPanel />
      <ChatPanel />
    </Provider>
  );
}

export default App;
