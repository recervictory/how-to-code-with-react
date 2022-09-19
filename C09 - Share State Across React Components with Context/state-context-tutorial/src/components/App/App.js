import Navigation from "../Navigation/Navigation";
import SaladMaker from "../SaladMaker/SaladMaker";
import UserContext from "../User/User";

const user = {
  name: "Victor",
  favorites: ["avocado", "carrot"],
};

//* UserContext is acting as a standard React component. This component will take a single prop called value.

function App() {
  return (
    <UserContext.Provider value={user}>
      <Navigation />
      <SaladMaker />
    </UserContext.Provider>
  );
}

export default App;
