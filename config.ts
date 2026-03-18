
import type { PdfConfig } from "md-to-pdf/dist/lib/config"


const path = "README.md"
const dest = `cv_${new Date().toISOString().slice(0, 10).replace(/-/g, '')}.pdf`;

const config: Partial<PdfConfig> = {
   dest,
   pdf_options: {
    format: "A4",
    margin: {
        top: "1.27cm",
        right: "1.27cm",
        bottom: "1.27cm",
        left: "1.27cm"
    },
    headerTemplate: '<div></div>',
    footerTemplate: `<div style="font-size: 10px; text-align: center; width: 100%">
                        <span class="pageNumber"></span> / <span class="totalPages"></span>
                     </div>`,
   }
}

export {
    path,
    config
}
