import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { doDelete, getAllUser, initDB } from '../database';
import { IFormInput } from '../interface';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ListUser  = () =>{
  const [finaldata , setFinaldata] = useState<IFormInput[]>()

  const getData = async () =>{
    await initDB() ;
    const fd = await getAllUser() as IFormInput[]
    console.log(fd);
    setFinaldata(fd)
  }

  const handleEdit = async () =>{

  }

  const handleDelete = async (id:number) =>{
    await doDelete(id)
    const fd = await getAllUser() as IFormInput[]
    setFinaldata(fd)
  }

  useEffect(()=>{
    getData()
  },[])


  return (
    <>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 , width : '70%', margin:'auto' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {finaldata?.map((row,index) => ( 

            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row"> {row.id}</TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell><Link to={`/?id=${row.id}`} ><Button variant="contained" onClick={handleEdit} >Edit</Button></Link></TableCell>
              <TableCell><Button variant="contained" onClick={()=>{handleDelete(row.id)}}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}


export default ListUser ;