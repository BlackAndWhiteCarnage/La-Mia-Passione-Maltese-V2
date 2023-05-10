/**
 * Internal dependencies
 */
import { ReactComponent as FacebookIcon } from '@/icons/facebook.svg';
import { ReactComponent as EmailIcon } from '@/icons/email.svg';
import { ReactComponent as PhoneIcon } from '@/icons/phone.svg';

export const navigationLinks = [
	{
		label: 'Strona Główna',
		href: '#home-page',
	},
	{
		label: 'O Hodowli',
		href: '#about-us',
	},
	{
		label: 'Nasze Psy',
		href: '#our-dogs',
	},
	{
		label: 'Wystawy',
		href: '#exhibitions',
	},
	{
		label: 'Kupno Szczeniaka',
		href: '#purchase-process',
	},
	{
		label: 'Faq',
		href: '#faq',
	},
	{
		label: 'Kontakt',
		href: '#contact',
	},
];

export const contactLinks = [
	{
		icon: FacebookIcon,
		href: 'https://www.facebook.com/La-mia-Passione-Maltese-Kasia-Repsch-508000912674823',
	},
	{
		icon: EmailIcon,
		href: 'mailto:kasia.repsch@wp.pl',
	},
	{
		icon: PhoneIcon,
		href: 'tel:880-275-820',
	},
];
