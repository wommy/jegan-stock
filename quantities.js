// pseudo code
// forEach key, val in products:

	// productARR: lighter, thank_you, mailer
	// materialARR: blank, art, laminate, bag, card, envelope, 
		// bubble, business_card, sticker_1, sticker_2, miniprint

	// totalArr = productArr + materialArr

	// { name: [quantity] }
	// { : [0] },

/*
	[
		{ lighter: [0] },
		{ thank_you: [0] },
		{ mailer: [0] },
		{ blank: [0] },
		{ art: [0] },
		{ laminate: [0] },
		{ bag: [0] },
		{ card: [0] },
		{ envelope: [0] },
		{ bubble: [0] },
		{ business_card: [0] },
		{ sticker_1: [0] },
		{ sticker_2: [0] },
		{ miniprint: [0] }
	]
*/

[
	{ key: "lighter", quantityArr: [0] },
	{ key: "thank_you", quantityArr: [0] },
	{ key: "mailer", quantityArr: [0] },
	{ key: "blank", quantityArr: [0] },
	{ key: "art", quantityArr: [0] },
	{ key: "laminate", quantityArr: [0] },
	{ key: "bag", quantityArr: [0] },
	{ key: "card", quantityArr: [0] },
	{ key: "envelope", quantityArr: [0] },
	{ key: "bubble", quantityArr: [0] },
	{ key: "business_card", quantityArr: [0] },
	{ key: "sticker_1", quantityArr: [0] },
	{ key: "sticker_2", quantityArr: [0] },
	{ key: "miniprint", quantityArr: [0] }
]

/*
	for ea in [ lighter, thank_you, mailer, blank, art, laminate, bag, card, envelope, bubble, business_card, sticker_1, sticker_2, miniprint ]
		{ key: ea, quantityArr: [0] }
*/
