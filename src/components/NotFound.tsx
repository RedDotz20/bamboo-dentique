import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 1500);
  }, []);

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl font-bold tracking-widest">404 Not Found</h1>
      <h3>Redirecting To Landing Page ...</h3>
    </section>
  );
}
