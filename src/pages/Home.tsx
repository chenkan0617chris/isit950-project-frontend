import { useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import homeImg from '../images/home_new.jpeg';
import home_pic1 from '../images/home_pic1.jpeg';
import home_pic2 from '../images/home_pic2.jpeg';
import home_btm from '../images/home_btm.jpeg';
import { ORANGE } from "../utils/constant";
import Title from "../component/title.component";
import BeMember from "../component/beMember.component";
import Subtitle from "../component/subtitle.component";
import SearchForm from "../component/searchForm.component";

const Home = () => {
    
    useEffect(() => {
    }, []);

    const onSubmit = (value: any) => {
        console.log(value);
        const userInfo: any = JSON.parse(sessionStorage.getItem("userInfo") as any);

        if (!userInfo) {
            window.location.href = '/auth/login';
            return;
        };

        window.location.href = `/search?name=${value.name}&distance=${value.distance}&category=${value.category}&rating=${value.rating}`;
    };

    return (
        <>
            <Box 
                display='flex' 
                justifyContent='center' 
                alignItems='center' 
                width='100%' 
                height='100vh' 
                sx={{ background: `url(${homeImg})`, backgroundSize: 'cover'}}
            >
                <Stack spacing={4}>
                    <Title></Title>
                    <Subtitle></Subtitle>
                    <SearchForm
                        onSubmit={onSubmit}
                    />
                </Stack>

            </Box>
            <Box 
                display='flex' 
                justifyContent='center' 
                alignItems='center' 
                width='100%' 
                sx={{ background: '#9A1616' }}
            >
                <Stack spacing={4} flexDirection='row' sx={{ width: '100%', justifyContent: 'space-between', padding: '128px 128px' }}>
                    <Stack spacing={2} margin={3}>
                        <Typography>About Us</Typography>
                        <Typography color='white' fontFamily='Lily Script One' fontSize={90}>Welcome</Typography>
                        <Typography color='white' maxWidth={502}>
                            Discover a world of delicious possibilities at ClickNCrave, where your favorite foods are just a click away. Whether you're in the mood for a cozy cafe, vibrant club, exquisite restaurant, or exotic Asian cuisine, we've got you covered.
                        </Typography>
                        <Typography color='white' maxWidth={502}>
                            Search for restaurants, explore various categories, set your preferred ratings and distance, and embark on a culinary journey tailored to your tastes. With our easy-to-use platform, finding and ordering your favorite dishes has never been simpler.
                        </Typography>
                        <Typography color='white' maxWidth={502}>
                            Experience convenience, variety, and exceptional flavors all in one place. Join ClickNCrave today and let your cravings lead the way!
                        </Typography>
                        <Stack spacing={2}>
                            <Button  variant="contained" sx={{ background: ORANGE }}>Today’s Menu</Button>
                        </Stack>
                    </Stack>
                    <Stack flexDirection='row'>

                        <img style={{ position: 'relative', left: 0, top: 30, borderRadius: 16, zIndex: 1 }} width={359} height={508} alt='pic1' src={home_pic1}></img>
                        <img style={{ position: 'relative', right: 66, top: -38, borderRadius: 16 }} width={359} height={508} alt='pic2' src={home_pic2}></img>
                    </Stack>
                    
                </Stack>

            </Box>
            <Box
                display='flex' 
                justifyContent='space-around' 
                alignItems='center' 
                width='100%' 
                height='100vh'
                sx={{ background: `url(${home_btm})`, backgroundSize: 'cover'}}
            >
                <Stack spacing={4}>
                    <Stack spacing={2}>
                        <Title size={60} color='white'></Title>
                    </Stack>
                    <Stack spacing={2}>
                        <Typography fontSize={32} color='#9A1616' fontFamily='Poppins' >5th years Anniversary </Typography>
                    </Stack>
                    <Stack spacing={2}>
                        <Typography variant="body1" color='white' fontFamily='Average Sans' maxWidth={400} >

                            We are celebrating our 5th year restaurant dealer online platform with 
                            the more special offer and the bigger discount for our value customer.

                            Please be a part of this delicious fulfillment by joining our membership.
                        </Typography>
                        <BeMember></BeMember>
                    </Stack>


                </Stack>
                <Stack spacing={4}>
                    <Typography variant="h3" color='#9A1616'>Location</Typography>
                    <Typography variant="h6" color='white'>Melbourne CBD</Typography>
                    <Typography variant="h6" color='white'>Sydney CBD</Typography>
                </Stack>
                <Stack spacing={4}>
                    <Typography variant="h3" color='#9A1616'>Contact Us</Typography>
                    <Typography variant="h6" color='white'>+123 456 7890</Typography>
                    <Typography variant="h6" color='white'>clickNcrave@outlook.com</Typography>
                </Stack>
            </Box>
        </>
        
    );
};

export default Home;

