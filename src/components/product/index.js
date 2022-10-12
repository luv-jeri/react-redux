import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export default function Product({ name, details }) {
  return (
    <Card
      style={{
        width: 400,
        marginBlock: 30,
      }}
      shadow='xl'
      p='lg'
      radius='md'
      withBorder
    >
      <Card.Section>
        <Image
          src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
          height={160}
          alt='Norway'
        />
      </Card.Section>

      <Group position='apart' mt='md' mb='xs'>
        <Text weight={500}>{name || 'Demo'}</Text>
        <Badge color='pink' variant='light'>
          On Sale
        </Badge>
      </Group>

      <Text size='sm' color='dimmed'>
        {details ||
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel nisl. Sed euismod, nunc vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel nisl.'}
      </Text>

      <Button variant='light' color='blue' fullWidth mt='md' radius='md'>
        Add to Cart
      </Button>
    </Card>
  );
}
