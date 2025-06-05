import typescriptLogo from '../assets/logos/typescript.png'
import javascriptLogo from '../assets/logos/js.png'
import reactLogo from '../assets/logos/react.png'
import tailwindLogo from '../assets/logos/tailwind.png'
import reduxLogo from '../assets/logos/redux.png'
import nodeLogo from '../assets/logos/node.png'
import expressLogo from '../assets/logos/express.png'
import vscodeLogo from '../assets/logos/vscode.png'
import postgresLogo from '../assets/logos/postgresql.png'
import mongodbLogo from '../assets/logos/mongodb.png'
import postmanLogo from '../assets/logos/postman.png'
import nextLogo from '../assets/logos/next.png'
import github from '../assets/logos/github.png'
import reactRouter from '../assets/logos/react-router.png'
import astro from '../assets/logos/astro.png'
import bantali from '../assets/images/bantali.png'

interface technologyItemProps {
	title: string
	color: string
	logo?: string
}
interface experience {
	date: string
	location: string
	position: string
	company: string
	description: string
}
interface projects {
	date: string
	title: string
	description: string
	link: string
	img: ImageMetadata
}
export const techStack: technologyItemProps[] = [
	{
		logo: typescriptLogo.src,
		title: 'Typescript',
		color: 'bg-blue-500/30',
	},
	{
		logo: javascriptLogo.src,
		title: 'Javascript',
		color: 'bg-yellow-500/30',
	},
	{
		logo: reactLogo.src,
		title: 'React',
		color: 'bg-blue-300/30',
	},
	{
		logo: tailwindLogo.src,
		title: 'Tailwind',
		color: 'bg-blue-300/20',
	},
	{
		logo: reduxLogo.src,
		title: 'Redux',
		color: 'bg-purple-500/10',
	},
	{
		logo: nextLogo.src,
		title: 'Next',
		color: 'bg-blue-200/10',
	},
	{
		logo: astro.src,
		title: 'Astro',
		color: 'bg-orange-200/10',
	},
	{
		logo: nodeLogo.src,
		title: 'Node JS',
		color: 'bg-green-200/20',
	},
	{
		logo: expressLogo.src,
		title: 'Express JS',
		color: 'bg-white/50 ',
	},
	{
		logo: mongodbLogo.src,
		title: 'Mongo DB',
		color: 'bg-green-300/30',
	},
	{
		logo: postgresLogo.src,
		title: 'PostgreSQL',
		color: 'bg-blue-600/30',
	},
	{
		logo: vscodeLogo.src,
		title: 'VS Code',
		color: 'bg-blue-400/20',
	},
	{
		logo: postmanLogo.src,
		title: 'Postman',
		color: 'bg-orange-500/30',
	},
	{
		logo: github.src,
		title: 'Github',
		color: 'bg-blue-200/10',
	},
	{
		logo: reactRouter.src,
		title: 'React-router',
		color: 'bg-red-300/20',
	},
]

export const experience: experience[] = [
	{
		date: 'Jan - Apr 2025',
		location: 'Muntinlupa City',
		position: 'Web Dev Intern',
		company: 'Advanced World Solutions',
		description:
			'Responsible for integrating APIs, making pages responsive and more front-end stuff.',
	},
	// {
	// 	date: 'Jan - Apr 2025',
	// 	location: 'Muntinlupa City',
	// 	position: 'Web Dev Intern',
	// 	company: 'Advanced World Solutions',
	// 	description:
	// 		'Responsible for integration API, making pages responsive.',
	// },
]

export const projects: projects[] = [
	{
		date: '2024',
		title: 'OpticalRecords',
		description:
			'A records management, appointment tracking and inventory all in one.',
		link: 'github.com',
		img: bantali,
	},
]
