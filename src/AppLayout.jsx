import React from 'react';
import Navbar from '../src/components/Nav/Navbar'
import { Outlet } from 'react-router-dom';
export default function AppLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  );
}
