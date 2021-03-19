import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function NavigateHomeButton() {
  return (
    <Button color="primary" variant="outlined" component={Link} to="/home">
      Go Home
    </Button>
  );
}

export default NavigateHomeButton;
