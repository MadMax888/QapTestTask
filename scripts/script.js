
function cart (sSelector, sSelectorBasket) {
	var c = this;

	// 1. Секция данных ================= ===
	c.cart            = $(sSelector);
	c.basket          = $(sSelectorBasket);
	c.amount          = 0;
	c.jqCurrentGood   = null;
	c.basketCount     = 0; 
	c.basketCountsSum = 0; 
	c.CurrentPrice    = 0;

	//2. Секция логики (функции) ====================
	c.plus = function (){
		c.jqCurrentGood    = c.cart.find(this).closest(".b-good"); 
		c.CurrentPrice     = Number( c.jqCurrentGood.find(".b-good__price").html().match(/([0-9]{1,6})/)[0] );
		c.amount           = Number( c.jqCurrentGood.find(".b-counter__amount-count").html() );
		c.amount          += 1;
		c.jqCurrentGood.find(".b-counter__amount-count").html(c.amount);

		c.basketCount += c.CurrentPrice; console.log("c.basketCount =" + c.basketCount);
		c.basket.children().html("$" + c.basketCount);
		}
	c.minus = function (){
		c.jqCurrentGood    = c.cart.find(this).closest(".b-good");
		c.amount           = Number( c.jqCurrentGood.find(".b-counter__amount-count").html() );
		if (c.amount == 0) {
			c.amount -= 0;
			}
		else {
			c.amount -= 1;
			c.jqCurrentGood.find(".b-counter__amount-count").html(c.amount);
			c.CurrentPrice = Number(c.jqCurrentGood.find(".b-good__price").html().match(/([0-9]{1,6})/)[0]);
			c.basketCount -= c.CurrentPrice;
			c.basket.children().html("$" + c.basketCount);
			}
		}

	// 3. Секция событий =============================
	c.cart.find(".b-button_minus") .bind("click", c.minus);
	c.cart.find(".b-button_plus")  .bind("click", c.plus);
}