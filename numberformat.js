/*!
 * NumberFormat v1.0.0
 * A simple number formatting library by gittykurt78
 */

const NumberFormat = (function() {
  
  return {
    // Turns 1500 into "1.5K"
    short: function(num) {
      if (num >= 1000000000) return (num / 1000000000).toFixed(1) + "B";
      if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
      if (num >= 1000) return (num / 1000).toFixed(1) + "K";
      return num.toString();
    },

    // Turns 1234.567 into "$1,234.57"
    currency: function(num) {
      return "$" + num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    // Turns 0.456 into "45.6%"
    percent: function(num) {
      return (num * 100).toFixed(1) + "%";
    }
  };

})();
