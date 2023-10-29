import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { Input } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Success(props: {title: string}) {

  const [title, setTitle] = useState<string>(props.title)
  const [lengthTitle, setLengthTitle] = useState(0)
  const router = useRouter()

  useEffect(() => {

    setLengthTitle(props.title.length)

  }, [props.title])


  const onChangeInput = (e: any) => {
    
    setTitle(e.target.value)

    if (e.target.value.length == 0) {
      setTitle(props.title)
    }

  }

  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        {title}
      </Heading>
      <Text color={'gray.500'}>
        {lengthTitle}
      </Text>
      <Input 
        placeholder='Basic usage' 
        onChange={onChangeInput}
      />
      <Button
        onClick={() => router.push('/')}
      >Changer de pages</Button>
    </Box>
  )
}