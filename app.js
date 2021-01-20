/*
	{
		"products": [
			{ "name": "lighter", "quantity": [0], "materials": [
				"blank", "art", "laminate", "bag"
			] },
			{ "name": "thank-you", "quantity": [0], "materials": [
				"card", "envelope"
			] },
			{ "name": "mailer", "quantity": [0], "materials": [
				"bubble", "business_card", "sticker-1", "sticker-2", "miniprint"
			] }
		],
		"materials": [
			{ "name": "blank", "quantity": [0] },
			{ "name": "art", "quantity": [0] },
			{ "name": "laminate", "quantity": [0] },
			{ "name": "bag", "quantity": [0] },
			{ "name": "card", "quantity": [0] },
			{ "name": "envelope", "quantity": [0] },
			{ "name": "bubble", "quantity": [0] },
			{ "name": "business_card", "quantity": [0] },
			{ "name": "sticker-1", "quantity": [0] },
			{ "name": "sticker-2", "quantity": [0] },
			{ "name": "miniprint", "quantity": [0] }
		]
	}
*/

[
	{ lighter: [ "blank", "art", "laminate", "bag" ] },
	{ thank_you: [ "card", "envelope" ] },
	{ parcel: [ "mailer", "business_card", "sticker_1", "sticker_2", "miniprint" ] }
]

/* so what am i doing here?
 * 
 * for ea { key: val } in stock
 *   { ea: [0] }
 */

/*
	{ : [ "0" ] },

	lighter, blank, art, laminate, bag,
	thank_you, card, envelope,
	parcel, mailer, business_card, sticker_1, sticker_2, miniprint,

*/

[
	{ lighter: [ "0" ] },
	{ blank: [ "0" ] },
	{ art: [ "0" ] },
	{ laminate: [ "0" ] },
	{ bag: [ "0" ] },
	{ thank_you: [ "0" ] },
	{ card: [ "0" ] },
	{ envelope: [ "0" ] },
	{ parcel: [ "0" ] },
	{ mailer: [ "0" ] },
	{ business_card: [ "0" ] },
	{ sticker_1: [ "0" ] },
	{ sticker_2: [ "0" ] },
	{ miniprint: [ "0" ] },
]

