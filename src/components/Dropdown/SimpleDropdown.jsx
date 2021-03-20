import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// SWEETALERT
import swal from 'sweetalert';
import Swal from 'sweetalert2';

// MATERIAL UI
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function SimpleDropdown() {
  const dispatch = useDispatch();
  const dropdownList = useSelector((store) => store.garden);
  const [dropdownSelection, setDropdownSelection] = useState(
    dropdownList[0].id
  );

  useEffect(() => {
    getGardenDropdown();
    getPlantsBySection();
  }, []);

  const getGardenDropdown = () => {
    dispatch({
      type: 'GET_DROPDOWN',
    });
  }; // end getGardenDropdown

  const getPlantsBySection = () => {
    dispatch({
      type: 'GET_PLANTS_BY_SECTION',
      payload: dropdownSelection,
    });
  };

  const handleSelectionChange = (evt) => {
    console.log('CURRENT - ', dropdownSelection);
    console.log('INCOMING VALUE -', evt.target.value);
    setDropdownSelection(evt.target.value);
    console.log('UPDATED - ', dropdownSelection);
    getPlantsBySection();
  };

  const handleDeleteCurrentSelection = (evt) => {
    swal({
      title: 'Are you sure?',
      text: `Once deleted, you will not get back your garden section`,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch({
          type: 'DELETE_DROPDOWN_SECTION',
          payload: dropdownSelection,
        });
        swal('Your garden section is now deleted', {
          icon: 'success',
        });
      } else {
        swal('Your garden section is safe!');
      }
    });
  };

  const renameCurrentSelection = (evt) => {
    Swal.fire({
      title: `Rename your garden section`,
      showCancelButton: true,
      input: 'text',
      inputPlaceholder: 'Write something',
    }).then((result) => {
      if (result.value) {
        dispatch({
          type: 'EDIT_DROPDOWN_SECTION',
          payload: result.value,
        });
      }
    });
  };

  return (
    <div>
      <Button onClick={handleDeleteCurrentSelection}>Delete</Button>
      <Button onClick={renameCurrentSelection}>Edit</Button>
      {dropdownList !== undefined && dropdownList.length > 0 ? (
        <Select
          defaultValue={dropdownList[0].id}
          onChange={handleSelectionChange}
        >
          {dropdownList.map((dropdownItem, index) => (
            <MenuItem value={dropdownItem.id} key={index}>
              {dropdownItem.name}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <Select defaultValue="None" onChange={handleSelectionChange}>
          <MenuItem>
            <em>None</em>
          </MenuItem>
        </Select>
      )}
    </div>
  );
}

export default SimpleDropdown;
