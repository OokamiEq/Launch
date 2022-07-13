import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { getVacanciesThunk } from '../../../redux/actions/vacancyActions';
import AnswersUser from '../AnswersUser/AnswersUser';
import CvsUser from '../CvsUser/CvsUser';
import ResumeUser from '../ResumeUser/ResumeUser';
import СommentsUser from '../СommentsUser/СommentsUser';
import SocketChat from '../Socket/SoketChat';

function ButtonAccount() {
  const [comp, setComp] = useState(1);
  // const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="nav nav-pills justify-content-center" role="navigation">
        <li className="nav-item">
          <a className="nav-link px-3 active" data-bs-toggle="tab" href="#resume" onClick={() => setComp(1)}>Резюме</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3" data-bs-toggle="tab" href="#answers" onClick={() => setComp(2)}>Вакансии </a>
        </li>
        <li className="nav-itemЗ">
          <a className="nav-link px-3" data-bs-toggle="tab" href="#comments" onClick={() => setComp(3)}>Комментарии</a>
        </li>
        <li className="nav-itemЗ">
          <a className="nav-link px-3" data-bs-toggle="tab" href="#comments" onClick={() => setComp(4)}>Ответы</a>
        </li>

        <Button color="success" outline>
          <Link data-bs-toggle="tab" to={<SocketChat />}>чат</Link>
        </Button>

      </ul>
      <div>
        {(comp === 1)
        && (
          <ResumeUser />
        )}
        {(comp === 2)
        && (
          <CvsUser />
        )}
        {(comp === 3)
        && (
          <СommentsUser />
        )}
        {(comp === 4)
        && (
          <AnswersUser />
        )}
      </div>
    </div>
  );
}

export default ButtonAccount;
