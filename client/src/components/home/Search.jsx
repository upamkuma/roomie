import { Box, TextField } from '@mui/material';
import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const text = e.target.value;
    setValue(text);
    onSearch(text);         // send search text to parent
  };

  return (
    <Box sx={{ width: '100%', mb: 3 }}>
      <TextField
        label="Search by name"
        placeholder="Type to filter posts..."
        variant="outlined"
        fullWidth
        size="small"
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
};

export default Search;
