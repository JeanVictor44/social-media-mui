import { Add as AddIcon, DateRange} from "@mui/icons-material"
import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    width: 400,
    height:280,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
    borderRadius:5
  };

const UserBox = styled(Box)(({theme}) => ({
    display:"flex",
    alignItems:"center",
    gap:'10px',
    marginBottom: '20px'
}))
export const Add = () => {
    const [ open, setOpen ] = useState(false)
    function handleClose(){
        setOpen(false)
    }
    function handleOpen(){
        setOpen(true)
    }
  return (
    <>
        <Tooltip 
            title="Add" 
            onClick={handleOpen}
            sx={{
                position: "fixed", 
                bottom: 20, 
                left:{
                    xs:"50%",
                    md: 30
                }, 
                translate: {
                    xs: "-50%",
                    md: "0"

                }
                
                }}
        >
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography variant="h6" color="gray" textAlign="center">
                    Create post
                </Typography>
                <UserBox sx={{ mt: 2 }}>
                    <Avatar 
                        sx={{width:30,height:30 }}
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"   
                    />
                    <Typography fontWeight={500}variant="caption">Jean Victor</Typography>  
                </UserBox>
                <TextField
                    sx={{
                        width:"100%"
                    }}
                    id="standard-multiline-static"
                    
                    multiline
                    rows={3}
                    placeholder="What's on your mind?"
                    variant="standard"
                />
                <Stack direction="row" gap={1} mt={2} mb={3}>
                    <EmojiEmotionsIcon color="primary"/>
                    <ImageIcon color="secondary"/>
                    <VideoCameraBackIcon color="success"/>
                    <PersonAddIcon color="error"/>
                </Stack>
                <ButtonGroup 
                    variant="contained" 
                    aria-label="outlined primary button group"
                    fullWidth
                >
                    <Button
                        
                    >
                        One
                    </Button>
                    <Button
                        sx={{
                            width:'100px'
                        }}
                    >
                        <DateRange /> 
                    </Button>
                </ButtonGroup>
            </Box>
        </Modal>
    </>
  )
}
