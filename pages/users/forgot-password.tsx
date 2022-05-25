import UnAuthContent from '@/components/users/UnAuthContent';
import SendPasswordResetEmailForm from '@/components/users/SendPasswordResetEmailForm';

export default function ForgotPassword() {
  return (
    <div>
      <h1>Forgot Your Password?</h1>
      <UnAuthContent>
        <SendPasswordResetEmailForm />
      </UnAuthContent>
    </div>
  );
}
