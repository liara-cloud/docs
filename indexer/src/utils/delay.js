const delay = (ms = 2_500) => new Promise(res => setTimeout(res, ms));

export default delay;