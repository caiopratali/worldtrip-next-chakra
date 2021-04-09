import Link from 'next/link';
import { Heading, Link as ChakraLink } from "@chakra-ui/react";

interface NavLinkProps {
  url: string;
  children: string;
}

export function NavLink({ children, url }: NavLinkProps) {
  return (
    <Link href={url}>
      <ChakraLink as="a" _hover={{ color: 'yellow' }}>
        <Heading fontSize="48px" fontWeight="bold" color="gray.50" _hover={{ color: 'yellow' }} lineHeight="78px">{children}</Heading>
      </ChakraLink>
    </Link>
  );
}