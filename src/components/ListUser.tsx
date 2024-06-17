import { useEffect, useState } from 'react';
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
import Swal from 'sweetalert2'

const ListUser = () => {
  const [finaldata, setFinaldata] = useState<IFormInput[]>()

  const getData = async () => {
    await initDB();
    const fd = await getAllUser() as IFormInput[]
    console.log(fd);
    setFinaldata(fd)
  }

  const handleDelete = async (id: number) => {

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
    if (result.isConfirmed) {
      await doDelete(id)
      const fd = await getAllUser() as IFormInput[]
      setFinaldata(fd)

      await Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }

  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, width: '70%', margin: 'auto' }} aria-label="simple table">
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

            {finaldata?.map((row, index) => (

              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row"> {row.id}</TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell><Link to={`/?id=${row.id}`} ><Button variant="contained" >Edit</Button></Link></TableCell>
                <TableCell><Button variant="contained" onClick={() => { handleDelete(row.id) }}>Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}


export default ListUser;