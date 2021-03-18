import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// MATERIAL UI
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function Dropdown() {
  const dispatch = useDispatch();

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
    <Select labelId="demo-customized-select-label" id="demo-customized-select">
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {/* {this.props.items.map((item) => (
        <MenuItem key={item.value} {...item} />
      ))} */}
    </Select>
  );
}

export default Dropdown;
