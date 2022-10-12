import { Header, Title, Avatar } from '@mantine/core';
import { IconBrandReactNative } from '@tabler/icons';
import CartIcon from './cartIcon';

export default function AppHeader() {
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      height={70}
      p='xs'
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar color='blue' radius='sm'>
          <IconBrandReactNative size={24} />
        </Avatar>
        <Title
          style={{
            marginLeft: 10,
          }}
          order={3}
        >
          React Redux
        </Title>
      </div>
      <div
        style={{
          marginRight: 10,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <CartIcon />
      </div>
    </Header>
  );
}
