import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// MATERIAL UI
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function Dropdown() {
  const dispatch = useDispatch();
  const dropdownList = useSelector((store) => store.garden.gardenReducer);

  useEffect(() => {
    getGardenDropdown();
  }, []);

  const getGardenDropdown = () => {
    console.log('grabbing dropdown selections');
    dispatch({
      type: 'GET_DROPDOWN',
    });
  };

  return (
    <Select defaultValue="None">
      <MenuItem>
        <em>None</em>
      </MenuItem>
      {dropdownList.map((dropdownItem, i) => (
        <MenuItem value={dropdownItem.name} key={i}>
          {dropdownItem.name}
        </MenuItem>
      ))}
    </Select>
  );
}

export default Dropdown;
