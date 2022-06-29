import Link from 'next/link';
import React from 'react';
import MainLayout from '~/layouts/MainLayout';

type Props = {};

const User = ({ products }: any) => {
	return (
		<MainLayout title='user'>
			<ul className='mx-auto w-40'>
				{products.map((item: any, index: any) => {
					return (
						<li key={index} style={{ listStyle: 'inside' }}>
							<Link href={`/user/${item.id}`}>{item.title}</Link>
						</li>
					);
				})}
			</ul>
		</MainLayout>
	);
};

export const getStaticProps = async (context: any) => {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos');
	const data = await res.json();
	return {
		props: {
			products: data,
		},
		revalidate: 10,
	};
};

export default User;
