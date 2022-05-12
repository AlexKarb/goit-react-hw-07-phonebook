import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllContactQuery } from 'redux/contacts/contactsQuery';
import { filter, setFilter } from 'redux/filter/filterSlice';

export const useFilter = () => {
  const { data: allContacts = [] } = useGetAllContactQuery();

  const dispatch = useDispatch();
  const filterValue = useSelector(filter);

  const setFilterValue = e => dispatch(setFilter(e.target.value.toLowerCase()));

  const filteringList = useMemo(() => {
    return allContacts.filter(({ name }) => name.includes(filterValue));
  }, [allContacts, filterValue]);

  return { filteringList, filterValue, setFilterValue };
};
