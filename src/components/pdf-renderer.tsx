'use client'

import { Document, Page, pdfjs } from 'react-pdf'
import { ChevronDown, ChevronUp, Loader, Loader2, Scale } from 'lucide-react'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import toast from 'react-hot-toast'
import { useResizeDetector } from 'react-resize-detector'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/lib/utils'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

interface pdfRendererProps {
	url: string
}


export default function PdfRenderer({ url }: pdfRendererProps) {


	const { width, ref } = useResizeDetector()
	console.log(width)
	const [numPages, setNumPages] = useState<number>()
	const [currPage, setCurrPage] = useState<number>(1)

	const customPageValidator = z.object({
		page: z.string().refine((page) => Number(page) > 0 && Number(page) <= numPages!)
	})

	type TCustomPageValidator = z.infer<typeof customPageValidator>

	const { register, handleSubmit, formState: { errors }, setValue } = useForm<TCustomPageValidator>({
		defaultValues: {
			page: '1'
		},
		resolver: zodResolver(customPageValidator)
	})

	const handlePageSubmit = ({ page }: TCustomPageValidator) => {
		setCurrPage(Number(page))
		setValue("page", String(page))
	}

	return (
		<>
			<div className='flex flex-col gap-5 w-[50vw] mt-[2vh]'>
				<div className='border-white border-2 border-dotted h-[4vh] w-full flex items-center my-2 flex-row gap-2'>
					<Button aria-label='previous page' variant='default'
						onClick={() => {
							setCurrPage((prev) => prev - 1 >= 1 ? prev - 1 : prev)
							setValue('page', currPage+1)
						}}>
						<ChevronDown className='h-4 w-4' color='white' />
					</Button>
					<Input className={cn(' w-12 h-8 text-white', errors.page && 'text-red-400')} {...register("page")}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								handleSubmit(handlePageSubmit)()
							}
						}}

					/>
					<p className='text-white space-x-1 flex flex-row items-center'>
						<span>/</span>
						<span>{numPages ? numPages : <Loader2 className='h-4 w-4 animate-spin' />}</span>
					</p>
					<Button aria-label='next page' variant='default' onClick={() => {
						setCurrPage((prev) => prev + 1 <= numPages! ? prev + 1 : prev)
						setValue('page', currPage)
					}
					}>
						<ChevronUp className='h-4 w-4' color='white' />
					</Button>
				</div>
				<div className='w-full h-fit' ref={ref}>
					<Document file={url} className='max-h-full' loading={
						<div className='bg-white flex justify-center'>
							<Loader2 className='my-24 animate-spin h-6 w-6' />
						</div>
					}
						onLoadSuccess={({ numPages }) => setNumPages(numPages)}
						onLoadError={() => toast.error('Error Uploading PDF')}
					>
						<Page pageNumber={currPage} width={950} />
					</Document>
				</div>
			</div >
		</>
	)
}
