import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import api from '../../../services/api'
import { Container, Label, Input, ButtonStyles, LabelUpload } from './styles'

function EditCategory() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const {
    push,
    location: {
      state: { category }
    }
  } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    id: Yup.string()
  })

  const {
    register,
    handleSubmit,

    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    const categoryDataFormData = new FormData()
    categoryDataFormData.append('name', data.name)
    categoryDataFormData.append('category_id', data.id)
    categoryDataFormData.append('file', data.file[0])

    await toast.promise(
      api.put(`categories/${category.id}`, categoryDataFormData),
      {
        pending: 'Editando nova categoria...',
        success: 'Categoria editada com sucesso',
        error: 'Falha ao editar a categoria'
      }
    )

    setTimeout(() => {
      push('/listar-categorias')
    }, 2000)
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            defaultValue={category.name}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Id</Label>
          <Input
            disabled
            type="number"
            {...register('id')}
            defaultValue={category.id}
          />
          <ErrorMessage>{errors.id?.message}</ErrorMessage>
        </div>

        <div>
          <LabelUpload>
            {fileName || (
              <>
                <CloudUploadIcon />
                Carregue a imagem da categoria
              </>
            )}

            <input
              type="file"
              id="image-input"
              accept="image/png, image/jpeg"
              {...register('file')}
              onChange={value => {
                setFileName(value.target.files[0]?.name)
              }}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <ButtonStyles>Editar Categoria</ButtonStyles>
      </form>
    </Container>
  )
}

export default EditCategory
