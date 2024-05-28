import { selectUserEmail, selectUserName } from '@entities/user';
import { useAppSelector } from '@shared/lib/store/redux-hooks';

export function Contact() {
  const userInfo = useAppSelector(selectUserName);
  const userEmail = useAppSelector(selectUserEmail);

  return (
    <div id="contact">
      <div>
        <p>{userInfo}</p>
        <p>{userEmail}</p>
      </div>
    </div>
  );
}
