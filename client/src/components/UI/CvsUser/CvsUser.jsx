import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVacanciesAllThunk } from '../../../redux/actions/vacanciesActions';
import VacanciesList from '../VacanciesList/VacanciesList';

function CvsUser({ userPage }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVacanciesAllThunk());
  }, []);

  const user = useSelector((state) => state.user);
  console.log(user, 'user<----');
  const GetVacancies = useSelector((state) => state.vacancy[0]);
  console.log(GetVacancies, 'GetVacancies<----');
  let filterVacancies = GetVacancies?.filter(
    (el) => (userPage.id
      ? el.user_id === userPage.id
      : false)
  );
  if (filterVacancies === undefined) { filterVacancies = []; }
  return (
    <>
      <h5 className="text-center">ваши вакансии</h5>
      { filterVacancies.length !== 0
        ? (<VacanciesList filterVacancies={filterVacancies} />)
        : (<div className="text-center">У вас их нету</div>) }
    </>
  );
}

export default CvsUser;
