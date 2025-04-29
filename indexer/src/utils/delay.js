const delay = (ms = 2_000) => new Promise(res => setTimeout(res, ms));

export default delay;