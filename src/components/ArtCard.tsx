import React from 'react'
import Button from './Button'

interface props {
	thumbnail: string;
}

const ArtCard = ({ thumbnail }: props) => {
	return (
		<div>
			<img src={thumbnail} width={200} height={200}></img>
			<Button />
		</div>
	)
}

export default ArtCard