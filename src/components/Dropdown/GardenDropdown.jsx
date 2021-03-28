import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// SWEETALERT
import swal from 'sweetalert';
import Swal from 'sweetalert2';

// CUSTOM COMPONENTS
import CreateNewDropdownButton from '../Buttons/CreateNewDropdownButton';
import GardenTable from '../Tables/GardenTable';

// MATERIAL UI
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

function GardenDropdown() {
  const dispatch = useDispatch();
  const dropdownList = useSelector((store) => store.garden);
  const [dropdownSelection, setDropdownSelection] = useState(
    dropdownList.length ? dropdownList[0].id : null
  );
  const gardenList = useSelector(
    (store) => store.plants.plantsBySectionReducer
  );

  useEffect(() => {
    getGardenDropdown();
  }, []);

  useEffect(() => {
    getPlantsBySection();
  }, [dropdownSelection]);

  // dispatches
  const getGardenDropdown = () => {
    dispatch({
      type: 'GET_DROPDOWN',
    });
  }; // end getGardenDropdown

  const getPlantsBySection = () => {
    console.log('dropdownSelection', dropdownSelection);

    if (dropdownSelection === null) {
      console.log('dropdownSelection is null');
      return;
    }
    dispatch({
      type: 'GET_PLANTS_BY_SECTION',
      payload: {
        data: dropdownSelection,
      },
    });
  };

  // event handlers
  const handleSelectionChange = (evt) => {
    setDropdownSelection(evt.target.value);
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
          payload: {
            name: result.value,
            id: dropdownSelection,
          },
        });
      }
    });
  };

  return (
    <div className="dropdown-garden">
      {/* Dropdown List for Garden Section */}
      {dropdownList.length > 0 ? (
        <Select
          defaultValue={dropdownSelection}
          value={dropdownSelection}
          onChange={(evt) => {
            handleSelectionChange(evt);
          }}
          style={{
            marginLeft: 5,
            marginRight: 5,
          }}
        >
          {dropdownList.map((dropdownItem, index) => (
            <MenuItem
              value={dropdownItem.id}
              key={index}
              style={{
                paddingLeft: 10,
              }}
            >
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
      {/* Edit Button for Garden Section */}
      <Button
        color="primary"
        endIcon={<EditIcon />}
        onClick={renameCurrentSelection}
      >
        Edit Name
      </Button>
      {/* Delete Button for Garden Section */}
      <Button
        style={{
          color: '#e74c3c',
        }}
        endIcon={<DeleteIcon />}
        onClick={handleDeleteCurrentSelection}
      >
        Delete Garden
      </Button>
      <CreateNewDropdownButton />
      {/* Start of Garden Data Processing */}
      {gardenList.length === 0 || gardenList === undefined ? (
        <Typography
          variant="h5"
          style={{
            marginTop: 50,
          }}
        >
          Add plants to your Garden and they will appear below!
        </Typography>
      ) : (
        <GardenTable
          gardenList={gardenList}
          dropdownSelection={dropdownSelection}
        />
      )}
    </div>
  );
}

export default GardenDropdown;
