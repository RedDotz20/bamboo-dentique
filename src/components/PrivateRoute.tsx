import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAccessToken = localStorage.getItem('access_token');

  if (isAccessToken) {
    return <>{children}</>;
  }

  return (
    <Navigate
      to="/login"
      replace={true}
    />
  );
};

export default PrivateRoute;
