// whats the schema?

// forEach Order
// new Order = { lighter: 3 }
// 

[
	{ lighter: 3 }
]

// -3 lighters, -1 thank_you, -1 mailer

// -1 ea [ thank_you, mailer ], -${order.value} ${order.key}
// -1 ea [ thank_you, mailer ], -3 lighter

/*
	order( order_ID ) => 
		stock =>
			[thank_you, mailer].push(-1), 
			${order.key}.push(-${order.val}), 
*/

// returns a promise