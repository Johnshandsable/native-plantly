import { useDispatch } from 'react-redux';

// MATERIAL UI
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
        // console.log('Result: ' + result.value);
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
      size="small"
      color="secondary"
      onClick={handleCreateNewDropdownSelection}
    >
      Create new Garden Section
    </Button>
  );
}

export default CreateNewDropdownButton;
