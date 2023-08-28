// @mui
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// hooks
// import { useMockedUser } from 'src/hooks/use-mocked-user';
// routes
// import { paths } from 'src/routes/paths';
// locales
// components
// import Label from 'src/components/label';
import NavSectionVertical from 'src/components/nav-section/vertical/nav-section-vertical';
import { useNavSettings } from '../dashboard/config-navigation';

// ----------------------------------------------------------------------

export default function NavUpgrade() {
  // const { user } = useMockedUser();
  const navData = useNavSettings();

  return (
    <NavSectionVertical
      data={navData}
      config={{
        currentRole: 'admin',
      }}
    />
    // <Stack
    //   sx={{
    //     px: 2,
    //     py: 5,
    //     textAlign: 'center',
    //   }}
    // >
    //   <Stack alignItems="center">
    //     <Box sx={{ position: 'relative' }}>
    //       <Avatar
    //         src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
    //         alt="said"
    //         sx={{ width: 48, height: 48 }}
    //       />
    //     </Box>

    //     <Stack spacing={0.5} sx={{ mt: 1.5, mb: 2 }}>
    //       <Typography variant="subtitle2" noWrap>
    //         said
    //       </Typography>

    //       <Typography variant="body2" noWrap sx={{ color: 'text.disabled' }}>
    //         saed.dev9@gmail.com
    //       </Typography>
    //     </Stack>
    //   </Stack>
    // </Stack>
  );
}
