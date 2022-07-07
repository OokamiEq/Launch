import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cvs from './Cvs';
import Vacancies from './Vacancies';

function MainPages() {
  return (
    <Routes>
      <Route path="/" element={<Vacancies />} />
      <Route path="/Cvs" element={<Cvs />} />
      <Route path="/users/sign_in" element={<p>/users/sign_in</p>} />
      <Route path="/users/sign_up" element={<p>/users/sign_up</p>} />
      <Route path="/users" element={<p>users</p>} />
      <Route path="/users/:id" element={<p>users/:id</p>} />
      <Route path="/resumes" element={<p>resumes</p>} />
      <Route path="/resumes/:id" element={<p>resumes/:id</p>} />
      <Route path="/account/resumes/new" element={<p>account/resumes/new</p>} />
      <Route path="/account/vacancies/new" element={<p>account/vacancies/new</p>} />
      <Route path="/account/resumes" element={<p>account/resumes</p>} />
      <Route path="/account/vacancies" element={<p>account/vacancies</p>} />
      <Route path="/account/resumes/:id" element={<p>account/resumes/:id</p>} />
      <Route path="/account/vacancies/:id" element={<p>account/vacancies/:id</p>} />
      <Route path="/account/profile/edit" element={<p>account/profile/edit</p>} />
      <Route path="/*" element={<p>ERROR</p>} />

    </Routes>
  );
}

export default MainPages;