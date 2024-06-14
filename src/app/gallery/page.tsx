'use client'
import React from 'react'
import ArtCard from '../../components/ArtCard'
import { useDatabaseClientStore } from '../../utilities/globalStore';
import { useEffect } from 'react';

export default function Gallery() {
	const { allArt, fetchAllArt } = useDatabaseClientStore();
	useEffect(() => {
		const fetch = async () => await fetchAllArt();
		fetch();
	}, [fetchAllArt])

	return (
		<div>
			Gallery
			{allArt?.map((a, i) => (
				<div key={i}>
					{a.name}
					<ArtCard thumbnail={a.thumbnail_link} />
				</div>
			))}
		</div>
	)
}