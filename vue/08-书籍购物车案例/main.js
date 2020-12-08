var a = new Vue({
	el: '#app',
	data: {
		books: [{
				id: 1,
				name: '《算法导论》',
				data: '2006-09',
				price: 85.00,
				count: 1
			},
			{
				id: 2,
				name: '《UNIX编程艺术》',
				data: '2006-02',
				price: 59.00,
				count: 1
			},
			{
				id: 3,
				name: '《编程珠玑》',
				data: '2008-10',
				price: 39.00,
				count: 1
			},
			{
				id: 4,
				name: '《代码大全》',
				data: '2006-03',
				price: 128.00,
				count: 1
			},
		],
		currentIndex: 0,
	},
	methods: {
		deleteRow: function(index) {
			for (let i = 1; i <= this.books.length; i++) {
				if (index == i) {
					this.books.splice(i, 1);
				}
			}
		},
		addtionBookCount: function(index) {
			// for (let i = 1; i <= this.books.length; i++) {
			// 	if (index == i) {

			// 		count++;
			// 		return count;
			// 	}
			// }
			this.books[index].count++;
		},
		SubtractionBookCount: function(index) {
			//第一种方法加判断书籍数量不能小于1
			// if (this.books[index].count > 1) {
			// 	this.books[index].count--;
			// }
			//第二方法在标签上增加v-bind:disabled="book.count<=1"
			
			this.books[index].count--;
		},
		//使用方法绑定价格
		// getFullPrice:function(price){
		// 	return '￥'+price.toFixed(2);
		// }
	},
	filters: {
		//filters过滤器使用方法
		getFullPrice: function(price) {
			return '￥' + price.toFixed(2);
		},
		getTotalPrice: function() {
			let totalPrice;
			for (let i = 1; i <= this.books.length; i++) {
				totalPrice += this.books[i].price;
				alert(totalPrice)
			}
			return totalPrice;
		}
	}
})
