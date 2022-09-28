const { bucket } = require('./firebase');

async function getUrlImages(){
  const banner = await bucket.file('banner1.PNG', { generation: 1}).publicUrl();
  const logo = await bucket.file('logo-economicas.svg', { generation: 1}).publicUrl();

  return {
    banner,
    logo
  };
}

module.exports = {
  getUrlImages
};