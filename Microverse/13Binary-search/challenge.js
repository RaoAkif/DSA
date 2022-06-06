module.exports = function sqrt(number) {
    return sqrt_recursive(number, 0, number)
  }
  
  /**
   * Returning condition to break the loop
   * 
   * 
   * @param {*} number 
   * @param {*} min_interval 
   * @param {*} max_interval
   * @returns 
   */
  function sqrt_recursive(number, min_interval, max_interval) {
    // write your code here
    let mid_point = Math.floor((min_interval + max_interval)/2);
    let approx = mid_point * mid_point
    console.log(mid_point)

    if (approx == number ) {return mid_point};
    if (mid_point*mid_point > number) max_interval = mid_point;
    else min_interval = mid_point;
    
    return sqrt_recursive(number, min_interval, max_interval);
  
  
  }
    