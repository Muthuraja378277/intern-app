import { Box, Container, Stack,Text,HStack,Heading,Button,} from '@chakra-ui/react';
import { useReactToPrint } from 'react-to-print';
import { useResume } from '../components/Context';
import Builder from './Builder';
import Select from './Theme/Select';
import { MdOutlineFileDownload } from 'react-icons/md';
import ResumePreview from './ResumePreview';

const Main = () => {

const { printElem } = useResume();

     const handlePrint = useReactToPrint({
content: () => printElem.current,
    });

return (
        <Container
            bg={'gray.50'}
            minW={'full'}
            py={10}
            id='builder'>
            <Heading as='h4' size='lg' textAlign={'center'} color={'gray.700'} style={{ fontFamily: 'Poppins' }} fontWeight={'medium'}>Resume Builder</Heading>
            <br></br>
            <br></br>
              
            <Container maxW={'7xl'} px={8} my={3}>
 <Stack justifyContent={'space-between'} pt={4} direction={{ base: 'column', sm: 'row' }}>
                    <Select />
                    <Button rightIcon={<MdOutlineFileDownload />} onClick={handlePrint} colorScheme={'purple'}>Download</Button>
                </Stack> </Container>

            <Stack
                direction={{ base: 'column', md: 'row' }}         
                gap={4}
                mx={{ base: 2, md: 12 }}
              my={8}
              alignItems={'flex-start'}
              justifyContent={'space-between'} >
              <Builder />
                <ResumePreview />
            </Stack>
        </Container>
    )
}
export default Main
