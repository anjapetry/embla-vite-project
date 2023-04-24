
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export const EmblaCarousel = () => {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
	return (
		<div className='overflow-hidden' ref={emblaRef}>
			<div className='flex'>
				<div className='flex-[0_0_100%] min-w-0'>
					<img
						className='w-[100%] h-[600px] object-cover rounded-2xl border-cyan-400 border-4'
						src='https://images.pexels.com/photos/356831/pexels-photo-356831.jpeg?cs=srgb&amp;dl=pexels-pixabay-356831.jpg&amp;fm=jpg'
						alt='Brown Rocky Mountains With Waterfalls in Iceland'
					/>
				</div>
				<div className='flex-[0_0_100%] min-w-0'>
					<img
						className='w-[100%] h-[600px] object-cover rounded-2xl border-cyan-400 border-4'
						src='./src/assets/pexels-rudolf-kirchner-831056.jpg'
						alt='Green Field and Church Near Mountain During Daytime in Vík, Iceland'
					/>
				</div>
				<div className='flex-[0_0_100%] min-w-0'>
					<img
						className='w-[100%] h-[600px] object-cover rounded-2xl border-cyan-400 border-4'
						src='./src/assets/pexels-rudolf-kirchner-831088.jpg'
						alt='Gullfoss Waterfalls in Iceland seen in Spring'
					/>
				</div>
				<div className='flex-[0_0_100%] min-w-0'>
					<img
						className='w-[100%] h-[600px] object-cover rounded-2xl border-cyan-400 border-4'
						src='./src/assets/pexels-evgeny-tchebotarev-3907841.jpg'
						alt='A curious Icelandic horse standing in front of a mountain range in a wintery landscape facing the viewer'
					/>
				</div>
				<div className='flex-[0_0_100%] min-w-0'>
					<img
						className='w-[100%] h-[600px] object-cover rounded-2xl border-cyan-400 border-4'
						src='./src/assets/pexels-trace-hudson-2454681.jpg'
						alt='The Kirkjufell Mountain in Iceland'
					/>
				</div>
				<div className='flex-[0_0_100%] min-w-0'>
					<img
						className='w-[100%] h-[600px] object-cover rounded-2xl border-cyan-400 border-4'
						src='./src/assets/pexels-evgeny-tchebotarev-4101555.jpg'
						alt='A wintery mountain range in Iceland crowned with a rainbow'
					/>
				</div>
				<div className='flex-[0_0_100%] min-w-0'>
					<img
						className='w-[100%] h-[600px] object-cover rounded-2xl border-cyan-400 border-4'
						src='./src/assets/pexels-pixabay-459038.jpg'
						alt='Gray Road Surrounded With Purple Flower Field leading to Mountain during Daytime'
					/>
				</div>
				<div className='flex-[0_0_100%] min-w-0'>
					<img
						className='w-[100%] h-[600px] object-cover rounded-2xl border-cyan-400 border-4'
						src='./src/assets/pexels-aliona-&-pasha-3219773.jpg'
						alt='Jökulsarlon, glacial lake in Iceland'
					/>
				</div>
				<div className='flex-[0_0_100%] min-w-0'>
					<img
						className='w-[100%] h-[600px] object-cover rounded-2xl border-cyan-400 border-4'
						src='./src/assets/pexels-kata-pal-2659480.jpg'
						alt='Tourists at Skogafoss Waterfall in Iceland during Daytime'
					/>
				</div>
			</div>
		</div>
	);
};
