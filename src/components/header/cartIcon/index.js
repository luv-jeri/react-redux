import { useState } from 'react';
import { Avatar, Indicator, Button, Group } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons';

export default function CartIcon() {
  const [count, setCount] = useState(9);

  return (
    <>
      <Indicator label={count} inline size={22}>
        <Avatar color='blue' radius='sm' size='md'  >
            <IconShoppingCart size={24} />
            </Avatar>
      </Indicator>
    </>
  );
}
