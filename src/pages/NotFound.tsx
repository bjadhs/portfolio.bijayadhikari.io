import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary">
      <div className="text-center glass p-12 rounded-2xl max-w-md mx-4">
        <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
          404
        </div>
        
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Page Not Found
        </h1>
        
        <p className="text-text-secondary mb-6">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        
        <div>
          <Button onClick={() => navigate('/')}>
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;