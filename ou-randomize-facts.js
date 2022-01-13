$(document).ready(function() {
	(function($, displayCount) {

		var $factsBlock = $('section.facts_block, section.program_finder')

		function shuffle(array) {
			var currentIndex = array.length,
				temporaryValue, randomIndex;

			// While there remain elements to shuffle...
			while (0 !== currentIndex) {

				// Pick a remaining element...
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;

				// And swap it with the current element.
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}

			return array;
		}

		function randomize(displayCount) {
			$factsBlock.each(function() {
				var $facts = shuffle($(this).find('article'))

				for (var i = 0; i < $facts.length; i++) {
					var $fact = $($facts[i])

					if (i < displayCount) {
						$fact.show()
					} else {
						$fact.hide()
					}
				}
			})
		}

		randomize(displayCount)

		return {}

	})(jQuery, 3)
})