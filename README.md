# jegan's stock

i wanted to model all my data in json  
so i started with [stock.json](https://github.com/wommy/keith-jegan-stock-sql/blob/master/stock.json)

from there i easily split it into [products](https://github.com/wommy/keith-jegan-stock-sql/blob/master/products.js) and [stock](https://github.com/wommy/keith-jegan-stock-sql/blob/master/stock.js)

then i did the [orders](https://github.com/wommy/keith-jegan-stock-sql/blob/master/orders.js)

before i finished up with some [logic](https://github.com/wommy/keith-jegan-stock-sql/blob/master/logic.js)

yeah its so pseudo code, but i think itll work pretty well  
lmk what you think


## redo of above, it starts with

``` stock.json
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
```

this was a great start,  
it was everything and more than what i built with keith,  
and it only took like 20 mins instead of 5+ hours

but it wasnt in the normalized form

here im going to jump to stock.js,  
the first line, references products  
this is very good because the stock.js could be generated

products.js should be the stock.js, which should be quantities, or something  
products is the player, and thats a bad name, because its also materials  
but all the logic is in quantities, get to that later

## stock >> quantities, and products >> stock

so now i opened stock, and its bare,  
this is why all these files need to be the same,  
theyre probably going to be in app.js  
maybe i should just be writing that

## cp stock.json >> app.js ; refactor.1

of course this will not do, clean it up  
what this actually is, is the  
stock: key: product, val: material,  
mapped over an array to give it quantity  
how to show this?

## pushed .2

so whats next, i need to  
create the quantities BY map thru the objs: { key: val }

## pushed .3

orders needs alot of work  
every order that comes in is going to have an ID,  
which is going to be tied to a person ; foreign_key  
and then theres going to be a array of objects ; orderArr  
this will all be later tho

my logic in orders shows  

``` order.js

order => 
	[ thank_you, parcel ].push( -1 ),
	${ order.key }.push( ${order.val } )

```

this returns a promise  
`quantities.positive ? rej : res`

## pushed .4

so i kinda started this in the last one, but  
whats the applications logic

``` 

	newProduct( name, materialArr ) => stock.push(
		name: [ 
			( materialArr.each ) => "ea",
		]
	)

```

this is the first part  
it adds the new product to stock

the second part is  
from the product, it creates the quantities

it might be easier to work with this as an array

```

	newProduct ( name, materialArr ) => 



```
