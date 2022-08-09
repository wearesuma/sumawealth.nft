module.exports = {
  images: {
    domains: ["cdn.curios.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/register",
        permanent: false,
      },
    ];
  },
};
