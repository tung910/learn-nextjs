import React from 'react';
import MainLayout from '~/layouts/MainLayout';

type Props = {};

const Detail = (props: any) => {
	return (
		<MainLayout title='Details'>{JSON.stringify(props.products)}</MainLayout>
	);
};

export const getStaticPaths = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos');
	const data = await res.json();
	if (!data) {
		return {
			notfound: true,
		};
	}
	const paths = data.map(({ id }: any) => ({
		params: { id: String(id) },
	}));
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context: any) => {
	const res = await fetch(
		'https://jsonplaceholder.typicode.com/todos/' + context.params.id
	);
	const data = await res.json();
	return {
		props: {
			products: data,
		},
		revalidate: 10,
	};
};

export default Detail;
