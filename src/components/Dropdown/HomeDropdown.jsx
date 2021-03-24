import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// MATERIAL UI
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
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

  // event handlers
  const handleSelectionChange = (evt) => {
    setDropdownSelection(evt.target.value);
  };

  return (
    <div className="dropdown-home">
      {dropdownList !== undefined && dropdownList.length > 0 ? (
        <Select
          style={{
            marginRight: 15,
            color: '#0984e3',
          }}
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
      <Button
        size="small"
        color="primary"
        onClick={handleSubmitToGardenSection}
        endIcon={<AddIcon />}
      >
        Add to Garden
      </Button>
    </div>
  );
}

export default HomeDropdown;
