import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sign in | GShopper',
    description: 'Compare Your Products',
}

const SignInLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      {children}
    </>
  );
};

export default SignInLayout;