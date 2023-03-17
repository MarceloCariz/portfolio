


export interface IProject {
    id: number;
    title: string;
    description: string;
    images: string[];
    url: string;
    github: string;
    tecnologies: TecnologiesTypes[];
}

type TecnologiesTypes =
'react'|
'typescript'|
'javascript'|
'express'|
'nestjs'|
'nodejs'|
'mongo-DB'|
'oracle'|
'redux'|
'nextjs'|
'material-ui'|
'tailwindcss'|
'css';

export const logos : TecnologiesTypes[] = [
    'react',
    'typescript',
    'javascript',
    'express',
    'nestjs',
    'nodejs',
    'mongo-DB',
    'oracle',
    'redux',
    'nextjs',
    'material-ui',
    'tailwindcss',
    'css'

]



export const projects: IProject[] = [
    {
        id: 1,
        title: 'MaipoGrande',
        description: 'Proyecto de portafolio - venta local e internacional de frutas y verduras',
        images: ['maipogrande.png'],
        url: 'http://168.138.133.24/',
        github: 'https://github.com/MarceloCariz/Frontend',
        tecnologies: ['react', 'oracle' ,'javascript', 'express', "tailwindcss"]
    },
    {
        id: 2,
        title: 'Totem Ivaras',
        description: 'Proyecto practica profesional - totem informativo para estudiantes',
        images: ['totem-1.png','totem-2.png','totem-3.png','totem-4.png','totem-5.png','totem-6.png','totem-7.png','totem-8.png'],
        url: 'https://totem.ivaras.cl',
        github: 'https://github.com/MarceloCariz/totem-app',
        tecnologies: ['react', 'mongo-DB' ,'express' , 'javascript' , 'css']
    },
    {
        id: 3,
        title: 'Hardwarestore App',
        description: 'Proyecto personal - control de ventas durante el dia, agrupando por mes',
        images: ['daily.png'],
        url: 'https://ferreteriapp.netlify.app/home/daily',
        github: 'https://github.com/MarceloCariz/totem-app',
        tecnologies: ['react', 'mongo-DB' ,'nestjs' , 'javascript', "material-ui", "redux" ]

    },
    {
        id: 4,
        title: 'Pokemon App',
        description: 'Proyecto personal - uso de la api de pokemon - permite agregar tus pokemons favoritos',
        images: ['pokemon-app.png'],
        url: 'https://pokemon-static-two-xi.vercel.app/',
        github: 'https://github.com/MarceloCariz/Pokemon-static',
        tecnologies: ['react', 'nextjs' , 'javascript', ]

    },

];
    


