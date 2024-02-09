import SearchBar from '../components/SearchBar';
import useCurrentUserData from '../utils/useCurrentUserData';
import SignInButton from '../SignInButton';
import SignOutButton from '../SignOutButton';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Home = () => {
  const { userData, setUserData } = useCurrentUserData();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserData({ username: user.displayName, email: user.email, userid: user.uid });
    } else {
      setUserData(undefined);
    }
  });
  return (
    <div>
      <SearchBar />
      <p>Name: {userData?.username ?? 'None'}</p>
      HOME
      <div>
        <SignInButton></SignInButton>
        <SignOutButton></SignOutButton>
      </div>
    </div>
  );
};

export default Home;
