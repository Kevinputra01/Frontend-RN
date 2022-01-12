import {Box, Text, Heading, FormControl, Input, Button} from 'native-base'

export default function FormNativeBase() {
    return (
        <Box 
        safeArea 
        justifyContent="center"
        p={10}>
            <Heading color="primary.600">Welcome</Heading>

            <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input />
            </FormControl>
            <FormControl mt={5}>
                <FormControl.Label>Password</FormControl.Label>
                <Input />
            </FormControl>
            <Button mt={10}>Login</Button>
        </Box>
    )
}

