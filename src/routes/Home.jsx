import useCurrentUserData from '../utils/useCurrentUserData';
import SignInButton from '../SignInButton';
import SignOutButton from '../SignOutButton';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
const Home = () => {
  const { userData, setUserData } = useCurrentUserData();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserData({ username: user.displayName, email: user.email, uid: user.uid });
    } else {
      setUserData({ username: 'NONE', email: 'NONE', uid: 'NONE' });
    }
  });
  return (
    <div>
      <button
        onClick={() => {
          setUserData({ username: 'John Doe' });
        }}>
        {userData?.username ?? 'click to update user name'}
      </button>
      HOME
      <div>
        <SignInButton></SignInButton>
        <SignOutButton></SignOutButton>
      </div>
    </div>
  );
};

export default Home;
