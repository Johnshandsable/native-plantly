import { useDispatch } from 'react-redux';
import { useState } from 'react';

// MATERIAL UI
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Select from '@material-ui/core/Select';

function Dropdown({ plant, dropdownList }) {
  const dispatch = useDispatch();
  const [dropdownSelection, setDropdownSelection] = useState(
    dropdownList.length ? dropdownList[0].id : null
  );

  // event handlers
  const handleSubmitToGardenSection = () => {
    if (dropdownSelection === null) {
      console.log('dropdownSelection is null');
      return;
    } else {
      dispatch({
        type: 'ADD_PLANT',
        payload: {
          trefle_slug: plant.slug,
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
        endIcon={<PlaylistAddIcon />}
        onClick={handleSubmitToGardenSection}
      >
        Add to List
      </Button>
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

export default Dropdown;
