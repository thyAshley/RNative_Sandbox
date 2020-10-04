import React from "react";
import NavigationStack from "./src/navigator/Navigator";
import OfflineNotice from "./src/components/OfflineNotice";

const App = () => {
  return (
    <>
      <OfflineNotice />
      {NavigationStack}
    </>
  );
};

export default App;
