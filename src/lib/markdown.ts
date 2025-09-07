import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(markdown)
  
  return result.toString()
    // Enhanced styling for headings
    .replace(/<h1>/g, '<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-6 first:mt-0">')
    .replace(/<h2>/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">')
    .replace(/<h3>/g, '<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">')
    .replace(/<h4>/g, '<h4 class="text-lg font-semibold text-gray-900 mt-4 mb-2">')
    
    // Enhanced paragraph styling
    .replace(/<p>/g, '<p class="text-gray-700 leading-relaxed mb-6">')
    
    // Enhanced list styling
    .replace(/<ul>/g, '<ul class="text-gray-700 space-y-2 mb-6 ml-6">')
    .replace(/<ol>/g, '<ol class="text-gray-700 space-y-2 mb-6 ml-6 list-decimal">')
    .replace(/<li>/g, '<li class="leading-relaxed">')
    
    // Table styling
    .replace(/<table>/g, '<div class="overflow-x-auto mb-8 shadow-sm"><table class="w-full bg-white border border-gray-300 rounded-lg">')
    .replace(/<\/table>/g, '</table></div>')
    .replace(/<thead>/g, '<thead class="bg-[#3889be] text-white">')
    .replace(/<th>/g, '<th class="px-4 py-3 text-left text-sm font-semibold border-b border-gray-300">')
    .replace(/<td>/g, '<td class="px-4 py-3 text-sm text-gray-800 border-b border-gray-200 font-medium">')
    .replace(/<tr>/g, '<tr class="hover:bg-gray-50">')
    
    // Enhanced link styling
    .replace(/<a /g, '<a class="text-[#3889be] hover:underline font-medium" ')
    
    // Image styling with caption support
    .replace(/<img([^>]*?)alt="([^"]*?)"([^>]*?)>/g, (match, before, alt, after) => {
      // Extract src for styling decisions
      const srcMatch = match.match(/src="([^"]*?)"/);
      const src = srcMatch ? srcMatch[1] : '';
      
      return `
        <div class="my-8">
          <img${before}alt="${alt}"${after} class="w-full rounded-lg shadow-lg" />
          ${alt ? `<p class="text-sm text-gray-500 text-center mt-3 italic">${alt}</p>` : ''}
        </div>
      `;
    })
    
    // Strong/bold styling
    .replace(/<strong>/g, '<strong class="font-semibold text-gray-900">')
    
    // Emphasis/italic styling  
    .replace(/<em>/g, '<em class="italic text-gray-600">')
    
    // Code styling
    .replace(/<code>/g, '<code class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">')
    
    // Blockquote styling
    .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-[#3889be] pl-6 my-6 italic text-gray-600 bg-blue-50 py-4 rounded-r-lg">')
}