import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function StudentCard({datas}) {
    return(
        <div>
            <h2>STUDENTS DETAILS</h2>

            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Name </TableCell>
                    <TableCell align="right">Username</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Phone</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {datas.map((data) => (
                 <TableRow>
                    <TableCell component="th" scope="row">{data.name}</TableCell>
                    <TableCell align="right">{data.username}</TableCell>
                    <TableCell align="right">{data.email}</TableCell>
                    <TableCell align="right">{data.phone}</TableCell>
                </TableRow>
                 ))}
            </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default StudentCard;