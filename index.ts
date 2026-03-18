import { mdToPdf } from 'md-to-pdf'
import { path, config } from './config.ts'


await mdToPdf({ path }, config).catch(console.error)
console.log('PDF generated successfully:', config.dest)
