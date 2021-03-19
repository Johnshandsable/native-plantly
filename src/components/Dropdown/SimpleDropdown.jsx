import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// SWEETALERT
import swal from 'sweetalert';

// MATERIAL UI
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function SimpleDropdown({ dropdownList }) {
  const dispatch = useDispatch();
  const [dropdownSelection, setDropdownSelection] = useState(
    dropdownList[0].id || 'None'
  );

  const handleSelectionChange = (evt) => {
    setDropdownSelection(evt.target.value);
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
    console.log('renaming');
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
            <MenuItem value={dropdownItem.id} key={dropdownItem.id}>
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
