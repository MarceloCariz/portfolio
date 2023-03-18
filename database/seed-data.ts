


export interface IProject {
    id: number;
    title: string;
    description: string;
    features: string[];
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
        description: 'Proyecto de portafolio - Venta local e internacional de frutas y verduras',
        images: ['maipogrande.png', 'maipogrande-1.png','maipogrande-2.png','maipogrande-3.png','maipogrande-4.png','maipogrande-5.png',
        'maipogrande-6.png','maipogrande-7.png','maipogrande-8.png','maipogrande-9.png','maipogrande-10.png','maipogrande-11.png','maipogrande-12.png',
        'maipogrande-13.png','maipogrande-14.png','maipogrande-15.png','maipogrande-16.png','maipogrande-17.png','maipogrande-18.png','maipogrande-19.png',
        'maipogrande-20.png','maipogrande-21.png','maipogrande-22.png'],
        url: 'http://168.138.133.24/',
        github: 'https://github.com/MarceloCariz/Frontend',
        tecnologies: ['react', 'oracle' ,'javascript', 'express', "tailwindcss"],
        features:[
                'Sistema de roles: Administrador, Cliente (interno - externo), Consultor , Transportista, Productor.',
                'Control de sesion con json-web-token',
                'Generacion de reportes pdf',
                'Maipogrande-web responsive con tailwindCss',
                'Registro de clientes con formulario validado(Formik)',
                'Aplicacion administrativa con electron-react y material UI',
                'Administrador: Control de los demas roles (crear, ver, editar, eliminar).',
                'Administrador: Control de los pedidos, ver pedidos y su detalle.',
                'Administrador: Control de las subastas, ver subastas y activar las subastas con el tiempo seleccionado.',
                'Administrador: Ver graficos con la cantidad de productos, ventas (local - externa), estado de pago, ventas por dia, ventas mensuales.',
                'Administrador: Control sobre los nombre e imagenes de los productos.',
                'Administrador: Control sobre los contratos, pudiendo renovarlos por 1-3-5 meses.',
                'Clientes: Ver los productos con detalles - productor - precion - stock.',
                'Clientes: Agregar productos al carrito sumando precio y diferenciando productor.',
                'Clientes: Buscador de productos.',
                'Clientes: Opciones de perfil para la dirección.',
                'Clientes: Ver pedidos con su estado de envio, productos, precios, precio total o a pagar y descargar factura.',
                'Clientes-local: Poder comprar con la api de transbank.',
                'Clientes-local: Ver boleta o descargar boleta pdf.',
                'Clientes-externo: Cuando recibe el producto se le habilita un boton para pagar con transbank.',
                'Productores: Ingreso de productos con precio local y externo.',
                'Productores: Edición y eliminación de productos.',
                'Productores: Visualización de Ganancias y contrato vigente.',
                'Productores: Visualización de los pedidos en los que se encuentra involucrado pudiendo marcar en bodega.',
                'Productores: Acceso a las subastas dependiendo del producto que tenga.',
                'Transportistas: Modificación de perfil carga, capacidad, refrigeracion etc.',
                'Transportistas: Visualización de Ganancias y contrato vigente.',
                'Transportistas: Visualización de los pedidos en los que se encuentra involucrado pudiendo marcar en camino.',
                'Transportitas: Acceso a las subastas dependiendo si su tamaño y capacidad son las mas optimas entre los participantes.',
                'Consultor: Vista general de las ventas, productos con graficos.',
                'Consultor: Generacion de reportes dependiendo el tipo de reporte, aunque igual se puede hacer uno general que involucre todos.',
                'Consultor: Visualizacion de reportes.'
            ]
    },
    {
        id: 2,
        title: 'Totem Ivaras',
        description: 'Proyecto practica profesional - totem informativo para estudiantes de Duoc UC sede Antonio Varas',
        images: ['totem-1.png','totem-2.png','totem-3.png','totem-4.png','totem-5.png','totem-6.png','totem-7.png','totem-8.png','totem-9.png',
                'totem-10.png','totem-11.png','totem-12.png'],
        url: 'https://totem.ivaras.cl',
        github: 'https://github.com/MarceloCariz/totem-app',
        tecnologies: ['react', 'mongo-DB' ,'express' , 'javascript' , 'css'],
        features: ['Carrusel de imagenes personalizado, se pueden cambiar a traves de la app CMS.',
                    'Modo stand-by despues de 30s, se redirige al carrusel de imagenes.',
                    'Seccion de preguntas frecuentes separadas por categorias.',
                    'Buscador en categorias frecuentes.',
                    'Seccion de buscar tu profe por rut o nombre de profesor, mostrando por imagen la sala marcada correspondiente.',
                    'Cuando se finaliza alguna categoria se muestra una encuesta de satisfacción que se contabiliza en el CMS.'
                ]

    },
    {
        id: 3,
        title: 'Hardwarestore App',
        description: 'Proyecto personal - control de ventas durante el dia, agrupando por mes',
        images: ['daily.png'],
        url: 'https://ferreteriapp.netlify.app/home/daily',
        github: 'https://github.com/MarceloCariz/totem-app',
        tecnologies: ['react', 'mongo-DB' ,'nestjs' , 'javascript', "material-ui", "redux" ],
        features: ['Ingreso de venta diaria pudiendo editar, eliminar o anular', 'Gestion de ventas por dias individuales.', 
                'Registro de la hora de la venta.', 'Agregar nueva venta en otro dia', 'Suma total de ventas por dia.', 'Agrupacion de ventas por mes.',
                'Generar reporte del dia en pdf - tambien se envia al correo configurado.']
    },
    {
        id: 4,
        title: 'Pokemon App',
        description: 'Proyecto personal - uso de la api de pokemon - permite agregar tus pokemons favoritos',
        images: ['pokemon-1.png','pokemon-2.png','pokemon-3.png'],
        url: 'https://pokemon-static-two-xi.vercel.app/',
        github: 'https://github.com/MarceloCariz/Pokemon-static',
        tecnologies: ['react', 'nextjs' , 'javascript', ],
        features: ['Obtener los pokemons desde la api de pokeapi.co .' , 
                    'Ver pokemon individualmente y sus sprites.', 'Guardar tus pokemons favoritos.']

    },

];
    


