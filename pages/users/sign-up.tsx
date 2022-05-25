import UnAuthContent from '@/components/users/UnAuthContent';
import SignUpForm from '@/components/users/SignUpForm';

export default function SignUp() {
  return (
    <div>
      <UnAuthContent>
        <SignUpForm />
      </UnAuthContent>
    </div>
  );
}
