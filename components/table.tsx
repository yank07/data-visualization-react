
import React from 'react';
import Button from '../shared/Button';
import DataTable, { createTheme } from 'react-data-table-component';
import styled from 'styled-components';


const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField id="search" type="text" placeholder="Filter By Name" value={filterText} onChange={onFilter} />
    <ClearButton type="button" onClick={onClear}>X</ClearButton>
  </>
);


const columns = [
  {
    name: 'County',
    selector: 'residence_geo',
    sortable: true,
  },
  {
    name: 'Median Income',
    selector: 'median_hh_inc_placeofresidence_ia',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
];


export default function Table({
    data
  }: {
    data: Array<any>
  }) {

    const [filterText, setFilterText] = React.useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
  const filteredItems = data.filter(item => item.residence_geo && item.residence_geo.toLowerCase().includes(filterText.toLowerCase()));
  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };
    return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
  }, [filterText, resetPaginationToggle]);


    return (

 <DataTable
 // title="Contact List"
  columns={columns}
  data={filteredItems}
  pagination
  paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
  subHeader
  subHeaderComponent={subHeaderComponentMemo}
  persistTableHead


/>

)}