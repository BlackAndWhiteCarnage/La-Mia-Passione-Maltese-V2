const getContentTag = (content: string) => (
	<p className="is-style-p-large">{content}</p>
);

const faq = [
	{
		label: 'Kiedy mogę odebrać pieska?',
		children: getContentTag(
			'Nasze maluszki mogą opuścić dom po ukończeniu 12 tygodni, NIE WCZEŚNIEJ.'
		),
	},
	{
		label: 'Ile kosztuje Maltańczyk?',
		children: getContentTag(
			'Cena pieska jest ustalana indywidualnie. Piesek na kolanka ma inną cenę niż piesek na wystawy.'
		),
	},
	{
		label: 'Jaki charakter będzie miał mój Maltańczyk?',
		children: getContentTag(
			'Charakteru nie da się tak naprawdę określić, tak samo jak z dziećmi. Wszystko zależy od wychowania. Pies w pełni fizycznie i emocjonalnie rozwija się do drugiego roku życia. Mamy obecnie cztery pieski a każdy to inny świat.'
		),
	},
	{
		label: 'Czy wszystkie Maltańczyki mają zacieki?',
		children: getContentTag(
			'Zacieki to nie choroba genetyczna. Występują między innymi przez: złe żywienie, złą pielęgnacje, alergię pokarmowe, kwitnące pyłki, zapalenie spojówek, drażniące zapachy(perfumy, zapachowe świeczki, płyny do płukania ubrań)'
		),
	},
	{
		label: 'Czy mogę rozmnożyć psa?',
		children: getContentTag(
			'Zgodnie z umową cywilno-prawną zakup psa rasowego jest bez prawa do rozmnażania. Pieska możemy rozmnożyć jedynie w przypadku kupna psa z przeznaczeniem na wystawy i do hodowli.'
		),
	},
	{
		label: 'Czy mogę kupić psa na prezent?',
		children: getContentTag(
			'Zdażają się szczeniaki oddane zaraz po gwiazdce jako nietrafiony prezent. Dlatego bez poznania i świadomej decyzji potencjalnego właściciela nie ma takiej możliwości.'
		),
	},
	{
		label: 'Ile kosztuje utrzymanie Maltańczyka?',
		children: getContentTag(
			'Maltańczyk choć mały, to wymagająca rasa, zarówno pielęgnacja jak i żywienie pochłania troszkę kosztów. Musi być specjalna dieta (wszystko zapisanie w instrukcji hodowlanej) i odpowiednie kosmetyki. Trzeba mieć świadomość, że to następna „kobieta” w domu i raz na miesiąc potrzebuje fryzjera. Nie da się zrobić po taniości i pół środkami, bo znisczymy piękny biały, jedwabisty w dotyku włos. Nie możemy również zapmnieć o kosztach na weterynarza (szczepienia, odrobaczenia itp.). No i oczywiście zabawki!'
		),
	},
	{
		label: 'Czy pierwsze spotkanie jest obowiązkowe?',
		children: getContentTag(
			'Tak, pierwsze spotkanie jest obowiązkowe. Dzięki temu my mamy możliwość poznania potencjalnego właściciela i podjęcia decyzji. Zarówno jak i Państwo mają możliwość zobaczyć z czym to się wiążę.'
		),
	},
];

export default faq;
