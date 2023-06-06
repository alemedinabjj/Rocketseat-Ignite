import {
  Heading,
  MultiStep,
  Text,
  Button,
  TextArea,
  Avatar,
} from '@ignite-ui/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Container, Header } from '../styles'
import { FormAnnotation, ProfileBox } from './styles'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '@/pages/api/[auth]/[...nextauth].api'

const updateProfileSchema = z.object({
  bio: z.string().min(3, { message: 'Mínimo de 3 caracteres' }),
})

type UpdateProfileData = z.infer<typeof updateProfileSchema>

interface UpdateProfileProps {
  userData: {
    name: string
    email: string
    image: string
    avatar_url: string
  }
}

export default function UpdateProfile({ userData }: UpdateProfileProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileSchema),
  })

  async function handleUpdateProfile(data: UpdateProfileData) {}

  return (
    <Container>
      <Header>
        <Heading as="strong">Bem vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
        <label>
          <Text size="sm">Foto de perfil</Text>
          <Avatar src={userData.avatar_url} alt={userData.name} />
        </label>

        <label>
          <Text size="sm">Sobre você</Text>
          <TextArea {...register('bio')} />
          <FormAnnotation size="sm">
            Fale um pouco sobre você. Isto será exibido em sua página pessoal.
          </FormAnnotation>
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Finalizar
        </Button>
      </ProfileBox>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  const userData = session?.user

  if (!userData) {
    return {
      redirect: {
        destination: '/register',
        permanent: false,
      },
    }
  }

  console.log(session)

  return {
    props: {
      userData,
    },
  }
}
