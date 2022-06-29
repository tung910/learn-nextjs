/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
	return (
		<nav>
			<Link href='/'>home</Link>
			<Link href='/about'>about</Link>
			<Link href='/user'>user</Link>
		</nav>
	);
};

export default Navbar;
