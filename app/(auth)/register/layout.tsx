import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sign up | GShopper',
    description: 'Compare Your Products',
}

const SignUpLayout = ({
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

export default SignUpLayout;