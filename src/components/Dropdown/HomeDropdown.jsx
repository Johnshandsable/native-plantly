import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// MATERIAL UI
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Select from '@material-ui/core/Select';

function HomeDropdown({ plant, dropdownList }) {
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
          trefle_slug: plant.image.slug,
          section_id: dropdownSelection,
        },
      });
    }
  };

  const handleSelectionChange = (evt) => {
    console.log(evt.target.value);
    setDropdownSelection(evt.target.value);
  };

  return (
    <div>
      <Button
        size="small"
        color="primary"
        onClick={handleSubmitToGardenSection}
        endIcon={<PlaylistAddIcon />}
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

export default HomeDropdown;
