import React,{useEffect} from 'react';
import Development from '../../components/development/Development';

export default function DevelopmentRoute() {
  useEffect(() => {
    document.title = 'WorldCoder | Developement';
  }, []);
  return (
    <>
      <Development paginationSystem={true} contentPerPage="6"/>
    </>
  )
}
