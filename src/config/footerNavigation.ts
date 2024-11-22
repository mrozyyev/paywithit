// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'PayWithIt',
		aboutText:
			'PayWithIt provides seamless and secure payment solutions tailored for the African continent. We offer ordinary payment systems backed by European laws and GDPR compliance.',
		logo: {
			src: '/logo.svg',
			alt: 'PayWithIt logo',
			text: 'PayWithIt'
		}
	},
	footerColumns: [
		{
			category: 'Product',
			subCategories: [
				{
					subCategory: 'Features',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Pricing',
					subCategoryLink: '/pricing'
				},
				// {
				// 	subCategory: 'Changelog',
				// 	subCategoryLink: '/changelog'
				// },
				{
					subCategory: 'Terms & Conditions',
					subCategoryLink: '/terms'
				}
			]
		},
		{
			category: 'About Us',
			subCategories: [
				{
					subCategory: 'About Us',
					subCategoryLink: '/about'
				},
				{
					subCategory: 'News',
					subCategoryLink: '/news'
				},
				{
					subCategory: 'Careers',
					subCategoryLink: '/careers'
				}
			]
		},
		{
			category: 'Get In Touch',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Support',
					subCategoryLink: '/support'
				},
				{
					subCategory: 'Join Us',
					subCategoryLink: '/join'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© PayWithIt 2024. All rights reserved.'
	}
}
