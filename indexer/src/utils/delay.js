const delay = (ms = 5_000) => new Promise(res => setTimeout(res, ms));

export default delay;