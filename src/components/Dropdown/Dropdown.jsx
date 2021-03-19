import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// MATERIAL UI
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function Dropdown({ plant }) {
  const dispatch = useDispatch();
  const dropdownList = useSelector((store) => store.garden.gardenReducer);
  const [dropdownSelection, setDropdownSelection] = useState('None');

  useEffect(() => {
    getGardenDropdown();
    if (dropdownList === undefined) {
      setDropdownSelection('None');
    } else {
      setDropdownSelection(dropdownList[0].id);
    }
  }, []);

  const getGardenDropdown = () => {
    dispatch({
      type: 'GET_DROPDOWN',
    });
  };

  const handleSubmitToGardenSection = () => {
    if (dropdownSelection === '') {
      // TODO: Handle this better
      return;
    } else {
      dispatch({
        type: 'ADD_PLANT',
        payload: {
          trefle_slug: plant.image.slug,
          natureserve_id: plant.natureServeid,
          section_id: dropdownSelection,
        },
      });
    }
  };

  const handleSelectionChange = (evt) => {
    setDropdownSelection(evt.target.value);
  };

  return (
    <div>
      <Button
        size="small"
        color="primary"
        onClick={handleSubmitToGardenSection}
      >
        Add to List
      </Button>
      {dropdownList !== undefined ? (
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

export default Dropdown;
