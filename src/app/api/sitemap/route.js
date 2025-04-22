import { NextResponse } from 'next/server';
import { pool } from '@/libs/mysql';
import { SITE_URL } from '@/libs/seoConfig';

// Función para obtener la fecha actual en formato ISO
function getCurrentDate() {
	return new Date().toISOString().split('T')[0];
}

// Función para generar el XML del sitemap
function generateSitemapXml(pages, faculties) {
	let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
	xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ';
	xml += 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ';
	xml += 'xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 ';
	xml += 'http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';

	// Agregar páginas estáticas
	pages.forEach((page) => {
		xml += '  <url>\n';
		xml += `    <loc>${page.url}</loc>\n`;
		xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
		xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
		xml += `    <priority>${page.priority}</priority>\n`;
		xml += '  </url>\n';
	});

	// Agregar páginas dinámicas para cada facultad
	faculties.forEach((faculty) => {
		xml += '  <url>\n';
		xml += `    <loc>${SITE_URL}/faculties/${faculty.id}</loc>\n`;
		xml += `    <lastmod>${getCurrentDate()}</lastmod>\n`;
		xml += '    <changefreq>weekly</changefreq>\n';
		xml += '    <priority>0.8</priority>\n';
		xml += '  </url>\n';
	});

	xml += '</urlset>';
	return xml;
}

export async function GET() {
	try {
		// Consultar todas las facultades de la base de datos
		const faculties = await pool.query('SELECT id FROM faculties');

		// Definir las páginas estáticas del sitio
		const staticPages = [
			{
				url: `${SITE_URL}/`,
				lastmod: getCurrentDate(),
				changefreq: 'weekly',
				priority: '1.0',
			},
			{
				url: `${SITE_URL}/faculties`,
				lastmod: getCurrentDate(),
				changefreq: 'daily',
				priority: '1.0',
			},
			{
				url: `${SITE_URL}/new`,
				lastmod: getCurrentDate(),
				changefreq: 'monthly',
				priority: '0.7',
			},
			{
				url: `${SITE_URL}/about`,
				lastmod: getCurrentDate(),
				changefreq: 'monthly',
				priority: '0.6',
			},
		];

		// Generar el XML del sitemap
		const sitemapXml = generateSitemapXml(staticPages, faculties);

		// Devolver el XML como respuesta
		return new NextResponse(sitemapXml, {
			headers: {
				'Content-Type': 'application/xml',
				'Cache-Control': 'public, max-age=3600',
			},
		});
	} catch (error) {
		console.error('Error generando el sitemap:', error);
		return NextResponse.json(
			{ error: 'Error generando el sitemap' },
			{ status: 500 }
		);
	}
}
