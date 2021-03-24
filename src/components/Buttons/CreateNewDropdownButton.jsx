import { useDispatch } from 'react-redux';

// MATERIAL UI
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

// SWEETALERT
import Swal from 'sweetalert2';

function CreateNewDropdownButton() {
  const dispatch = useDispatch();

  const handleCreateNewDropdownSelection = (evt) => {
    console.log('creating new dropdown selection');
    Swal.fire({
      title: 'Enter a new garden name',
      showCancelButton: true,
      input: 'text',
      inputPlaceholder: 'Write something',
    }).then((result) => {
      if (result.value) {
        dispatch({
          type: 'ADD_DROPDOWN_SECTION',
          payload: {
            name: result.value,
          },
        });
      }
    });
  };

  return (
    <Button
      color="secondary"
      endIcon={<AddIcon />}
      onClick={handleCreateNewDropdownSelection}
    >
      New Garden
    </Button>
  );
}

export default CreateNewDropdownButton;
