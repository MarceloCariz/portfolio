import NextImage from 'next/image';
import { Chip } from '@mui/material'
import React from 'react'

interface Props {
    tecnologies: string[];
}

export const TecnologiesList = ({tecnologies}:Props) => {
    return (
    <>
        {tecnologies.map((name) => (
            <Chip
                key={name}
                sx={{
                placeItems: "center",
                textTransform: "capitalize",
                fontWeight: "600",
                color: "white",
                }}
                // color='primary'
                label={name}
                icon={
                <NextImage
                    // fill
                    width={15}
                    height={15}
                    style={{objectFit: 'contain', backgroundBlendMode: "overlay"}}
                    src={`/logos/${name}.png`}
                    alt={name}
                />
                }
            />

        ))}
    </>
    )
}
