import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import paths from '../../../constants/paths'
import api from '../../../services/api'
import { Container, Img, EditButton, DeleteButton } from './styles'

function ListCategories() {
  const [category, setCategories] = useState()
  const { push } = useHistory()

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      setCategories(data)
    }

    loadCategories()
  }, [])

  function editCategory(category) {
    push(paths.EditCategory, { category })
  }

  async function deleteCategory(category) {
    await api.delete(`/categories/${category.id}`)
    const { data } = await api.get('categories')

    setCategories(data)
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="center">ID da categoria</TableCell>
              <TableCell align="center"> Imagem da categoria</TableCell>
              <TableCell align="center">Editar produto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {category &&
              category.map(category => (
                <TableRow
                  key={category.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {category.name}
                  </TableCell>
                  <TableCell align="center">{category.id}</TableCell>
                  <TableCell align="center">
                    <Img src={category.url} alt="imagem-produto" />
                  </TableCell>
                  <TableCell align="center">
                    <EditButton onClick={() => editCategory(category)} />
                    <DeleteButton onClick={() => deleteCategory(category)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListCategories
