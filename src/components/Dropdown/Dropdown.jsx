import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// MATERIAL UI
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function Dropdown({ plant }) {
  const dispatch = useDispatch();
  const dropdownList = useSelector((store) => store.garden.gardenReducer);
  const [dropdownSelection, setDropdownSelection] = useState('');

  useEffect(() => {
    getGardenDropdown();
  }, []);

  const getGardenDropdown = () => {
    // console.log('grabbing dropdown selections');
    dispatch({
      type: 'GET_DROPDOWN',
    });
  };

  const handleSubmitToGardenSection = () => {
    if (dropdownSelection === '') {
      // TODO: Handle this better
      return;
    } else {
      // console.log('plant', { plant });
      // console.log(plant.image.slug, plant.natureServeid, dropdownSelection);
      dispatch({
        type: 'ADD_PLANT',
        payload: {
          trefle_slug: plant.image.slug,
          natureserve_id: plant.natureServeId,
          section_id: dropdownSelection,
        },
      });
    }
  };

  const handleSelectionChange = (evt) => {
    setDropdownSelection(evt.target.value);
  };

  return (
    <>
      <Button
        size="small"
        color="primary"
        onClick={handleSubmitToGardenSection}
      >
        Add to List
      </Button>
      <Select defaultValue="None" onChange={handleSelectionChange}>
        <MenuItem>
          <em>None</em>
        </MenuItem>
        {dropdownList.map((dropdownItem) => (
          <MenuItem value={dropdownItem.id} key={dropdownItem.id}>
            {dropdownItem.name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}

export default Dropdown;
