
import React, { useEffect, useSelector, useDispatch } from "react";
import AppContext from "../../context/AppContext";
import { Avatar, Button, ButtonGroup, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SimpleFab from "../../components/fab/SimpleFab";
import { deleteOneAuthor, getAllAuthors, putOneAuthor } from "../../store/actions/authorActions";

export default function ListAuthor() {

  const { setIsLoading } = React.useContext(AppContext);
  const authorDispatch = useDispatch();
  const { authors } = useSelector((state) => state.author)
  const updateAuthor = (id) => {
    setIsLoading(true);
    const payload = {
      firstName: 'Abdullah',
      lastName: 'Özmen',
      email: 'ozmenab@gmail.com'
    }
    authorDispatch(putOneAuthor(id, payload));
    setIsLoading(false);
  }


  const removeAuthor = (id) => {
    // let arr = [];

    // for(const author of authors){
    //     if(author.id!==id){
    //       arr.push(author);
    //     }
    // }
    // setAuthors(arr);

    // ACTION

    authorDispatch(deleteOneAuthor(id));

  };
  useEffect(() => {
    authorDispatch(getAllAuthors());
  }, []);


  return (
    <div>
      <SimpleFab url="/admin/authors/add" />

      <TableContainer sx={{ m: 1, p: 1 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Id</TableCell>
              <TableCell align='left'>Image</TableCell>
              <TableCell align='left'>First name</TableCell>
              <TableCell align='left'>Last namee</TableCell>
              <TableCell align='left'>Email</TableCell>
              <TableCell align='center'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authors.map((author) => (
              <TableRow
                key={author.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {author.id}
                </TableCell>
                <TableCell align='left'>
                  <Avatar src={`/authors/${author.id % 20}.jpg`}></Avatar>
                </TableCell>
                <TableCell align='left'>{author.firstName}</TableCell>
                <TableCell align='left'>{author.lastName}</TableCell>
                <TableCell align='left'>{author.email}</TableCell>
                <TableCell align='center'>
                  <ButtonGroup orientation='vertical'>
                    <Button onClick={() => updateAuthor(author.id)}>Edit</Button>
                    <Button onClick={() => removeAuthor(author.id)}>
                      Remove
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography align='center' gutterBottom variant='body1'>
        The number of {authors.length}.
      </Typography>
    </div>
  );
}
