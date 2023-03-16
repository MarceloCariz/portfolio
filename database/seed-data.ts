


export interface IProject {
    title: string;
    description: string;
    image: string;
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
'material-ui';

export const logos : string[] = [
    'react',
    'typescript',
    'javascript',
    'express',
    'nestjs',
    'nodejs',
    'mongo-db',
    'oracle',
    'redux',
    'nextjs',
    'material-ui'

]



export const projects: IProject[] = [
    {
        title: 'MaipoGrande',
        description: 'Proyecto de portafolio - venta local e internacional de frutas y verduras',
        image: 'maipogrande.png',
        url: 'http://168.138.133.24/',
        github: 'https://github.com/MarceloCariz/Frontend',
        tecnologies: ['react', 'oracle' ,'javascript', 'express']
    },
    {
        title: 'Totem Ivaras',
        description: 'Proyecto practica profesional - totem informativo para estudiantes',
        image: 'totem.png',
        url: 'https://totem.ivaras.cl',
        github: 'https://github.com/MarceloCariz/totem-app',
        tecnologies: ['react', 'mongo-DB' ,'express' , 'javascript' ]
    },
    {
        title: 'Hardwarestore App',
        description: 'Proyecto personal - control de gastos',
        image: 'daily.png',
        url: 'https://ferreteriapp.netlify.app/home/daily',
        github: 'https://github.com/MarceloCariz/totem-app',
        tecnologies: ['react', 'mongo-DB' ,'nestjs' , 'javascript' ]

    },

];
    


