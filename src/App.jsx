import './App.css'
import { EmblaCarousel } from './components/EmblaCarousel'

function App() {


  return (
		<>
			<div className='w-full h-screen bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-cyan-300 via-stone-800 to-slate-700'>
				<h1 className='m-auto p-5 text-4xl font-bold text-center animate-text bg-gradient-to-r from-teal-500 via-red-600 to-[#010961] bg-clip-text text-transparent no-underline hover:bg-gradient-to-tl hover:from-teal-500 hover:via-cyan-700 hover:to-emerald-400 hover:bg-clip-text hover:text-transparent hover:scale-125'>
					Welcome to
					<a
						href='https://www.visiticeland.com/'
						target='_blank'
						rel='noreferrer'
						className='rounded active:bg-teal-200 active:text-teal-900 focus:outline-none focus:ring focus:ring-violet-500'
					>
						{' '}
						Iceland
					</a>
				</h1>

				<EmblaCarousel />
			</div>
		</>
	);
}

export default App
